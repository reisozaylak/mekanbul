"use strict";

var express = require('express');

var router = express.Router();

var anasayfa = function anasayfa(req, res, next) {
  res.render('anasayfa', {
    'title': "Anasayfa"
  });
};

var mekanbilgisi = function mekanbilgisi(req, res) {
  res.render('mekanbilgisi', {
    'title': "Mekan Bilgisi"
  });
};

var yorumekle = function yorumekle(req, res) {
  res.render('yorumekle', {
    "title": "Yorum Sayfasi"
  });
};

module.exports = {
  anasayfa: anasayfa,
  mekanbilgisi: mekanbilgisi,
  yorumekle: yorumekle
};
//# sourceMappingURL=mekanlar.dev.js.map
