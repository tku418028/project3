const db = require('../utils/database');

const Anime = class Anime {
    constructor(id, name, cid, imgUrl) {
        this.id = id;
        this.name = name;
        this.cid = cid;
        this.imgUrl = imgUrl; 
    }

    static fetchAll() {
        return db.execute('select a.name, c.category, a.imgUrl from anime as a, category as c where a.cid=c.id');
    }
};

const testFetchAll = async (req, res) => {
    try{
        await Anime.fetchAll().then(([rows]) => {
            console.log('testFetchAll', JSON.stringify(rows));
        });
    }catch(err){
        console.log(err);
    }
};

//testFetchAll();

module.exports = Anime;