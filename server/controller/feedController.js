// server/controller/feedController.js

const { FeedItem, feedItems } = require('../model/feedItem');

// 1. Get all feed items
exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// 2. Save a new feed item
exports.saveFeedItem = (req, res) => {
    const { title, body, linkUrl, imageUrl } = req.body;
    const newItem = new FeedItem(title, body, linkUrl, imageUrl);
    feedItems.push(newItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(newItem);
};

// 3. Get feed item by ID
exports.getFeedItem = (req, res) => {
    const id = parseInt(req.params.id);
    const item = feedItems.find(f => f.id === id);
    res.setHeader('Content-Type', 'application/json');
    item ? res.send(item) : res.status(404).send({ error: 'Item not found' });
};

// 4. Delete feed item by ID
exports.deleteFeedItem = (req, res) => {
    const id = parseInt(req.params.id);
    const index = feedItems.findIndex(f => f.id === id);
    if (index !== -1) {
        feedItems.splice(index, 1);
        res.send({ message: 'Item deleted' });
    } else {
        res.status(404).send({ error: 'Item not found' });
    }
};

// 5. Update feed item by ID
exports.updateFeedItem = (req, res) => {
    const id = parseInt(req.params.id);
    const item = feedItems.find(f => f.id === id);
    if (item) {
        const { title, body, linkUrl, imageUrl } = req.body;
        if (title) item.title = title;
        if (body) item.body = body;
        if (linkUrl) item.linkUrl = linkUrl;
        if (imageUrl) item.imageUrl = imageUrl;
        res.send(item);
    } else {
        res.status(404).send({ error: 'Item not found' });
    }
};