# gd-parser
A NPM package for fetching information of Geometry Dash's servers

---

**gd-parser** uses the [default API](https://boomlings.com/database/) for Geometry Dash, which looks something like 
[this](https://i.imgur.com/IyNwtqz.png)...

However, **gd-parser** returns you this mess in beautiful JSON, just look at it:
```JSON
{
  "id": 10565740,
  "name": "Bloodbath",
  "description": "",
  "playerID": 503085,
  "accountID": 37415,
  "author": "Riot",
  "downloads": 43482511,
  "difficulty": "Extreme Demon",
  "likes": 2347553,
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
  "difficultyFace": "demon-extreme-featured"
  }
```
## Usage
To use **gd-parser**, import it using `require("gd-parser")` or `import gd-parser from "gd-parser"`.

Interacting with the API is also incredibly easy:
<br>
For example, fetching Search Data works like this:
```JS
const { LevelSearchRequest } = require("gd-parser");
new LevelSearchRequest({type:"MOST_LIKED"}, (json) => { // callback with data
    console.log(json);
});
```

Every request consists of a JSON object with the request data, and a callback with the finished results in clean and 
beautiful JSON.
<br> This package supports Typings in your IDE to help you on your track.

## Thanks
A special thanks to the contributors of **GDDocs**, a tool for viewing all Geometry Dash API endpoints and their 
documentation on those endpoints.