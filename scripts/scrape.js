const request = require('request');
const cheerio = require('cheerio');

const scrape = function(cb) {
    request('http://www.nytimes.com', function(err,res,body){
        const $ = cheerio.load(body);
        const articles = [];

        $('.theme-summary').each(function(i, element){
            const head = $(this).children('.story-heading').text().trim();
            const sum = $(this).children('summary').text().trim();

            if(head &&  sum){
                const headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();
                const sumNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();

                const dataToAdd = {
                    headLine: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};

module.export = scrape;