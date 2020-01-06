const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fetch = require('node-fetch');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    //global variables (dont no why im making the 0 but it a habit stuck from C and C++)
    var hours = 0;
    var min = 0;
    let csgotime = 0;
    let steamID = 0;
    let steamName = 0;

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }

    if (msg.content.startsWith("eb!")) {
        // msg.reply("Testing func for cs bot");
    }
    //function to convert minutes to hours
    function timeConvert(minutes) {
        hours = Math.floor(minutes / 60);
        min = minutes % 60;
        return hours;
    }
    if (command === "cstime") {
        // To get the "message" itself we join the `args` back into a string with spaces: 
        steamName = args.join("");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.

        // msg.delete().catch(O_o => {});

        // And we get the bot to say the thing: 
        msg.channel.send("Searching for CS:GO time using " + "```" + steamName + "```" + " as id");

        /* STÖKIG API */
        //console.log(timeConvert(json.response.games[i].playtime_forever));

        //url below with api -steamToken is in config file not included in repo.
        const url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + config.steamToken + "&steamid=" + steamName + "&format=json";
        //fetch API to get data
        const getData = async url => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                // console.log(json.response.games);

                for (i = 0; i < json.response.games.length; i++) {
                    // console.log(json.response.games[i].appid);
                    if (json.response.games[i].appid == 730) {
                        // console.log("Found CS:GO!");
                        // console.log("You have played " + json.response.games[i].playtime_forever + " minutes of CS:GO");
                        csgotime = json.response.games[i].playtime_forever;
                    }
                }
                // console.log();
                // console.log("That person has played " + timeConvert(csgotime) + " of CS:GO");
                msg.channel.send("User has played " + timeConvert(csgotime) + " hours of CS:GO");
            } catch (error) {
                console.log(error);
            }
        };
        getData(url);
    }
});

client.login(config.token);