# CredentialsRequest

---
Class for checking if a password is valid on an account

## Parameters

---
### Required parameters
name - Name of the account | string<br><br>
password - Password to check **unencrypted!** | string

## Example

---
So we're trying to hack into Rob's account, and we're looking to check if the password **password123** is valid:
```JS
const { CredentialsRequest } = require("gd-parser");
new CredentialsRequest({
    name: "RobTop",
    password: "password123"
}, (json) => {
    console.log(json);
});
```
### Response

correct password, else returns **-1**
```JSON
{
  "accountID": 71,
  "playerID": 16
}
```