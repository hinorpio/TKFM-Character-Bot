const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-6")
        .setDescription("list-ssr-6"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2024 夏日活動後 ~ 啦啦隊)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_6')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `魔獸獵手 神無雪 ★★★ (限定)`,
                                "value": `d-minayomi`,
                                "description": `D.Minayomi 2024-07-17`,
                                "default": false,
                                "emoji": {
                                    name: "face_minayomi03",
                                    id: "1262786657766080545"
                                }
                            },
                            {
                                "label": `魔物終結 鬼醉木 ★★★ (限定)`,
                                "value": `oniyoiki`,
                                "description": `Oniyoiki 2024-07-17`,
                                "default": false,
                                "emoji": {
                                    name: "face_oniyoiki01",
                                    id: "1262786660454764574"
                                }
                            },
                            {
                                "label": `酩酊狂歡 靜 ★★★ (限定)`,
                                "value": `beer-shizuka`,
                                "description": `Beer.Shizuka 2024-08-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_shizuka06",
                                    id: "1272582221911425186"
                                }
                            },
                            {
                                "label": `千年靈狐 椿 ★★★ (限定)`,
                                "value": `tsubaki`,
                                "description": `Tsubaki 2024-08-15`,
                                "default": false,
                                "emoji": {
                                    name: "face_tsubaki01",
                                    id: "1272582224088268872"
                                }
                            },
                            {
                                "label": `占星師 亞美西思特 ★★★ (限定)`,
                                "value": `amethystina`,
                                "description": `Amethystina 2024-09-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_amethystina01",
                                    id: "1283465675376955453"
                                }
                            },
                            {
                                "label": `勇者兔女郎 神田綾音 ★★★ (限定)`,
                                "value": `bg-ayane`,
                                "description": `Bg.Ayane 2024-09-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_ayane04",
                                    id: "1283465677822361600"
                                }
                            },
                            {
                                "label": `性感兔女郎 伊布力斯 ★★★ (限定)`,
                                "value": `bg-iblis`,
                                "description": `Bg.Iblis 2024-09-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis09",
                                    id: "1283465681064693780"
                                }
                            },
                            {
                                "label": `治癒之星 蘇珊 ★★★ (限定)`,
                                "value": `susan`,
                                "description": `Susan 2024-10-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_susan01",
                                    id: "1294977876600426598"
                                }
                            },
                            {
                                "label": `純真殺意 撒旦 ★★★ (限定)`,
                                "value": `h-satan`,
                                "description": `H.Satan 2024-10-16`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan06",
                                    id: "1294977870447251519"
                                }
                            },
                            {
                                "label": `甜蜜女僕 星空奈奈美 ★★★ (限定)`,
                                "value": `m-nanami`,
                                "description": `M.Nanami 2024-11-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_nanami02",
                                    id: "1306227787824234517"
                                }
                            },
                            {
                                "label": `冷淡女僕 KS-VIII ★★★ (限定)`,
                                "value": `m-ks8`,
                                "description": `M.KS8 2024-11-13`,
                                "default": false,
                                "emoji": {
                                    name: "face_ks03",
                                    id: "1306227783298449451"
                                }
                            },
                            {
                                "label": `性誕魔王 巴爾 ★★★ (限定)`,
                                "value": `x-baal`,
                                "description": `X.Baal 2024-12-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal10",
                                    id: "1317244405392085002"
                                }
                            },
                            {
                                "label": `純真祈願 牧愛菈 ★★★ (限定)`,
                                "value": `x-muila`,
                                "description": `X.Muila 2024-12-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_muila02",
                                    id: "1317244416682889359"
                                }
                            },
                            {
                                "label": `聖夜奇謀 布蘭妮 ★★★ (限定)`,
                                "value": `x-britney`,
                                "description": `X.Britney 2024-12-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney04",
                                    id: "1317244409825333278"
                                }
                            },
                            {
                                "label": `翩舞雪花 初華 ★★★ (限定)`,
                                "value": `x-ichika`,
                                "description": `X.Ichika 2024-12-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_ichika02",
                                    id: "1317244413839151134"
                                }
                            },
                            {
                                "label": `喜迎性春 菲歐菈 ★★★ (限定)`,
                                "value": `ny-fiora`,
                                "description": `Ny.Fiora 2025-01-22`,
                                "default": false,
                                "emoji": {
                                    name: "face_fiora05",
                                    id: "1331999489891897427"
                                }
                            },
                            {
                                "label": `舞焰赤龍 薩夏 ★★★ (限定)`,
                                "value": `zaskia`,
                                "description": `Zaskia 2025-01-22`,
                                "default": false,
                                "emoji": {
                                    name: "face_zaskia01",
                                    id: "1331999492748087296"
                                }
                            },
                            {
                                "label": `虔信神祀 艾可 ★★★ (限定)`,
                                "value": `p-aiko`,
                                "description": `P.Aiko 2025-02-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik12",
                                    id: "1339295970097365012"
                                }
                            },
                            {
                                "label": `夜之影 凱薩 ★★★ (限定)`,
                                "value": `ni-caesar`,
                                "description": `Ni.Caesar 2025-02-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_caesar04",
                                    id: "1339295967924457503"
                                }
                            },
                            {
                                "label": `祭典花韻 香奈 ★★★ (限定)`,
                                "value": `f-kana`,
                                "description": `F.Kana 2025-02-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_kana02",
                                    id: "1339295973935026197"
                                }
                            },
                            {
                                "label": `銀鴞武裝 米婭 ★★★ (限定)`,
                                "value": `star-mia`,
                                "description": `Star.Mia 2025-03-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_mia02",
                                    id: "1349090157889978471"
                                }
                            },
                            {
                                "label": `白熊武裝 冬。艾妮 ★★★ (限定)`,
                                "value": `star-annee`,
                                "description": `Star.Annee 2025-03-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_annee01",
                                    id: "1349090154534404106"
                                }
                            },
                            {
                                "label": `甜蜜寶貝 萊爾貝妲 ★★★ (限定)`,
                                "value": `bedard`,
                                "description": `Bedard 2025-04-01`,
                                "default": false,
                                "emoji": {
                                    name: "face_bedard01",
                                    id: "1359673782431912016"
                                }
                            },
                            {
                                "label": `躍動之星 黑白諾艾莉 ★★★ (限定)`,
                                "value": `c-noel`,
                                "description": `C.Noel 2025-04-09`,
                                "default": false,
                                "emoji": {
                                    name: "face_noel05",
                                    id: "1359681704784298245"
                                }
                            },
                            {
                                "label": `啦啦隊長 尤妮思 ★★★ (限定)`,
                                "value": `eunice`,
                                "description": `eunice 2025-04-09`,
                                "default": false,
                                "emoji": {
                                    name: "face_eunice01",
                                    id: "1359673786416369856"
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

