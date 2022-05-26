# LevelSearchRequest

---
Class for retrieving Search Information

## Parameters

---
type - Type of search<br><br>
str - Search string<br><br>
diff - Selected difficulty<br><br>
demonFilter - The type of Demon selected<br><br>
page - The page of the search results<br><br>
len - The length of the levels<br><br>
gauntlet - The Gauntlet ID of the levels<br><br>
song - ID of the offical song searched for<br><br>
customSong - ID of the custom song searched for<br><br>
featured - If the levels are featured<br><br>
epic - If the levels should be rated Epic<br><br>
originalOnly - If only original levels should be shown<br><br>
twoPlayer - Only show Two Player levels<br><br>
coins - If the levels should have verified coins<br><br>
star - If the levels should be starred<br><br>
noStar - If the levels shouldn't be starred<br><br>
count - How many levels should be returned

## Example

---

So we're trying to get Extreme Demons with **blood** in the name, and it would work something like this:
```JS
const { LevelSearchRequest } = require("gd-parser");
new LevelSearchRequest({
    str: "blood",
    diff: -2,
    demonFilter: 5,
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "id": 10565740,
    "name": "Bloodbath",
    "description": "Whose blood will be spilt in the Bloodbath? Who will the victors be? How many will survive? Good luck...",
    "playerID": 503085,
    "accountID": 37415,
    "author": "Riot",
    "downloads": 43503743,
    "difficulty": "Extreme Demon",
    "likes": 2348476,
    "disliked": false,
    "stars": 10,
    "diamonds": 12,
    "orbs": 500,
    "version": 3,
    "length": "Long",
    "featured": true,
    "epic": false,
    "gameVersion": "2.1",
    "copiedID": 7679228,
    "twoPlayer": false,
    "large": false,
    "officalSong": 0,
    "customSong": 467339,
    "coins": 0,
    "verifiedCoins": false,
    "starsRequested": 0,
    "ldm": false,
    "objects": 24746,
    "password": 0,
    "songName": "At the Speed of Light",
    "songAuthor": "Dimrain47",
    "songLink": "http://geometrydashcontent.com/songs/467339.mp3",
    "songSize": "9.56MB",
    "songID": 467339,
    "difficultyFace": "demon-extreme-featured",
    "extraData": null,
    "levelData": null
  },
  ...
]
```