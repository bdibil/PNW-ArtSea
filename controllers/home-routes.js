const router = require('express').Router();
const { Art_Piece, User, Art_Type,Artist,Collection} = require('../models');
const artroute = require('../controllers/api/art-routes')
const {request} = require("express");
const {getArtistNames} = require("./utils/getAllArtistNames");
const {getArtTypes} = require("./utils/getArtTypes");
const {getArtPieces} = require("./utils/getArtPieces");

// GET all galleries for homepage
router.get('/', async (req, res) => {
  let latest = await artroute.getLatest();
  const artistNames = await getArtistNames();
  const artTypes = await getArtTypes();
  const artPieces = await getArtPieces();
  let mostLiked = await artroute.getMostLiked();

  res.render('homepage', {
    latest : latest,
    artistNames: artistNames,
    artTypes: artTypes,
    artPieces: artPieces,
    mostLiked: mostLiked
  });
});

// router.get('/', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });
//
//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );
//
//     console.log(galleries);
//
//     res.render('homepage', {
//       galleries,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/upload-art', (req, res) => {

  res.render('upload-art');
});

module.exports = router;
