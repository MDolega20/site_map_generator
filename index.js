const sm = require('sitemap')
    , fs = require('fs');

let hostname = "https://schoolpick.pl";
let filename = "schoolpick";
let sitemap = sm.createSitemap({
    hostname: hostname,
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls: [
        { url: '/', changefreq: 'weekly', priority: 1, lastmodrealtime: true },
        { url: '/o_nas', changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/kontakt', changefreq: 'weekly', priority: 0.2, lastmodrealtime: true },
        { url: '/szkoly', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true },
        { url: '/szkola/', changefreq: 'daily', priority: 0.8, lastmodrealtime: true }
    ]
});

fs.writeFileSync("resources/"+filename+"_sitemap.xml", sitemap.toString());