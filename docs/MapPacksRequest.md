# MapPacksRequest

---
Class for retrieving all Map Packs and their levels

## Parameters

---
This always fetches one page (up to 10 Map Packs) of all Map Packs
### Optional parameters
page - The page of the Map Packs list to get | number

*that's it...*

## Note

---
When fetching the Level data for these Map Packs, do it like this:
```JS
const { LevelSearchRequest } = require("gd-parser");
new LevelSearchRequest({
   type: "MAP_PACK",
   query: "<all map pack level ids seperated by commas>" 
}, (json) => {
    console.log(json);
});
```

## Example

---
```JS
const { MapPacksRequest } = require("gd-parser");
new MapPacksRequest({
    page: 5
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "id": 59,
    "name": "Cyclone Pack",
    "levels": [1566116, 946020, 1100161],
    "stars": 8,
    "coins": 1,
    "difficulty": "Insane",
    "textColor": "255,75,255",
    "barColor": "255,75,255"
  }, {
    "id": 60,
    "name": "Colossus Pack",
    "levels": [1350389, 1215630, 1724579],
    "stars": 8,
    "coins": 1,
    "difficulty": "Insane",
    "textColor": "100,255,175",
    "barColor": "100,255,175"
  },
  ...
]
```
