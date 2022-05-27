# GauntletsRequest

---
Class for retrieving all Gauntlets and their levels

## Parameters

---
### Optional parameters
special - Also return future 2.2 Gauntlets | boolean

*that's it...*

## Example

---
```JS
const { GauntletsRequest } = require("gd-parser");
new GauntletsRequest({}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[{
  "id": 1,
  "name": "Fire Gauntlet",
  "levels": ["27732941", "28200611", "27483789", "28225110", "27448202"]
}, {
  "id": 2,
  "name": "Ice Gauntlet",
  "levels": ["20635816", "28151870", "25969464", "24302376", "27399722"]
}, {
  "id": 3,
  "name": "Poison Gauntlet",
  "levels": ["28179535", "29094196", "29071134", "26317634", "12107595"]
}, {
  "id": 4,
  "name": "Shadow Gauntlet",
  "levels": ["26949498", "26095850", "27973097", "27694897", "26070995"]
}, {
  "id": 5,
  "name": "Lava Gauntlet",
  "levels": ["18533341", "28794068", "28127292", "4243988", "28677296"]
}, {
  "id": 6,
  "name": "Bonus Gauntlet",
  "levels": ["28255647", "27929950", "16437345", "28270854", "29394058"]
}, {
  "id": 7,
  "name": "Chaos Gauntlet",
  "levels": ["25886024", "4259126", "26897899", "7485599", "19862531"]
}, {
  "id": 8,
  "name": "Demon Gauntlet",
  "levels": ["18025697", "23189196", "27786218", "27728679", "25706351"]
}, {
  "id": 9,
  "name": "Time Gauntlet",
  "levels": ["40638411", "32614529", "31037168", "40937291", "35165900"]
}, {
  "id": 10,
  "name": "Crystal Gauntlet",
  "levels": ["37188385", "35280911", "37187779", "36301959", "36792656"]
}, {
  "id": 11,
  "name": "Magic Gauntlet",
  "levels": ["37269362", "29416734", "36997718", "39853981", "39853458"]
}, {
  "id": 12,
  "name": "Spike Gauntlet",
  "levels": ["27873500", "34194741", "34851342", "36500807", "39749578"]
}, {
  "id": 13,
  "name": "Monster Gauntlet",
  "levels": ["43908596", "41736289", "42843431", "44063088", "44131636"]
}, {
  "id": 14,
  "name": "Doom Gauntlet",
  "levels": ["38427291", "38514054", "36966088", "38398923", "36745142"]
}, {
  "id": 15,
  "name": "Death Gauntlet",
  "levels": ["44121158", "43923301", "43537990", "33244195", "35418014"]
}]
```
