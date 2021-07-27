const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const axios = require("axios")

// Initialize the firebase-admin SDK module
admin.initializeApp(functions.config().firebase);

// Set the Express app
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));


console.log(functions.config())
const twitterApi = axios.create({
    baseURL: 'https://api.twitter.com/2/',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${functions.config().twitterapi.bearer}`
    }
});



// Handle push notifications request
app.get("/test", (req, res) => {
    const user_id = 25084916
  //  const params = "tweet.fields=created_at&user.fields=username,name,profile_image_url&media.fields=public_metrics"
    const params = "tweet.fields=public_metrics&user.fields=username,profile_image_url"
    console.log(params)
    //tweet.fields=created_at&user.fields=username,name,&media.fields=public_metrics
    twitterApi.get("users/" + user_id + "/tweets?" + params)
    .then(twitter => {
        var tweets = twitter.data.data
        console.log(twitter)
        res.send(tweets)
    })
    .catch(err => {
        console.log(err.message)
        res.send(err)
    })
});

// Routes needed: 
/* 
Live feed from twitter
User Login 
Betting lines 
Database needs to store users bets
*/


exports.app = functions.https.onRequest(app);
// Handle another request
// app.post("/anotherRoute", require("./controllers/anotherController"));

// Export the https endpoint API handled by the Express app
// export const api = functions.https.onRequest(app);