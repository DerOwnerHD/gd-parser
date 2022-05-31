
# MessagesRequest
  
---  
Class for retrieving messages or uploading and deleting them

## Parameters
  
---
### Required parameters
name - Name of the account to manage messages of | string<br><br>
password - Password of the account **unencrypted!** | string<br><br>
type - Type of action to execute | **RECEIVED**, **SENT**, **UPLOAD**, **DELETE** or **DETAILS** | string<br>

---
### RECEIVED and SENT

Fetches all messages the user has sent or received
#### Optional parameters
page - Page of messages to get | number

---
### UPLOAD
Uploads a message and sends it to another user
#### Required parameters
receiver - Name of the account to receive the message | string<br><br>
title - Title of the message (max 50 words) | string<br><br>
content - Content of the message (max 300 words) | string

---
### DELETE
Deletes a message from the servers
Never returns an error, even if the message isn't deleted
*(thanks Rob)*
#### Required parameters
id - ID of the message to delete | number
#### Optional parameters
sender - Required if you sent the message | string

---
### DETAILS
Fetches the details of a message
The message content isn't fetched when loading all messages
*(this only seems to work with messages you received)*
#### Required parameters
id - ID of the message to get details of | number

---
## Example
This shows an example message object and it's structure:
**text** is only returned when message is fetched via **DETAILS**
```JSON
{  
	"id": 6942069,  
	"title": "top secret message",  
	"text": "2.2 will never come out",  
	"name": "RobTop",  
	"accountID": 71,  
	"playerID": 16,  
	"date": "1 day ago",  
	"read": true,  
	"sender": false  
}
```
