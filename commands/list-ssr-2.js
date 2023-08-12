const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-2")
        .setDescription("list-ssr-2"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2021 雙子活動後 ~ 2022 Miru活動)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_2')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `食夢 阿爾蒂雅 ★★★`,
                                "value": `aridya`,
                                "description": `Aridya 2021-08-25`,
                                "default": false,
                                "emoji": {
                                    name: "face_aridya01",
                                    id: "1140014865180786801"
                                }
                            },
                            {
                                "label": `千年血族 洛緹亞 ★★★`,
                                "value": `lotiya`,
                                "description": `Lotiya 2021-08-25`,
                                "default": false,
                                "emoji": {
                                    name: "face_lotiya01",
                                    id: "1140014901264384030"
                                }
                            },
                            {
                                "label": `膽小紙袋狼 沃沃 ★★★ (限定)`,
                                "value": `fufu`,
                                "description": `Fufu 2021-09-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_fufu03",
                                    id: "1140014881911877754"
                                }
                            },
                            {
                                "label": `豐收聖女 菲歐菈 ★★★ (限定)`,
                                "value": `hm-fiora`,
                                "description": `Hm.Fiora 2021-09-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_fiora03",
                                    id: "1140014878808100875"
                                }
                            },
                            {
                                "label": `墮龍 凱茜菲娜 ★★★`,
                                "value": `karina`,
                                "description": `Karina 2021-09-29`,
                                "default": false,
                                "emoji": {
                                    name: "face_karina01",
                                    id: "1140014896076042330"
                                }
                            },
                            {
                                "label": `極樂之鬼 伊吹朱點 ★★★`,
                                "value": `ibuki`,
                                "description": `Ibuki 2021-10-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_Ibuki01",
                                    id: "1140014886815027270"
                                }
                            },
                            {
                                "label": `小惡魔 布蘭妮 ★★★ (限定)`,
                                "value": `h-britney`,
                                "description": `H.Britney 2021-10-27`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney02",
                                    id: "1140014874076905501"
                                }
                            },
                            {
                                "label": `機靈古怪 賽露西亞 ★★★ (限定)`,
                                "value": `h-salucia`,
                                "description": `H.Salucia 2021-10-27`,
                                "default": false,
                                "emoji": {
                                    name: "face_salucia02",
                                    id: "1140014919123730442"
                                }
                            },
                            {
                                "label": `音速魅影 祈 ★★★`,
                                "value": `inori`,
                                "description": `Inori 2021-11-17`,
                                "default": false,
                                "emoji": {
                                    name: "face_inori01",
                                    id: "1140014892158554314"
                                }
                            },
                            {
                                "label": `夢天堂店長 咲野夢 ★★★ (限定)`,
                                "value": `sakuya`,
                                "description": `Sakuya 2021-12-01`,
                                "default": false,
                                "emoji": {
                                    name: "face_sakuya01",
                                    id: "1140014915978023062"
                                }
                            },
                            {
                                "label": `暗黑聖誕 艾可 ★★★ (限定)`,
                                "value": `x-aiko`,
                                "description": `X.Aiko 2021-12-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik07",
                                    id: "1140014888861843516"
                                }
                            },
                            {
                                "label": `聖誕矮人王 蘭兒 ★★★ (限定)`,
                                "value": `x-lana`,
                                "description": `X.Lana 2021-12-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana04",
                                    id: "1140014898013806722"
                                }
                            },
                            {
                                "label": `聖誕馴鹿 希依 ★★★ (限定)`,
                                "value": `evie`,
                                "description": `Evie 2021-12-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_ce01",
                                    id: "1140014877138759730"
                                }
                            },
                            {
                                "label": `新春 凜月 ★★★ (限定)`,
                                "value": `tm-ritsuki`,
                                "description": `Tm.Ritsuki 2022-01-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_ritsuki02",
                                    id: "1140014912165380096"
                                }
                            },
                            {
                                "label": `新春 神無雪 ★★★ (限定)`,
                                "value": `tm-minayomi`,
                                "description": `Tm.Minayomi 2022-01-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_minayomi03",
                                    id: "1140014904716304434"
                                }
                            },
                            {
                                "label": `花嫁 巴爾 ★★★ (限定)`,
                                "value": `b-baal`,
                                "description": `B.Baal 2022-02-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal07",
                                    id: "1140014870939574303"
                                }
                            },
                            {
                                "label": `花嫁 撒旦 ★★★ (限定)`,
                                "value": `b-satan`,
                                "description": `B.Satan 2022-02-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan03",
                                    id: "1140014921023762543"
                                }
                            },
                            {
                                "label": `花嫁 伊布力斯 ★★★ (限定)`,
                                "value": `b-iblis`,
                                "description": `B.Iblis 2022-02-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis05",
                                    id: "1140014883744792806"
                                }
                            },
                            {
                                "label": `貓娘Vtuber 杏仁咪嚕 ★★★`,
                                "value": `miru`,
                                "description": `Miru 2022-03-09`,
                                "default": false,
                                "emoji": {
                                    name: "face_miru01",
                                    id: "1140014906683433051"
                                }
                            },
                            {
                                "label": `古代勇者 烏魯塔 ★★★`,
                                "value": `uruta`,
                                "description": `Uruta 2022-03-09`,
                                "default": false,
                                "emoji": {
                                    name: "face_uruta01",
                                    id: "1140014926824480868"
                                }
                            },
                            {
                                "label": `現代勇者 神田綾音 ★★★`,
                                "value": `ayane`,
                                "description": `Ayane 2022-03-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_ayane01",
                                    id: "1140014868766937128"
                                }
                            },
                            {
                                "label": `未來勇者 牧愛菈 ★★★`,
                                "value": `muila`,
                                "description": `Muila 2022-03-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_muila01",
                                    id: "1140014909715918858"
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
