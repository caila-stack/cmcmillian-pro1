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

