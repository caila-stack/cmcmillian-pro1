const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

let feedController = require('./controller/feedController');

app.route('/api/FeedItems')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItems)

    app.route('/api/FeedItems/:FeedItemsId')
    .get(feedController.getFeedItems)
    .delete(feedController.deleteFeedItems)
    .patch(feedController.updateFeedItem)
    



app.listen(1337, () => console.log('Server running on port 1337.'))

