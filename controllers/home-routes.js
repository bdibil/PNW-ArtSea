const router = require('express').Router();
const { Art_Piece, User, Art_Type,Artist,Collection} = require('../models');
const artroute = require('../controllers/api/art-routes')
const {request} = require("express");
const {getArtistNames} = require("./utils/getAllArtistNames");
const {getArtTypes} = require("./utils/getArtTypes");
const {getRegistry} = require("./utils/get-registry")
const {getAllArtPieces, getArtistArtPieces, getArtPieces} = require("./utils/getArtPieces");

router.get('/', async (req, res) => {
  const category = req.query.category;
  const artist = req.query.artist;
  console.log("router("+category+"+, "+artist+")");
  let latest = await artroute.getLatest();
  const artistNames = await getArtistNames();
  const artTypes = await getArtTypes();
  const artPieces = await getAllArtPieces(req.session.loggedIn, req.session.user_id, category, artist);

  let mostLiked = await artroute.getMostLiked();

  console.log("getAllArtPieces = "+JSON.stringify(artPieces))

  res.render('homepage', {
    latest : latest,
    artistNames: artistNames,
    artTypes: artTypes,
    artPieces: artPieces,
    mostLiked: mostLiked
  });
});

router.get('/', async (req, res) => {
  const userId = req.query.userid;
  const registryArt = await getRegistry(userId);

  res.render('shared-registry', {
    registryArt: registryArt
  });
});

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

router.get('/my-registry', async (req, res) => {
  const userId = req.session.user_id;
  const registryArt = await getRegistry(userId);
  const shareUrl = "http://localhost:3001/sharedRegistry/?userid="+userId;
  console.log("shareUrl "+shareUrl);

  res.render('registry', {
    registryArt: registryArt,
    userId: userId,
    shareUrl: shareUrl
  });
});

router.get('/sharedRegistry', async (req, res) => {
  const userId = req.query.userid;
  const registryArt = await getRegistry(userId);

  res.render('shared-registry', {
    registryArt: registryArt
  });
});

router.get('/my-art', async (req, res) => {
  const myArtPieces = await getArtistArtPieces(req.session.user_id);

  res.render('my-art', {
    artPieces: myArtPieces,
  });
});

router.get('/about-us', async (req, res) => {
  res.render('aboutUs');
});

module.exports = router;
