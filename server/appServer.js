const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})


app.listen(1337, () => console.log('Listenin port 1337.'))

const express = require('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');

const port = 3000;

app.use(bodyParser.json());
app.use(express.static('../client')); // Adjust path to your frontend if needed

// Routes
app.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

app.route('/api/feed/:id')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});