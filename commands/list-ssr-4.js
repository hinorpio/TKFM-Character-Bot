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
                                    id: "1140021924852940801"
                                }
                            },
                            {
                                "label": `絕代佳人 賽露西亞 ★★★ (限定)`,
                                "value": `ny-salucia`,
                                "description": `Ny.Salucia 2023-01-18`,
                                "default": false,
                                "emoji": {
                                    name: "face_salucia07",
                                    id: "1140021915671613481"
                                }
                            },
                            {
                                "label": `龍飛鳳舞 蘭兒 ★★★ (限定)`,
                                "value": `ny-lana`,
                                "description": `Ny.Lana 2023-01-18`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana05",
                                    id: "1140021900567904286"
                                }
                            },
                            {
                                "label": `甜心可可 巴爾 ★★★ (限定)`,
                                "value": `v-baal`,
                                "description": `V.Baal 2023-02-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal08",
                                    id: "1140021875993497680"
                                }
                            },
                            {
                                "label": `致命可可 撒旦 ★★★ (限定)`,
                                "value": `v-satan`,
                                "description": `V.Satan 2023-02-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan04",
                                    id: "1140021950920536096"
                                }
                            },
                            {
                                "label": `純情可可 伊布力斯 ★★★ (限定)`,
                                "value": `v-iblis`,
                                "description": `V.Iblis 2023-02-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis07",
                                    id: "1140021889914392676"
                                }
                            },
                            {
                                "label": `尋情慾兔 鈴蘭 ★★★ (限定)`,
                                "value": `lillane`,
                                "description": `Lillane 2023-03-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_lillane01",
                                    id: "1140021905701736490"
                                }
                            },
                            {
                                "label": `慵懶貓貓 露露 ★★★ (限定)`,
                                "value": `c-lulu`,
                                "description": `C.Lulu 2023-03-08`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu13",
                                    id: "1140021909057196072"
                                }
                            },
                            {
                                "label": `魔法少女 朱諾安 ★★★ (限定)`,
                                "value": `m-juneau`,
                                "description": `M.Juneau 2023-04-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_juneau02",
                                    id: "1140021897233436773"
                                }
                            },
                            {
                                "label": `魔法少女 布蘭妮 ★★★ (限定)`,
                                "value": `m-britney`,
                                "description": `M.Britney 2023-04-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney03",
                                    id: "1140021882666619010"
                                }
                            },
                            {
                                "label": `毒蠍 莫默 ★★★`,
                                "value": `momo`,
                                "description": `Momo 2023-04-26`,
                                "default": false,
                                "emoji": {
                                    name: "face_momo01",
                                    id: "1140021910990753832"
                                }
                            },
                            {
                                "label": `背德密醫 艾琳 ★★★ (限定)`,
                                "value": `d-irene`,
                                "description": `D.Irene 2023-05-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_Irene01",
                                    id: "1140021895190810815"
                                }
                            },
                            {
                                "label": `嬌蠻兇護 凱薩 ★★★ (限定)`,
                                "value": `n-caesar`,
                                "description": `N.Caesar 2023-05-10`,
                                "default": false,
                                "emoji": {
                                    name: "face_caesar02",
                                    id: "1140021885510369320"
                                }
                            },
                            {
                                "label": `夏日 菲歐菈 ★★★ (限定)`,
                                "value": `s-fiora`,
                                "description": `S.Fiora 2023-06-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_fiora04",
                                    id: "1140021887196483605"
                                }
                            },
                            {
                                "label": `夏日 艾可 ★★★ (限定)`,
                                "value": `s-aiko`,
                                "description": `S.Aiko 2023-06-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik11",
                                    id: "1140021891839574148"
                                }
                            },
                            {
                                "label": `夏日 巴爾 ★★★ (限定)`,
                                "value": `s-baal`,
                                "description": `S.Baal 2023-06-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal09",
                                    id: "1140021878006763580"
                                }
                            },
                            {
                                "label": `夏日 神田綾音 ★★★ (限定)`,
                                "value": `s-ayane`,
                                "description": `S.Ayane 2023-06-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_ayane02",
                                    id: "1140021872671588453"
                                }
                            },
                            {
                                "label": `乘風破浪 蘭兒 ★★★ (限定)`,
                                "value": `o-lana`,
                                "description": `O.Lana 2023-07-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana07",
                                    id: "1140021904061759540"
                                }
                            },
                            {
                                "label": `碧波白喵 娜娜 ★★★ (限定)`,
                                "value": `o-nana`,
                                "description": `O.Nana 2023-07-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_nana15",
                                    id: "1140021913998086184"
                                }
                            },
                            {
                                "label": `詛咒凝視 絲塔夏 ★★★ (限定)`,
                                "value": `sasha`,
                                "description": `Sasha 2023-08-09`,
                                "default": false,
                                "emoji": {
                                    name: "face_sasha01",
                                    id: "1140021918804750378"
                                }
                            },
                            {
                                "label": `黑鷹 貝里絲 ★★★ (限定)`,
                                "value": `bayliss`,
                                "description": `Bayliss 2023-08-09`,
                                "default": false,
                                "emoji": {
                                    name: "face_bayliss01",
                                    id: "1140021880930193509"
                                }
                            },
                            {
                                "label": `性感天使 兔姬 ★★★ (限定)`,
                                "value": `a-usagihime`,
                                "description": `A.Usagihime 2023-09-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_uh04",
                                    id: "1151846563962949673"
                                }
                            },
                            {
                                "label": `惡魔貓娘 杏仁咪嚕 ★★★ (限定)`,
                                "value": `d-miru`,
                                "description": `D.Miru 2023-09-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_miru05",
                                    id: "1151846557923164241"
                                }
                            },
                            {
                                "label": `沁夏淡粉 香草奈若 ★★★ (限定)`,
                                "value": `nyoro`,
                                "description": `Nyoro 2023-09-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_nyoro01",
                                    id: "1149700990610718791"
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

