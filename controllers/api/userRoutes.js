require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
const { User } = require('../../models');
//const { Art_Lover } = require('../../models/Art_Lover');
let userType = '';

const randString = () => {
  const len = 8;
  let randStr = ''
  for(let i=0; i<len; i++) {
    const ch = Math.floor((Math.random() * 10) + 1)
    randStr += ch
  }

  return randStr
}

const uniqueString = randString();

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      is_artist: req.body.is_artist,
      unique_string: uniqueString,
      is_valid: false,
    });

    console.log(newUser);
    req.session.save(() => {
      // req.session.userId = newUser.id;
      // req.session.username = newUser.username;
      // req.session.username = newUser.username;
      req.session.loggedIn = false;

      res.json(newUser);
    });
    
    let transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.user, // generated sendgrid user
        pass: process.env.pass, // generated sendgrid password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: 'ArtSea <artseafeb2022@gmail.com>', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: "Welcome to ArtSea", // Subject line
      text: "Hello world?", // plain text body
      html: `Dear <b>${req.body.username}</b>,
      Welcome to <b>ArtSea</b><br>\
      Please verify yourself by clicking on this <a href=http://artsea-2022.herokuapp.com/api/users/verify/${uniqueString}>link</a>`, // html body
    }
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/verify/:uniqueString', async (req, res) => {
  const {uniqueString} = req.params
  console.log("req = "+uniqueString);
  const user = await User.findOne({where: {unique_string: uniqueString} })
  console.log(user);
  if (user) {
    user.is_valid = true
    await user.save();
    res.redirect('/');
  }
  else {
    res.json('User not found');
  }
});
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const isValid = await userData.checkIsValid();
    if(!isValid) {
      console.log("IsValid = "+isValid);
      res
        .status(400)
        .json({ message: 'Please verify your email' });
      return;
    }
    else {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        req.session.userType = userData.is_artist;
        req.session.name = userData.first_name+" "+userData.last_name
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    }
  } catch (err) {
    res.status(400).json({message: 'No user account found!'});
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log(req.session);
    res.status(404).end();
  }
});

router.post('/getUserInfo', async (req, res) => {
  if (req.session.loggedIn) {
    res
        .status(200)
        .json({ user: req.session.userType, userId: req.session.user_id });
  } else {
    res
        .status(200)
        .json({ user: "LoggedOut"})
  }
});

module.exports = router;
