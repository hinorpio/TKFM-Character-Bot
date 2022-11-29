const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-1")
        .setDescription("list-ssr-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (開服 ~ 2021 雙子活動)")
                    .setDescription("真是的, 你這個笨蛋,腦子只記色色的事,就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_1')
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
                            {
                                "label": `精靈王 賽露西亞 ★★★`,
                                "value": `salucia`,
                                "description": `Salucia 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_salucia01",
                                    id: "856202436720590878"
                                }
                            },
                            {
                                "label": `矮人王 蘭兒 ★★★`,
                                "value": `lana`,
                                "description": `Lana 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana01",
                                    id: "856202436463820810"
                                }
                            },
                            {
                                "label": `法斯公主 露露 ★★★`,
                                "value": `lulu`,
                                "description": `Lulu 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu01",
                                    id: "856202436657152060"
                                }
                            },
                            {
                                "label": `祭典狂歡 巴爾 ★★★ (限定)`,
                                "value": `f-baal`,
                                "description": `F.Baal 2020-12-30`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal04",
                                    id: "929765145981366282"
                                }
                            },
                            {
                                "label": `偶像 伊布力斯 ★★★ (限定)`,
                                "value": `i-iblis`,
                                "description": `I.Iblis 2021-02-03`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis02",
                                    id: "856202436837376020"
                                }
                            },
                            {
                                "label": `偶像 黑白諾艾莉 ★★★ (限定)`,
                                "value": `noel`,
                                "description": `Noel 2021-02-03`,
                                "default": false,
                                "emoji": {
                                    name: "face_noel01",
                                    id: "856202436322263061"
                                }
                            },
                            {
                                "label": `魔人偶 KS-VIII ★★★`,
                                "value": `ks8`,
                                "description": `KS8 2021-02-24`,
                                "default": false,
                                "emoji": {
                                    name: "face_ks01",
                                    id: "856202436275339294"
                                }
                            },
                            {
                                "label": `蛇女之后 梅絲米奈雅 ★★★`,
                                "value": `mesmiia`,
                                "description": `Mesmiia 2021-03-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_mesmiia01",
                                    id: "856202437005279263"
                                }
                            },
                            {
                                "label": `復活兔 撒旦 ★★★ (限定)`,
                                "value": `e-satan`,
                                "description": `E.Satan 2021-03-31`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan02",
                                    id: "865993275927035914"
                                }
                            },
                            {
                                "label": `復生公主 千鶴 ★★★`,
                                "value": `chizuru`,
                                "description": `Chizuru 2021-04-21`,
                                "default": false,
                                "emoji": {
                                    name: "face_chizuru01",
                                    id: "856202436476534785"
                                }
                            },
                            {
                                "label": `煌星 妲絲艾菲娜 ★★★`,
                                "value": `daphne`,
                                "description": `Daphne 2021-05-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_muila01",
                                    id: "952915736190390272"
                                }
                            },
                            {
                                "label": `夏日 靜 ★★★ (限定)`,
                                "value": `s-shizuka`,
                                "description": `S.Shizuka 2021-05-28`,
                                "default": false,
                                "emoji": {
                                    name: "face_shizuka03",
                                    id: "856202437391548447"
                                }
                            },
                            {
                                "label": `夏日 露露 ★★★ (限定)`,
                                "value": `s-lulu`,
                                "description": `S.Lulu 2021-05-28`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu05",
                                    id: "856337062167969832"
                                }
                            },
                            {
                                "label": `夏日 KS-VIII ★★★ (限定)`,
                                "value": `s-ks8`,
                                "description": `S.KS8 2021-05-28`,
                                "default": false,
                                "emoji": {
                                    name: "face_ks02",
                                    id: "1047027074151493662"
                                }
                            },
                            {
                                "label": `夏日 娜娜 ★★★ (限定)`,
                                "value": `s-nana`,
                                "description": `S.Nana 2021-05-28`,
                                "default": false,
                                "emoji": {
                                    name: "face_nana02",
                                    id: "856202436632379393"
                                }
                            },
                            {
                                "label": `天使長 聖米勒 ★★★`,
                                "value": `milae`,
                                "description": `Milae 2021-07-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_hshs02",
                                    id: "872468146857078855"
                                }
                            },
                            {
                                "label": `剪裁之紅 安絲蒂 ★★★ (限定)`,
                                "value": `asida`,
                                "description": `Asida 2021-08-04`,
                                "default": false,
                                "emoji": {
                                    name: "face_asida01",
                                    id: "872468146781556736"
                                }
                            },
                            {
                                "label": `縫紉之藍 安絲娜 ★★★ (限定)`,
                                "value": `asina`,
                                "description": `Asina 2021-08-04`,
                                "default": false,
                                "emoji": {
                                    name: "face_asina01",
                                    id: "872468147154853928"
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
