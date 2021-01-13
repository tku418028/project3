const Anime = require('../models/animeModel');

exports.getAnime = async (req, res) => {
    try{
        await Anime.fetchAll().then(([rows]) => {
            console.log('getAnime', JSON.stringify(rows));
            res.json(rows);
        });
    }catch(err){
        console.log(err);
    }
}