const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-n-1")
        .setDescription("list-n-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xcad0d7)
                    .setTitle("**N** 角色列表")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('n_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `法斯帝國士兵 賽蓮`,
                                "value": `saria`,
                                "description": `Saria 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_saria01",
                                    id: "1140038276456124467"
                                }
                            },
                            {
                                "label": `法斯帝國法師 佩托拉`,
                                "value": `petra`,
                                "description": `Petra 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_petra01",
                                    id: "1140038262128377897"
                                }
                            },
                            {
                                "label": `魔族戰士 芙蕾`,
                                "value": `flay`,
                                "description": `Flay 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_flay01",
                                    id: "1140038206180573184"
                                }
                            },
                            {
                                "label": `魔族法師 瑪努艾拉`,
                                "value": `manuella`,
                                "description": `Manuella 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_manuella01",
                                    id: "1140038234823467198"
                                }
                            },
                            {
                                "label": `烈日國武士 桔梗`,
                                "value": `kikyou`,
                                "description": `Kikyou 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_kikyou02",
                                    id: "1140038220449595434"
                                }
                            },
                            {
                                "label": `烈日國巫女 楓`,
                                "value": `kaede`,
                                "description": `Kaede 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_kaede01",
                                    id: "1140038215391268874"
                                }
                            },
                            {
                                "label": `精靈射手 奧菈`,
                                "value": `ola`,
                                "description": `Ola 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_ola01",
                                    id: "1140038256562540654"
                                }
                            },
                            {
                                "label": `矮人戰士 可兒`,
                                "value": `kani`,
                                "description": `Kani 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_kani01",
                                    id: "1140038218599903313"
                                }
                            },
                            {
                                "label": `雙蛇軍團士兵 夏琳`,
                                "value": `charlene`,
                                "description": `Charlene 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_charlene01",
                                    id: "1140038198916034731"
                                }
                            },
                            {
                                "label": `聖光騎士 瑪蒂娜`,
                                "value": `martina`,
                                "description": `Martina 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_martina01",
                                    id: "1140038243149168760"
                                }
                            },
                            {
                                "label": `主神教團僧兵 克蕾雅`,
                                "value": `clarie`,
                                "description": `Clarie 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_clarie01",
                                    id: "1140038202007232512"
                                }
                            },
                            {
                                "label": `史萊姆娘 蘿爾`,
                                "value": `lori`,
                                "description": `Lori 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_lori01",
                                    id: "1140038231405117561"
                                }
                            },
                            {
                                "label": `牛女 米諾`,
                                "value": `minnow`,
                                "description": `Minnow 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_minnow01",
                                    id: "1140038249298002052"
                                }
                            },
                            {
                                "label": `蛇女 拉米亞`,
                                "value": `lamia`,
                                "description": `Lamia 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_lamia01",
                                    id: "1140038226824925335"
                                }
                            },
                            {
                                "label": `鳥身女妖 哈比`,
                                "value": `harpy`,
                                "description": `Harpy 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_harpy02",
                                    id: "1140038209389199571"
                                }
                            },
                            {
                                "label": `法斯精銳近衛 安娜`,
                                "value": `anna`,
                                "description": `Anna 2021-03-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_anna02",
                                    id: "1140038178066153612"
                                }
                            },
                            {
                                "label": `法斯精銳騎士 布蘭`,
                                "value": `blaire`,
                                "description": `Blaire 2021-03-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_blaire01",
                                    id: "1140038554555260969"
                                }
                            },
                            {
                                "label": `法斯高階法斯 諾諾可`,
                                "value": `natasha`,
                                "description": `Natasha 2021-03-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_natasha01",
                                    id: "1140038252997382195"
                                }
                            },
                            {
                                "label": `試作機三號`,
                                "value": `prototype`,
                                "description": `Prototype#3 2021-03-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_beep01",
                                    id: "1140038183288066130"
                                }
                            },
                            {
                                "label": `懲戒天使`,
                                "value": `punishment`,
                                "description": `Angel of Punishment 2021-07-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_punishment01",
                                    id: "1140038269963350056"
                                }
                            },
                            {
                                "label": `福音天使`,
                                "value": `bliss`,
                                "description": `Angel of Bliss 2021-07-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_bliss01",
                                    id: "1140038193132093492"
                                }
                            },
                            {
                                "label": `人馬 賽希`,
                                "value": `steed`,
                                "description": `Steed 2023-12-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_steed01",
                                    id: "1184489524798169189"
                                }
                            },
                            {
                                "label": `木乃伊 穆穆`,
                                "value": `mumu`,
                                "description": `MuMu 2023-12-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_mumu01",
                                    id: "1184489513796521994"
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
