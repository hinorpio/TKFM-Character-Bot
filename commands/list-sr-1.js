const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-sr-1")
        .setDescription("list-sr-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xfef4d3)
                    .setTitle("**SR** 角色列表")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('sr_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `魔管家 艾可 ★★`,
                                "value": `aiko`,
                                "description": `Aiko 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik01",
                                    id: "1140024736303284388"
                                }
                            },
                            {
                                "label": `聖騎士長 雷歐娜 ★★`,
                                "value": `leona`,
                                "description": `Leona 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_leona01",
                                    id: "1140024745409130496"
                                }
                            },
                            {
                                "label": `神官長 菲歐菈 ★★`,
                                "value": `fiora`,
                                "description": `Fiora 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_fiora01",
                                    id: "1140024733484728371"
                                }
                            },
                            {
                                "label": `女忍者 凜月 ★★`,
                                "value": `ritsuki`,
                                "description": `Ritsuki 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_ritsuki01",
                                    id: "1140024755257356298"
                                }
                            },
                            {
                                "label": `劍聖 神無雪 ★★`,
                                "value": `minayomi`,
                                "description": `Minayomi 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_minayomi02",
                                    id: "1140024748496146483"
                                }
                            },
                            {
                                "label": `妖狐 靜 ★★`,
                                "value": `shizuka`,
                                "description": `Shizuka 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_shizuka02",
                                    id: "1140024758734442527"
                                }
                            },
                            {
                                "label": `大將軍 朱諾安 ★★`,
                                "value": `juneau`,
                                "description": `Juneau 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_juneau01",
                                    id: "1140024741827199037"
                                }
                            },
                            {
                                "label": `天才女軍師 布蘭妮 ★★`,
                                "value": `britney`,
                                "description": `Britney 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney01",
                                    id: "1140024731567915018"
                                }
                            },
                            {
                                "label": `史萊姆女王 娜芙菈菈 ★★`,
                                "value": `nafrala`,
                                "description": `Nafrala 2021-03-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_nafrala01",
                                    id: "1140024750199021628"
                                }
                            },
                            {
                                "label": `魔法少女 托特拉 ★★`,
                                "value": `tyrella`,
                                "description": `Tyrella 2021-07-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_tyrella01",
                                    id: "1140024766607147068"
                                }
                            },
                            {
                                "label": `地方媽媽 提爾絲 ★★ (限定)`,
                                "value": `teresa`,
                                "description": `Teresa 2021-09-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_teresa01",
                                    id: "1140024763155230851"
                                }
                            },
                            {
                                "label": `最後的銀龍 普莉希拉 ★★`,
                                "value": `pulicia`,
                                "description": `Pulicia 2021-09-29`,
                                "default": false,
                                "emoji": {
                                    name: "face_pulicia01",
                                    id: "1140024753416057004"
                                }
                            },
                            {
                                "label": `刺針 嘉維爾 ★★`,
                                "value": `janelle`,
                                "description": `Janelle 2021-10-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_Janelle01",
                                    id: "1140024739449032876"
                                }
                            },
                            {
                                "label": `精靈舞者 塔諾西雅 ★★`,
                                "value": `tanocia`,
                                "description": `Tanocia 2022-05-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_tanocia01",
                                    id: "1140024760475078789"
                                }
                            },
                            {
                                "label": `公會看板娘 小螢 ★★`,
                                "value": `yingying`,
                                "description": `YingYing 2022-10-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_ying01",
                                    id: "1140024768557486120"
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
            util.appendToLogFile(error);
            util.showErrorReply(interaction, error)
        }
    }
}
