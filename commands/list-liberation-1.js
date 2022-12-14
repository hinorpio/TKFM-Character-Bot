const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-liberation-1")
        .setDescription("list-liberation-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**解放** 角色列表")
                    .setDescription("你個笨蛋! 現在是怎麼了, 指令也不會自己記住了嗎? 你可真會為難本喵!\n\n............\n\n算了算了, 聽好了, 指令就在下方, 要甚麼就自己選擇\n\n~~這會是最後一次了嗎喵?~~")
                    .setImage("https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/318325053_521985393282952_2050111016962588844_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=XONyVvg5zNwAX8Pa86a&_nc_ht=scontent-hkg4-2.xx&oh=00_AfAAAyEGZNKlPcGMtJkunYYgWNTkzVGj8OPAsOaAWoU6UQ&oe=639E109A")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('liberation_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `魔王 巴爾 ★★★`,
                                "value": `baal`,
                                "description": `Baal 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal01",
                                    id: "856492803358326804"
                                }
                            },
                            {
                                "label": `魔王 撒旦 ★★★`,
                                "value": `satan`,
                                "description": `Satan 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan01",
                                    id: "856202436619403294"
                                }
                            },
                            {
                                "label": `魔王 伊布力斯 ★★★`,
                                "value": `iblis`,
                                "description": `Iblis 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis01",
                                    id: "856202436821254184"
                                }
                            },
                            
                        ])
                )

                const nanascript = randomReply[Math.floor(Math.random() * randomReply.length)];
                const channel = await client.channels.fetch(interaction.channelId)
                
                await interaction.deferReply()

                await channel.send({
                    content: `<@!${interaction.user.id}> ${nanascript}`,
                    embeds: [embed],
                    components: [list],
                    ephemeral: false,
                });

                await interaction.deleteReply()
            }
        } catch (error) {
            util.showErrorReply(interaction, error)
        }
    }
}
