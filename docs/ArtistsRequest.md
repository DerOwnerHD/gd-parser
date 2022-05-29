# ArtistsRequest

---
Class for retrieving Rob's handpicked top artists

## Parameters

---
This always returns 20 artists
### Required parameters
page - Page of artists | number

## Example

---
This gets the data of **Xenogenesis** by **TheFatRat**:
```JS
const { ArtistsRequest } = require("gd-parser");
new ArtistsRequest({
    page: 2
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "name": "paperskies",
    "youtube": null,
    "results": 79,
    "pages": 4,
    "range": "21 to 40"
  }, {
    "name": "canonblade",
    "youtube": null
  }, {
    "name": "DJVI",
    "youtube": null
  }, {
    "name": "PandaEyesOfficial",
    "youtube": null
  }, {
    "name": "megawolf77",
    "youtube": null
  }, {
    "name": "AeronMusic",
    "youtube": null
  }, {
    "name": "lukhash",
    "youtube": null
  }, {
    "name": "Djjaner",
    "youtube": null
  }, {
    "name": "doctornosense",
    "youtube": "UCesn9ptyzI-KmoNIjAZRi-A"
  }, {
    "name": "hinkik",
    "youtube": "UCMRBtgmhD2w-vhzs6dvHHOA"
  }, {
    "name": "ThiefOfVoid",
    "youtube": null
  }, {
    "name": "officialhenyx",
    "youtube": "UCgPZAAsnYpPfzpil55Hta0w"
  }, {
    "name": "Dj-Rec0il",
    "youtube": null
  }, {
    "name": "GobSmacked",
    "youtube": null
  }, {
    "name": "KaixoMusic",
    "youtube": null
  }, {
    "name": "MadhouseDUDE",
    "youtube": null
  }, {
    "name": "Kolkian",
    "youtube": null
  }, {
    "name": "meganeko",
    "youtube": "UCP3M2myndqXuAEKKnqm_7SQ"
  }, {
    "name": "Jumper",
    "youtube": null
  }, {
    "name": "Geoxor",
    "youtube": null
  }
]
```
