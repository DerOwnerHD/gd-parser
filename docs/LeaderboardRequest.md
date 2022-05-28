# LeaderboardRequest

---
Class for retrieving global leaderboards

## Parameters

---
### Optional parameters
type - Type of leaderboard to get (defaults to stars) | "STARS" or "CREATORS" | string<br><br>
count - How many should be returned (limit is 100) | number

## Example

---
Returns us the 5 player with the most stars
```JS
const { LeaderboardRequest } = require("gd-parser");
new LeaderboardRequest({
    type: "STARS",
    count: 5,
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "username": "Smiffy777",
    "playerID": 7708568,
    "accountID": 1413859,
    "rank": 1,
    "stars": 204499,
    "diamonds": 141518,
    "coins": 149,
    "userCoins": 41323,
    "demons": 4965,
    "cp": 0,
    "col1": 29,
    "col2": 14,
    "icon": 115,
    "form": "icon"
  }, {
    "username": "Cool",
    "playerID": 1148292,
    "accountID": 4825,
    "rank": 2,
    "stars": 200251,
    "diamonds": 109820,
    "coins": 149,
    "userCoins": 23218,
    "demons": 4824,
    "cp": 0,
    "col1": 20,
    "col2": 17,
    "icon": 37,
    "form": "icon"
  }, 
  ...
]
```
