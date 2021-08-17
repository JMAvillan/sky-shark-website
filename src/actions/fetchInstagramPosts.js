const axios = require('axios')
// const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const Insta = require('scraper-instagram');
const InstaClient = new Insta();
const skySharkGroupInstagramURL = "https://www.instagram.com/skysharkgroup/"



/*
This need to run on a node js enviroment. When we set up firebase we can make this into a cloud function */
//https://medium.com/weekly-webtips/how-to-create-web-page-scraper-in-nodejs-fcf1fccc1e21
// const fetchInstagramPostsCF = async () => {
//     try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.goto(skySharkGroupInstagramURL);
//         const bodyHTML = await page.content();
//         await page.close();
//         await browser.close();
//         const selector = cheerio.load(bodyHTML);

//         const body = selector("body");
//         const posts = body.find("XjzKX").html();
//         // const price = body.find("#priceblock_ourprice").html();
//         // const seller = body.find("#sellerProfileTriggerId").html();
//         // const image = body.find("#landingImage").attr("src");
//         // const features = body.find("#feature-bullets").html();
//         //
//         // const product = {
//         //     title: title,
//         //     price: price,
//         //     seller: seller,
//         //     image: image,
//         //     features: features,
//         // };
//         console.log(posts);
//     } catch (error) {
//         console.error(error)
//     }
// }

const fetchInstagramPosts = async () => {
    try {
        const profile = await InstaClient.getProfile('skysharkgroup');
        console.log(profile);
    } catch (e) {
        console.log(e)
    }
}
// fetchInstagramPosts();