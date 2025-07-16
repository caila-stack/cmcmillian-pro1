const feedItem = require (' ../model/feedItem')
let onFeedItem= feedItem.newFeedItem('blah','fart', 'six','seven','fan','faith','modl')
let twoFeedItem = feedItem.newFeedItem('bah','frt', 'si','even','an','fith','mdl')
let threeFeedItem = feedItem.newFeedItem('bh','ft', 'i','een','n','fth','dl')


let feedItem=[onFeedItem, twoFeedItem, threeFeedItem];

exports.getAllUsers = (req,res) => {
    res.setHeader('content-type','application/json');
    res.send(JSON.stringify(people));
}
