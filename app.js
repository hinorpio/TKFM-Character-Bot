const dotenv = require('dotenv');
dotenv.config()

const { Client, GatewayIntentBits, REST, Routes, Collection } = require('discord.js');
const util = require('./util');

function startBot(){
    try{
        const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
        const commands = util.handleCommands(client)
        const buttons = util.handleButtons(client)
        const selectMenus = util.handleSelectMenus(client)

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
                    util.appendToLogFile(err);
                    if(err) console.error(err);
                }
            })()
        
            console.log(`Logged in as ${client.user.tag}!`);
            
        });
        
        client.on("messageCreate", (message) => {
            if (message.author.bot) return false;
        
            if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;
        
            if (message.mentions.has(client.user.id)) {
                message.channel.send(util.mentionReply(message));
            }
        });

        client.on('interactionCreate', async interaction => {
        
            if(interaction.isCommand()){
                const command = client.commands.get(interaction.commandName);
        
                try {
                    await command.execute(interaction, client);
                } catch (err) {
                    if(err) console.log(err);
                    util.appendToLogFile(error);
                    util.showErrorReply(interaction, err)
                }
            }
        
            else if(interaction.isStringSelectMenu()){
                const menu = client.selectMenus.get(interaction.customId);
        
                try {
                    await menu.execute(interaction, client);
                } catch (err) {
                    if(err) console.log(err);
                    util.appendToLogFile(error);
                    util.showErrorReply(interaction, err)
                }
            }
        
            else if(interaction.isButton()){
                const button = client.buttons.get(interaction.customId);
        
                try {
                    await button.execute(interaction, client);
                } catch (error) {
                    if(error) console.log(error);
                    util.appendToLogFile(error);
                    util.showErrorReply(interaction, error)
                }
            }
            
        });

        client.login(process.env.TOKEN);
    }catch (error){
        util.appendToLogFile(error);
        startBot()
    }
    
}

startBot();