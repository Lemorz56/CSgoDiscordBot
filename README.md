# CS:GO Discord Bot [![Build Status](https://travis-ci.com/Lemorz56/CSgoDiscordBot.svg?token=Fiuz1pyAyCez2gUsiqUi&branch=master)](https://travis-ci.com/Lemorz56/CSgoDiscordBot)

This Simple bot gets the time spent in CS:GO (if the user has it) and converts it into hours, then sends it in a message.

Built using Discord.js together with node.js and steam API


# Requires  
*Steam API Token\
Discord API Token\
npm Snekfetch\
npm Node-fetch*

<!--
just open console/terminal in the folder and do ``npm discord.js``
-->
# Running
## Before running...
You have to create a config.json file with a structure like this:
```javascript
{
    "token": "DISCORD API TOKEN",
    "prefix": "COMMAND HERE",
    "steamToken" : "STEAM API TOKEN"
}
```
Now don't forge to invite that bot to your server.
Then you are good to go, to test it out locally run:
``node index.js``
