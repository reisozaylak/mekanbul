"use strict";

var express = require('express');

var router = express.Router();

var ctrlmekanlar = require("../controllers/mekanlar");

var ctrldigeri = require("../controllers/digeri");

router.get('/', ctrlmekanlar.anasayfa);
router.get('/mekan', ctrlmekanlar.mekanbilgisi);
router.get('/mekan/yorum/yeni', ctrlmekanlar.yorumekle);
router.get('/hakkinda', ctrldigeri.hakkinda);
module.exports = router;
//# sourceMappingURL=index.dev.js.map
