var express = require('express');
var router = express.Router();



const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    { 
    "baslik":"Anasayfa",
    "sayfaBaslik": {
    "siteAd":"MekanBul",
    "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Çay","Tatlı Çeşitleri"],
            "mesafe":"10km"
        },
        {
            "ad":"Barida Kafe",
            "puan":"4",
            "adres":"SDU Batı Kampüsü",
            "imkanlar":["Kahve","Çay","Tatlı Çeşitleri"],
            "mesafe":"1km"
        },

    ]
});
};


const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', 
    {
        "baslik":"Mekan Bilgisi",
        "mekanBaslik":"Starbucks",
        "mekanDetay":{
            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Çay","Tatlı Çeşitleri"],
            "koordinatlar":{
                "enlem":"37.7",
                "boylam":"30.5"
            },
            "saatler":[
                {
                "gunler":"Pazartesi-Cuma",
                "acilis":"9:00",
                "kapanis":"23:00",
                "kapali": false
                },
                {
                "gunler":"Cumartesi-Pazar",
                "acilis":"8:00",
                "kapanis":"22:00",
                "kapali": false
                }

            ],
          
            "yorumlar":[
                {
                    "yorumYapan":"Reis Özaylak",
                    "yorumMetni":"KÖTÜ",
                    "yorumTarihi":"20 Ekim 2022",
                    "puan":"2"
                },
                {
                    "yorumYapan":"Reis Özaylak",
                    "yorumMetni":"berbatttt",
                    "yorumTarihi":"20 Ekim 2022",
                    "puan":"2"
                }
            ]
           


        }
     });
};

const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};




module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,

};