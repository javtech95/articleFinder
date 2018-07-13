const scrape = require('../scripts/scrape');
const makeDate = require('../scripts/date');

const Headline = require('../models/Headline');

module.exports = {
    fetch: function (cb) {
        scrape(function (data) {
            const articles = data;
            for (const i=0; i < articles,lenght; i++){
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            Headline.collection.insertMany(articles,{ordered:false}, function (err,docs) {
                cb(err,docs);
            });
        });

    },
    delete: function (query, cb) {
        HeadLine.remove(query, cb);
    },
    get: function (query,cb) {
        Headline.find(query)
            .sort({
                _id: -1
            })
            .exec(function (err,doc) {
                cb(doc);
            });
    },
    update: function (query,cb) {
        Headline.update({_id:}), {
            $set:query
        },{}, cb);
    };
}