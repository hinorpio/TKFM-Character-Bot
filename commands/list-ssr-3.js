const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-3")
        .setDescription("list-ssr-3"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2022 異界 凱薩 ~ 2022 聖誕活動)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_3')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `異界 凱薩 ★★★ (限定)`,
                                "value": `f-caesar`,
                                "description": `F.Caesar 2022-03-30`,
                                "default": false,
                                "emoji": {
                                    name: "face_caesar01",
                                    id: "1140018216052207767"
                                }
                            },
                            {
                                "label": `夢遊魔境 露露 ★★★ (限定)`,
                                "value": `w-lulu`,
                                "description": `W.Lulu 2022-04-20`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu09",
                                    id: "1140018256556601394"
                                }
                            },
                            {
                                "label": `夢遊魔境 千鶴 ★★★ (限定)`,
                                "value": `w-chizuru`,
                                "description": `W.Chizuru 2022-04-20`,
                                "default": false,
                                "emoji": {
                                    name: "face_chizuru02",
                                    id: "1140018219067908248"
                                }
                            },
                            {
                                "label": `高等魔族 法雅 ★★★`,
                                "value": `faya`,
                                "description": `Faya 2022-05-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_faya01",
                                    id: "1140018229666910309"
                                }
                            },
                            {
                                "label": `惡兔魔王 兔姬 ★★★ (限定)`,
                                "value": `usagihime`,
                                "description": `Usagihime 2022-05-25`,
                                "default": false,
                                "emoji": {
                                    name: "face_uh03",
                                    id: "1140018266828443711"
                                }
                            },
                            {
                                "label": `夏日 伊布力斯 ★★★ (限定)`,
                                "value": `s-iblis`,
                                "description": `S.Iblis 2022-06-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis06",
                                    id: "1140018237975830671"
                                }
                            },
                            {
                                "label": `夏日 黑白諾艾莉 ★★★ (限定)`,
                                "value": `s-noel`,
                                "description": `S.Noel 2022-06-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_noel03",
                                    id: "1140018336084799598"
                                }
                            },
                            {
                                "label": `夏日 聖米勒 ★★★ (限定)`,
                                "value": `s-milae`,
                                "description": `S.Milae 2022-06-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_hshs03",
                                    id: "1140018234821709925"
                                }
                            },
                            {
                                "label": `夏日 阿爾蒂雅 ★★★ (限定)`,
                                "value": `s-aridya`,
                                "description": `S.Aridya 2022-06-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_aridya02",
                                    id: "1140018209458753678"
                                }
                            },
                            {
                                "label": `花魁 香奈 ★★★ (限定)`,
                                "value": `kana`,
                                "description": `Kana 2022-07-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_kana01",
                                    id: "1140018246909689896"
                                }
                            },
                            {
                                "label": `雪姬 初華 ★★★ (限定)`,
                                "value": `ichika`,
                                "description": `Ichika 2022-07-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_ichika01",
                                    id: "1140018241545195650"
                                }
                            },
                            {
                                "label": `雙星之紅 安絲蒂 ★★★ (限定)`,
                                "value": `q-asida`,
                                "description": `Q.Asida 2022-08-03`,
                                "default": false,
                                "emoji": {
                                    name: "face_asida02",
                                    id: "1140018211350397059"
                                }
                            },
                            {
                                "label": `銀河之藍 安絲娜 ★★★ (限定)`,
                                "value": `q-asina`,
                                "description": `Q.Asina 2022-08-03`,
                                "default": false,
                                "emoji": {
                                    name: "face_asina02",
                                    id: "1140018214345125969"
                                }
                            },
                            {
                                "label": `傳說女僕 艾蜜莉 ★★★`,
                                "value": `emily`,
                                "description": `Emily 2022-08-24`,
                                "default": false,
                                "emoji": {
                                    name: "face_Emily01",
                                    id: "1140018227758502038"
                                }
                            },
                            {
                                "label": `千咒魔女 安西莉卡 ★★★`,
                                "value": `anjelica`,
                                "description": `Anjelica 2022-08-24`,
                                "default": false,
                                "emoji": {
                                    name: "face_Anjelica01",
                                    id: "1140018206019436617"
                                }
                            },
                            {
                                "label": `適格者 娜娜 ★★★ (限定)`,
                                "value": `c1-nana`,
                                "description": `C1.Nana 2022-09-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_nana11",
                                    id: "1140018259341627434"
                                }
                            },
                            {
                                "label": `未知生命體 基貝魯 ★★★ (限定)`,
                                "value": `geneva`,
                                "description": `Geneva 2022-09-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_geneva01",
                                    id: "1140018232686813335"
                                }
                            },
                            {
                                "label": `元氣補給 蓮 ★★★`,
                                "value": `lotus`,
                                "description": `Lotus 2022-09-29`,
                                "default": false,
                                "emoji": {
                                    name: "face_lotus01",
                                    id: "1140018254832738344"
                                }
                            },
                            {
                                "label": `夜星 狄 ★★★`,
                                "value": `didi`,
                                "description": `Didi 2022-10-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_didi01",
                                    id: "1140018221462847599"
                                }
                            },
                            {
                                "label": `見習聖騎士 雷歐娜 ★★★ (限定)`,
                                "value": `h-leona`,
                                "description": `H.Leona 2022-10-26`,
                                "default": false,
                                "emoji": {
                                    name: "face_leona02",
                                    id: "1140018249799565373"
                                }
                            },
                            {
                                "label": `鮮血魔王 洛緹亞 ★★★ (限定)`,
                                "value": `h-lotiya`,
                                "description": `H.Lotiya 2022-10-26`,
                                "default": false,
                                "emoji": {
                                    name: "face_lotiya02",
                                    id: "1140018251716374628"
                                }
                            },
                            {
                                "label": `異國商人 雪蘭瑚 ★★★`,
                                "value": `sherana`,
                                "description": `Sherana 2022-11-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_sherana01",
                                    id: "1140018262369906718"
                                }
                            },
                            {
                                "label": `死靈女王 艾莉莎白 ★★★ (限定)`,
                                "value": `elizabeth`,
                                "description": `Elizabeth 2022-11-30`,
                                "default": false,
                                "emoji": {
                                    name: "face_elizabeth01",
                                    id: "1140018224579219567"
                                }
                            },
                            {
                                "label": `聖誕雪狐 靜 ★★★ (限定)`,
                                "value": `x-shizuka`,
                                "description": `X.Shizuka 2022-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "1140018339347955732",
                                    id: "1050007581256585277"
                                }
                            },
                            {
                                "label": `性誕兔女郎 艾可 ★★★ (限定)`,
                                "value": `xx-aiko`,
                                "description": `XX.Aiko 2022-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik10",
                                    id: "1140018243394879618"
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
            util.appendToLogFile(error);
            util.showErrorReply(interaction, error)
        }
    }
}
