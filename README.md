# yancms
(Yet Another Node CMS)

This mostly just for fun/me.  I don't expect it to go anywhere other than facilitate my own learning.

## Procfile - for use with foreman and/or Heroku.

## Environment Variables:
Set in .env file for local development
* DATABASEUSER - username for mongo
* DATABASEPASS - password for mongo
* DATABASEURL - url for mongo
* GOOGLEAUTHID - Google app client ID for Google Authentication
* GOOGLESECRET - Google app client secret for Google Authentication
* AUTHCALLBACKURL - Callback url for Google Authentication
* KEEPITSECRET - session secret

## File Structure
### server.js
Configure and start Express server
### app
Application files
### config
Configuration files
   * Setup for User Authentication
   * Database Connections
