const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-5")
        .setDescription("list-ssr-5"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2023 萬聖 ~ 2024 夏日)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_5')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `南瓜魔女 神田綾音 ★★★ (限定)`,
                                "value": `h-ayane`,
                                "description": `H.Ayane 2023-10-18`,
                                "default": false,
                                "emoji": {
                                    name: "face_ayane03",
                                    id: "1163299372285575238"
                                }
                            },
                            {
                                "label": `調皮搗蛋 白 ★★★ (限定)`,
                                "value": `h-shiro`,
                                "description": `H.Shiro 2023-10-18`,
                                "default": false,
                                "emoji": {
                                    name: "face_shiro02",
                                    id: "1163299125601767484"
                                }
                            },
                            {
                                "label": `時御者 伊娜絲 ★★★ (限定)`,
                                "value": `inase`,
                                "description": `Inase 2023-11-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_Inase01",
                                    id: "1173986483095478322"
                                }
                            },
                            {
                                "label": `幽夜女爵 卡蒂雅 ★★★ (限定)`,
                                "value": `cartilla`,
                                "description": `Cartilla 2023-11-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_Cartilla01",
                                    id: "1173986611810283530"
                                }
                            },
                            {
                                "label": `性誕馴鹿 希依 ★★★ (限定)`,
                                "value": `w-evie`,
                                "description": `W.Evie 2023-12-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_ce02",
                                    id: "1184466615165792318"
                                }
                            },
                            {
                                "label": `聖夜喧嘩 莎琳娜 ★★★ (限定)`,
                                "value": `salina`,
                                "description": `Salina 2023-12-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_salina01",
                                    id: "1184466622270943343"
                                }
                            },
                            {
                                "label": `雪夜幻夢 阿爾蒂雅 ★★★ (限定)`,
                                "value": `x-aridya`,
                                "description": `X.Aridya 2023-12-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_aridya03",
                                    id: "1184466611692900452"
                                }
                            },
                            {
                                "label": `性誕戀歌 伊布力斯 ★★★ (限定)`,
                                "value": `x-iblis`,
                                "description": `X.Iblis 2023-12-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_Iblis08",
                                    id: "1184466617611063337"
                                }
                            },
                            {
                                "label": `狂犬 諾蕾蒂 ★★★ (限定)`,
                                "value": `noma`,
                                "description": `Noma 2024-01-17`,
                                "default": false,
                                "emoji": {
                                    name: "face_noma01",
                                    id: "1197588163825242152"
                                }
                            },
                            {
                                "label": `副手 貝蕾朵 ★★★ (限定)`,
                                "value": `belladonna`,
                                "description": `Belladonna 2024-01-17`,
                                "default": false,
                                "emoji": {
                                    name: "face_belladonna01",
                                    id: "1197588159995846786"
                                }
                            },
                            {
                                "label": `甜心偶像 星空奈奈美 ★★★ (限定)`,
                                "value": `nanami`,
                                "description": `nanami 2024-02-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_nanami01",
                                    id: "1247869803230658631"
                                }
                            },
                            {
                                "label": `閃耀歌姬 黑白諾艾莉 ★★★ (限定)`,
                                "value": `w-noel`,
                                "description": `W.Noel 2024-02-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_noel04",
                                    id: "1247869801209008198"
                                }
                            },
                            {
                                "label": `偶像經紀人 梅絲米奈雅 ★★★ (限定)`,
                                "value": `w-mesmiia`,
                                "description": `W.Mesmiia 2024-02-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_mesmiia02",
                                    id: "1247869806422523965"
                                }
                            },
                            {
                                "label": `賞金獵人 安潔娜爾 ★★★ (限定)`,
                                "value": `angelina`,
                                "description": `Angelina 2024-03-06`,
                                "default": false,
                                "emoji": {
                                    name: "face_angelina01",
                                    id: "1216781076652101794"
                                }
                            },
                            {
                                "label": `春情白兔 鈴蘭 ★★★ (限定)`,
                                "value": `w-lillane`,
                                "description": `W.Lillane 2024-03-06`,
                                "default": false,
                                "emoji": {
                                    name: "face_lillane02",
                                    id: "1216781069949472858"
                                }
                            },
                            {
                                "label": `不健全遐想 托特拉 ★★★ (限定)`,
                                "value": `p-tyrella`,
                                "description": `P.Tyrella 2024-04-02`,
                                "default": false,
                                "emoji": {
                                    name: "face_tyrella02",
                                    id: "1226338481534537858"
                                }
                            },
                            {
                                "label": `迷情薄紗 露露 ★★★ (限定)`,
                                "value": `p-lulu`,
                                "description": `P.Lulu 2024-04-02`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu14",
                                    id: "1226338484076417035"
                                }
                            },
                            {
                                "label": `真神化身 菈萊亞 ★★★ (限定)`,
                                "value": `lelya`,
                                "description": `lelya 2024-05-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_lelya01",
                                    id: "1241468879499296899"
                                }
                            },
                            {
                                "label": `調查員 娜娜 ★★★ (限定)`,
                                "value": `a-nana`,
                                "description": `A.Nana 2024-05-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_nana16",
                                    id: "1241468875116384367"
                                }
                            },
                            {
                                "label": `夏日 千鶴 ★★★ (限定)`,
                                "value": `s-chizuru`,
                                "description": `S.Chizuru 2024-06-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_chizuru03",
                                    id: "1247873153674510387"
                                }
                            },
                            {
                                "label": `夏日 撒旦 ★★★ (限定)`,
                                "value": `s-satan`,
                                "description": `S.Satan 2024-06-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan05",
                                    id: "1247873149597519942"
                                }
                            },
                            {
                                "label": `夏日 賽露西亞 ★★★ (限定)`,
                                "value": `s-salucia`,
                                "description": `S.Salucia 2024-06-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_salucia08",
                                    id: "1247873151715643433"
                                }
                            },
                            {
                                "label": `夏日 凱薩 ★★★ (限定)`,
                                "value": `s-caesar`,
                                "description": `S.Caesar 2024-06-05`,
                                "default": false,
                                "emoji": {
                                    name: "face_caesar03",
                                    id: "1247873155536523275"
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

