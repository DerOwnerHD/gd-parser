# CommentsRequest

---
Class for retrieving comments on a level

## Parameters

---
### Required parameters
id - ID of the level | number

### Optional parameters
page - Page of the comments (*page 1 = 0, page 7 = 6, etc.*) | number<br><br>
recent - If it should be sorted by Recent | boolean

## Example

---
Here we're trying to get page 40 of the Recent comments on the oldest level in the game.
```JS
const { CommentsRequest } = require("gd-parser");
new CommentsRequest({
    id: 128,
    page: 40,
    recent: true
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "content": "hi 0.7661438463915125",
    "id": 7151982,
    "likes": 0,
    "disliked": false,
    "spam": false,
    "percent": null,
    "username": "gaxgd",
    "playerID": 134644803,
    "accountID": 0,
    "date": "2 days ago",
    "moderator": 0,
    "color": "255,255,255",
    "icon": {
      "form": "icon",
      "icon": 1,
      "col1": 0,
      "col2": 3,
      "glow": false
    },
    "results": 10754,
    "pages": 1075,
    "range": "401 to 410"
  },
  ...
]
```
