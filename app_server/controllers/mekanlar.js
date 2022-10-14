var express = require('express');
var router = express.Router();



const anasayfa = function(req, res, next){
    res.render('anasayfa', { 'title': "Anasayfa" });
}

const mekanbilgisi = function(req, res){
    res.render('mekanbilgisi', { 'title': "Mekan Bilgisi" });
}
const yorumekle = function(req, res){
    res.render('yorumekle', { "title": "Yorum Sayfasi" });

}


module.exports= {
    anasayfa,
    mekanbilgisi,
    yorumekle


};


    
