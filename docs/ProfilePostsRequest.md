# ProfilePostsRequest

---
Class for retrieving a player's profile posts

## Parameters

---
### Required parameters
name - Name of the account | string

### Optional parameters
page - Page of the profile posts | number<br><br>

## Example

---
Here we're trying to get page 2 of Rob's profile posts:
```JS
const { ProfilePostsRequest } = require("gd-parser");
new ProfilePostsRequest({
    name: "robtop",
    page: 2
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "content": "Are you prepared for the Gauntlets? I think not... :D",
    "id": 862822,
    "likes": 267581,
    "disliked": false,
    "username": "RobTop",
    "playerID": 16,
    "accountID": 71,
    "date": "5 years ago",
    "results": 12,
    "pages": 2,
    "range": "11 to 12"
  }, {
    "content": "So you found me... again... :D",
    "id": 862606,
    "likes": 282133,
    "disliked": false,
    "username": "RobTop",
    "playerID": 16,
    "accountID": 71,
    "date": "5 years ago"
  }
]
```
