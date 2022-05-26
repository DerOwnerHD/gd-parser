# ProfileRequest

---
Class for retrieving details of a Geometry Dash profile

## Parameters

---
### Required parameters
name - Name of the Profile searched | string

*that's it...*

## Example

---
```JS
const { ProfileRequest } = require("gd-parser");
new ProfileRequest({
    name: "RobTop"
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
{
  "username": "RobTop",
  "playerID": 16,
  "accountID": 71,
  "rank": 225134,
  "stars": 2186,
  "diamonds": 1812,
  "coins": 3,
  "userCoins": 130,
  "demons": 5,
  "cp": 0,
  "friendRequests": true,
  "messages": "off",
  "commentHistory": "all",
  "moderator": 2,
  "youtube": "UCz_yk8mDSAnxJq0ar66L4sw",
  "twitter": "RobTopGames",
  "twitch": "robtopgames",
  "icon": 150,
  "ship": 156,
  "ball": 88,
  "ufo": 118,
  "wave": 92,
  "robot": 65,
  "spider": 67,
  "col1": 6,
  "col2": 3,
  "deathEffect": 18,
  "glow": true
}
```
