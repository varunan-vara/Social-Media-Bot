//Requirements
import _ from "lodash";
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.client();
const prefix = config.prefix;

//Starting up Bot
client.login(config.BOT_TOKEN);
client.on("ready", function() {
    console.log(`Logged in as ${client.user.tag}!`);
})

//Command Functions
function ping (message) {
    message.channel.send("pong");
}

//Command Handling
client.on("message", function(message) {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)){
        content = message.content.split("!!");
        const commands = [
            { command: "dashboard", function: ping(message)},
            { command: "hello", function: ""},
            { command: "ping", function: ""}
            ];
        const action = _.find(commands, {command: content});
        action.function;
    }
})
