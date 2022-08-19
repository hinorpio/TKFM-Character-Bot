const dotenv = require('dotenv');
dotenv.config()

const fs = require('fs')
const { Client, GatewayIntentBits, REST, Routes, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const commands = []
client.commands = new Collection();

const selectMenusFiles = fs.readdirSync("./selectMenus").filter(file => file.endsWith(".js"));
const selectMenus = []
client.selectMenus = new Collection();

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

for(const file of selectMenusFiles){
    const selectMenu = require(`./selectMenus/${file}`);
    selectMenus.push(selectMenu.data.name);
    client.selectMenus.set(selectMenu.data.name, selectMenu);
}

client.on('ready', async () => {
    const CLIENT_ID = client.user.id
    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    (async () => {
        try {
            if (process.env.ENV === "production"){
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                })
                console.log("Successfully registered commands globally.");
            }else{
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                    body: commands
                })
                console.log("Successfully registered commands locally.");
            }
        } catch (err) {
            if(err) console.error(err);
        }
    })()

    console.log(`Logged in as ${client.user.tag}!`);
    
});


client.on('interactionCreate', async interaction => {

    if(interaction.isCommand()){
        const command = client.commands.get(interaction.commandName);

        try {
            await command.execute(interaction, client);
        } catch (err) {
            if(err) console.log(err);
            util.showErrorReply(interaction, error)
        }
    }

    else if(interaction.isSelectMenu()){
        const menu = client.selectMenus.get(interaction.customId);

        try {
            await menu.execute(interaction, client);
        } catch (err) {
            if(err) console.log(err);
            util.showErrorReply(interaction, error)
        }
    }
    
});

client.login(process.env.TOKEN);