const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewURL(req, res) {
  const body = req.body;
  if(!body.url) return res.status(400).json({error : "url is required"});
  const shortURL = shortid(8);

  await URL.create({
    shortURL : shortURL,
    redirectedURL : body.url,
    urlAnalytics: [],
  });
  return res.render("home", {id : shortURL});
  // return res.status(201).json({msg : `successfully created with new url ${shortURL}`});
}

async function handleGetAnalytics(req, res) {
  const shortid = req.params.shortid;
  const result = await URL.findOne({shortURL : shortid});
  return res.json({totalClicks : result.urlAnalytics.length, analytics : result.urlAnalytics});
}

module.exports = {
  handleGenerateNewURL,
  handleGetAnalytics,
}