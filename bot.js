const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530699537799577602")
setInterval(function() {
channel.send(`Hamo Hamo Hamo hamo Hamo Hamo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);