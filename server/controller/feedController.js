const FeedItems = require ('../model/feedItem');
let feedItem1 = new FeedItems('blah','fart', 'six','seven','fan','faith','modl')
let feedItem2 = new FeedItems('bah','frt', 'si','even','an','fith','mdl')
let feedItem3 = new FeedItems('bh','ft', 'i','een','n','fth','dl')

let feedItems = [feedItem1, feedItem2, feedItem3]

exports.getAllFeedItems = (req,res) => {
    console.log("blah")
    res.setHeader('content-type','application/json');
    res.send(JSON.stringify(feedItems));
}

exports.saveFeedItemHandler=(req,res) => {
    let newItem = feedItem1.FeedItems(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    allFeedItems.push(newItem);
    res.setHeader("content-type", "pplication/json");
    res.send(newitem);
    res.send(JSON.stringify(allFeedItems))
};

exports.getFeedItem = (req,res) => {
    const id = parseInt(req,URLSearchParams.FeedItemsId);
    if (isNaN(id) ||id < 0|| id>= allFeedItems.length) {
        res.set('content-Type','application/json');
        res.send(JSON.stringify({ error: "feed item not found"}));
        return;

    }
    const item = allFeedItems[id];

    res.set('content-type','application/json');
    res.send(JSON.stringify(item));
};

exports.deleteFeedItem = (req,res) => {
    const id = parseInt(req.params.feedItemId);

    if (isNaN(id) ||id < 0|| id>= allFeedItems.length){
       res.set('content-Type','application/json');
        res.send(JSON.stringify({ error: "feed item not found"}));  
    }

}