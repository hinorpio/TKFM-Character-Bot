const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-adjust-1")
        .setDescription("list-adjust-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xb4c9d9)
                    .setTitle("**調整歷史** 角色列表")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事,就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('adjust_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `偶像 伊布力斯 ★★★ (限定) (2021-02-03)`,
                                "value": `i-iblis`,
                                "description": `I.Iblis (2021-02-03)`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis02",
                                    id: "1140011256162558043"
                                }
                            },
                            {
                                "label": `魔管家 艾可 ★★ (2021-05-12)`,
                                "value": `aiko`,
                                "description": `Aiko (2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik01",
                                    id: "1140024736303284388"
                                }
                            },
                            {
                                "label": `神官長 菲歐菈 ★★ (2021-05-12)`,
                                "value": `fiora`,
                                "description": `Fiora (2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_fiora01",
                                    id: "1140024733484728371"
                                }
                            },
                            {
                                "label": `雙蛇軍團護士長 艾琳 ★ (2021-05-12)`,
                                "value": `irene`,
                                "description": `Irene (2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_irene01",
                                    id: "1140027012958924821"
                                }
                            },
                            {
                                "label": `美人魚 瑪蓮 ★ (2021-05-12)`,
                                "value": `marlene`,
                                "description": `Marlene (2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_mermaid01",
                                    id: "1140027023721513061"
                                }
                            },
                            {
                                "label": `劍聖 神無雪 ★★ (2021-07-14)`,
                                "value": `minayomi`,
                                "description": `Minayomi (2021-07-14)`,
                                "default": false,
                                "emoji": {
                                    name: "face_minayomi02",
                                    id: "1140024748496146483"
                                }
                            },
                            {
                                "label": `矮人王 蘭兒 ★★★ (2021-09-22)`,
                                "value": `lana`,
                                "description": `Lana (2021-09-22)`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana01",
                                    id: "1140011264584712202"
                                }
                            },
                            {
                                "label": `大將軍 朱諾安 ★★ (2021-09-22)`,
                                "value": `juneau`,
                                "description": `Juneau (2021-09-22)`,
                                "default": false,
                                "emoji": {
                                    name: "face_juneau01",
                                    id: "1140024741827199037"
                                }
                            },
                            {
                                "label": `女忍者 凜月 ★★ (2021-09-22)`,
                                "value": `ritsuki`,
                                "description": `Ritsuki (2021-09-22)`,
                                "default": false,
                                "emoji": {
                                    name: "face_ritsuki01",
                                    id: "1140024755257356298"
                                }
                            },
                            {
                                "label": `蛇女之后 梅絲米奈雅 ★★★ (2021-10-27)`,
                                "value": `mesmiia`,
                                "description": `Mesmiia (2021-10-27)`,
                                "default": false,
                                "emoji": {
                                    name: "face_mesmiia01",
                                    id: "1140011272646185112"
                                }
                            },
                            {
                                "label": `復生公主 千鶴 ★★★ (2021-10-27)`,
                                "value": `chizuru`,
                                "description": `Chizuru (2021-10-27)`,
                                "default": false,
                                "emoji": {
                                    name: "face_chizuru01",
                                    id: "1140011241285353633"
                                }
                            },
                            {
                                "label": `祭典狂歡 巴爾 ★★★ (限定) (2022-01-12)`,
                                "value": `f-baal`,
                                "description": `F.Baal (2022-01-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal04",
                                    id: "1140011239179825342"
                                }
                            },
                            {
                                "label": `花嫁 撒旦 ★★★ (限定) (2022-02-23)`,
                                "value": `b-satan`,
                                "description": `B.Satan (2022-02-23)`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan03",
                                    id: "1140014921023762543"
                                }
                            },
                            {
                                "label": `復活兔 撒旦 ★★★ (限定) (2022-04-13)`,
                                "value": `e-satan`,
                                "description": `E.Satan (2022-04-13)`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan02",
                                    id: "1140011286466404363"
                                }
                            },
                            {
                                "label": `夏日 KS-VIII ★★★ (限定) (2022-04-13)`,
                                "value": `s-ks8`,
                                "description": `S.KS8 (2022-04-13)`,
                                "default": false,
                                "emoji": {
                                    name: "face_ks02",
                                    id: "1140011262860865656"
                                }
                            },
                            {
                                "label": `夏日 黑白諾艾莉 ★★★ (限定) (2022-06-10)`,
                                "value": `s-noel`,
                                "description": `S.Noel (2022-06-10)`,
                                "default": false,
                                "emoji": {
                                    name: "face_noel03",
                                    id: "1140018336084799598"
                                }
                            },
                            {
                                "label": `小惡魔 布蘭妮 ★★★ (限定) (2022-12-31)`,
                                "value": `h-britney`,
                                "description": `H.Britney (2022-12-31)`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney02",
                                    id: "1140014874076905501"
                                }
                            },
                            {
                                "label": `貓娘Vtuber 杏仁咪嚕 ★★★ (2023-01-19)`,
                                "value": `miru`,
                                "description": `Miru (2023-01-19)`,
                                "default": false,
                                "emoji": {
                                    name: "face_miru01",
                                    id: "1140014906683433051"
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
