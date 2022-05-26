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
gauntlet = The Gauntlet ID of the levels<br><br>
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
    "description": "...",
    "playerID": 503085,
    "accountID": 37415,
    "author": "Riot",
    "downloads": 43502836,
    "difficulty": "Extreme Demon",
    "likes": 2348422,
    "disliked": false,
    "stars": 10,
    "diamonds": 12,
    ...
  },
  ...
]
```
