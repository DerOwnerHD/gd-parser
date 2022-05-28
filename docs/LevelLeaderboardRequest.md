# LevelLeaderboardRequest

---
Class for retrieving the leaderboard of a level

## Parameters

---
### Required parameters
name - Name of the user | string<br><br>
password - Password of the user **unencrypted!** | string<br><br>
id - ID of the level | number

### Optional parameters
type - Type of leaderboard to get (defaults to top) | "TOP" or "WEEK" | string<br><br>

## Note

---
This class requires your username and password to fetch level leaderboards, which isn't possible otherwise

## Example

---
Returns the top 200 this week players from **Sonar**
```JS
const { LevelLeaderboardRequest } = require("gd-parser");
new LevelLeaderboardRequest({
    name: "robtop",
    password: "password123",
    id: 80510028
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "username": "ItzMichiRL",
    "playerID": 35248241,
    "accountID": 7098466,
    "rank": 1,
    "percent": 100,
    "coins": 3,
    "date": "4 years ago",
    "col1": 7,
    "col2": 3,
    "icon": 30,
    "form": "icon",
    "glow": true
  }, {
    "username": "RyanAB",
    "playerID": 1278773,
    "accountID": 62222,
    "rank": 2,
    "percent": 100,
    "coins": 3,
    "date": "4 years ago",
    "col1": 1,
    "col2": 3,
    "icon": 133,
    "form": "icon",
    "glow": false
  },
  ...
]
```
