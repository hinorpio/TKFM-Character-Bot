const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-r-1")
        .setDescription("list-r-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0x96a7e7)
                    .setTitle("**R** 角色列表")
                    .setDescription("真是的, 你這個笨蛋,腦子只記色色的事,就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('r_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `雙蛇軍團護士長 艾琳 ★`,
                                "value": `irene`,
                                "description": `Irene 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `貓妖 娜娜 ★`,
                                "value": `nana`,
                                "description": `Nana 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `龍女 伊維絲 ★`,
                                "value": `iris`,
                                "description": `Iris 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `犬人族 朵拉 ★`,
                                "value": `dora`,
                                "description": `Dora 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `魅魔 撤芭絲 ★`,
                                "value": `sable`,
                                "description": `Sable 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `美人魚 瑪蓮 ★`,
                                "value": `marlene`,
                                "description": `Marlene 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `流浪魔法師 尤依 ★`,
                                "value": `yoi`,
                                "description": `Yoi 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `暗黑精靈 索拉卡 ★`,
                                "value": `shiraka`,
                                "description": `Shiraka 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `南瓜仙子 帕奈奈 ★ (限定)`,
                                "value": `panana`,
                                "description": `Panana 2021-10-27`,
                                "default": false
                            },
                            {
                                "label": `人馬女僕 蘇菲 ★`,
                                "value": `sophie`,
                                "description": `Sophie 2021-12-01`,
                                "default": false
                            },
                            {
                                "label": `冷豔美醫 嘉莉娜 ★`,
                                "value": `jolina`,
                                "description": `Jolina 2021-12-01`,
                                "default": false
                            },
                            {
                                "label": `怪盜 米雅 ★ (限定)`,
                                "value": `mia`,
                                "description": `Mia 2022-07-13`,
                                "default": false
                            },
                            {
                                "label": `白薔薇 伊艾 ★`,
                                "value": `iyan`,
                                "description": `Iyan 2022-11-16`,
                                "default": false
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
