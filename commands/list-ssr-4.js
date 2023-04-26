const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-4")
        .setDescription("list-ssr-4"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2023 新春 ~ Now)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_4')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `賢者 白 ★★★`,
                                "value": `shiro`,
                                "description": `Shiro 2023-01-04`,
                                "default": false,
                                "emoji": {
                                    name: "face_shiro01",
                                    id: "1058426292967571608"
                                }
                            },
                            {
                                "label": `絕代佳人 賽露西亞 ★★★ (限定)`,
                                "value": `ny-salucia`,
                                "description": `Ny.Salucia 2023-01-18`,
                                "default": false,
                                "emoji": {
                                    name: "face_salucia07",
                                    id: "1064522757712384072"
                                }
                            },
                            {
                                "label": `龍飛鳳舞 蘭兒 ★★★ (限定)`,
                                "value": `ny-lana`,
                                "description": `Ny.Lana 2023-01-18`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana05",
                                    id: "1064523027355815986"
                                }
                            },
                            {
                                "label": `甜心可可 巴爾 ★★★ (限定)`,
                                "value": `v-baal`,
                                "description": `V.Baal 2023-02-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal08",
                                    id: "1072880868869275659"
                                }
                            },
                            {
                                "label": `致命可可 撒旦 ★★★ (限定)`,
                                "value": `v-satan`,
                                "description": `V.Satan 2023-02-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan04",
                                    id: "1071982179095163012"
                                }
                            },
                            {
                                "label": `純情可可 伊布力斯 ★★★ (限定)`,
                                "value": `v-iblis`,
                                "description": `V.Iblis 2023-02-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis07",
                                    id: "1071982359508959312"
                                }
                            },
                            {
                                "label": `尋情慾兔 鈴蘭 ★★★ (限定)`,
                                "value": `lillane`,
                                "description": `Lillane 2023-03-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_lillane01",
                                    id: "1082551492969496596"
                                }
                            },
                            {
                                "label": `慵懶貓貓 露露 ★★★ (限定)`,
                                "value": `c-lulu`,
                                "description": `C.Lulu 2023-03-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu13",
                                    id: "1082551911770755173"
                                }
                            },
                            {
                                "label": `魔法少女 朱諾安 ★★★ (限定)`,
                                "value": `m-juneau`,
                                "description": `M.Juneau 2023-04-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_juneau02",
                                    id: "1092808753268662273"
                                }
                            },
                            {
                                "label": `魔法少女 布蘭妮 ★★★ (限定)`,
                                "value": `m-britney`,
                                "description": `M.Britney 2023-04-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney03",
                                    id: "1092808831106568242"
                                }
                            },
                            {
                                "label": `毒蠍 莫默 ★★★`,
                                "value": `momo`,
                                "description": `Momo 2023-04-26`,
                                "default": false,
                                "emoji": {
                                    name: "face_momo01",
                                    id: "1100020517261553704"
                                }
                            }
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
