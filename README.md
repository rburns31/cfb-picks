# cfb-picks
Picker for college football games<p>
This is running on an ec2 and is built using the MEAN stack.

## Command to remote into the machine
ssh -i cfb_picks.pem bitnami@ec2-54-89-191-222.compute-1.amazonaws.com

## Command to enter mongo
sudo mongo admin --username root --password bitnami

## Environment
This application is deployed at 54.89.191.222

## MongoDB Schema
> db.cfb_picks_users.find()
{ "_id" : ObjectId("599f14cec1f2b3dee06d1f16"), "username" : "admin", "password" : "admin", "name" : "Administrator" }

> db.cfb_picks_games.find()
{ "_id" : ObjectId("599f173dc1f2b3dee06d1f1a"), "gameId" : "12345", "week" : 0, "season" : 2017, "awayTeam" : "USC", "homeTeam" : "Texas", "spread" : -3, "inUse" : true, "homeTeamWon" : true }

> db.cfb_picks.find()
{ "_id" : ObjectId("599f1609c1f2b3dee06d1f18"), "username" : "admin", "gameId" : "12345", "pickedHomeTeam" : false }

> db.cfb_picks_leagues.find()
{ "_id" : ObjectId("599f16d9c1f2b3dee06d1f19"), "leagueId" : "67890", "leagueName" : "test", "leagueOwner" : "admin", "members" : [ "admin", "georgio" ] }
