# CommentHistoryRequest

---
Class for retrieving the comment history of a user

## Parameters

---
### Required parameters
name - Name of the profile to get comments from | string

### Optional parameters
page - Page of the comments | number<br><br>
recent - If it should be sorted by Recent | boolean<br><br>
id - The **playerID** of the profile (if it isn't registered)

## Example

---
Rob's servers **still** are weak in their protection, so fetching the comment history of an account with disabled 
comments is easily possible...
```JS
const { CommentHistoryRequest } = require("gd-parser");
new CommentHistoryRequest({
    name: "viprin",
    page: 2,
    recent: true
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "content": "W",
    "id": 11847471,
    "levelID": 67018065,
    "likes": 403,
    "disliked": false,
    "spam": false,
    "percent": null,
    "username": "ViPriN",
    "playerID": 1078150,
    "accountID": 2795,
    "date": "1 year ago",
    "moderator": 2,
    "color": "75,255,75",
    "icon": {
      "form": "icon",
      "icon": 133,
      "col1": 11,
      "col2": 13, 
      "glow": true
    },
    "results": 999,
    "pages": 100,
    "range": "11 to 20"
  },
  ...
]
```
