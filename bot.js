const Discord = require ('discord.js');
const client = new Discord.Client();

client.on(' ready', () => {
    console.log('I am ready!');
}); 

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
    });
    
    //THIS MUST BE THIS WAY
    client.login(process.env.NDI4NjcwNDM0MTM3ODY2MjU4.Dd42KA.kJA7G8eJs7FPDbLD8UDN2WDzOtc);
