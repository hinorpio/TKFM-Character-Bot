const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-liberation-1")
        .setDescription("list-liberation-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xb4c9d9)
                    .setTitle("**解放** 角色列表")
                    .setDescription("娜娜：那是甚麼喵？解放晶石？\n\n伊布力斯：哼！這兩顆是神秘商人大力推薦本小姐的超稀有晶石，能讓人突破自身能力極限，讓全身能力更上一層樓，正相稱我，伊布力斯的傳說級寶物！\n\n(伊布力斯將一顆解放晶石放在娜娜的辦公桌上)\n\n伊布力斯：咳咳...哼！娜娜，看在妳也是魔王的後宮的份上，這其中一顆本小姐就賜給妳了...本小姐才..才不是關心妳喔！\n\n伊布力斯：上次泡溫泉時就跟妳說過了，要掌握休息和工作的平衡！結果妳還是每天都在加班，即便妳只是凱薩的側室，但本小姐不想看到後官的成員每天這麼辛苦！反正妳都不聽，那至少讓妳身體更耐操一點，不要加班到睡在辦公桌上，或者頂著黑眼圈去給凱薩侍寢...本小姐每次看到都......沒！沒事！\n\n娜娜：伊布力斯，那個...\n\n伊布力斯：明白了嗎？減輕負擔，對，本小姐只是想讓凱薩減輕負擔，本...本小姐可是凱薩的正宮，我可不允許凱薩的後宮每天加班累倒這事情傳出去，會嚴重影響到凱薩的名譽的！知道了嗎？！\n\n娜娜：......伊布力斯呀，謝謝妳的好意，可是...\n\n(娜娜從抽屜拿出來一顆解放晶石)\n\n娜娜：妳手上這晶石，本喵也從神秘商人那裡買來了，剛剛聽部下說妳花60000魔晶石買的，是被敲詐了吧。這晶石本喵早就試過了，想看看能不能讓本喵提高工作效率，結果甚麼都沒發生，白白浪費15000魔晶石！妳也早點放棄吧，這玩意大概只是巴爾拿來給商人去賣的......等等？！這...？！兩顆晶石在發光？！阿！伊布力斯！妳手中的？小心！！！\n\n伊布力斯：？欸？？欸欸欸？？？？？\n\n娜娜：It's...It's Over 900000？！欸欸欸欸！？伊布力斯妳的攻擊力突破90萬了！\n\n伊布力斯：欸欸欸欸？？？\n\n---------------------------------------------\n<a:119:882828927842795530>**注意**<a:119:882828927842795530>**注意**<a:119:882828927842795530>\n**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**")
                    .setImage("https://cdn.discordapp.com/attachments/933707595301150740/1054809372229910659/New_Project.png")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('liberation_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `魔王 巴爾 ★★★`,
                                "value": `baal`,
                                "description": `Baal 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal01",
                                    id: "1140011236143145100"
                                }
                            },
                            {
                                "label": `魔王 撒旦 ★★★`,
                                "value": `satan`,
                                "description": `Satan 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan01",
                                    id: "1140011283681394879"
                                }
                            },
                            {
                                "label": `魔王 伊布力斯 ★★★`,
                                "value": `iblis`,
                                "description": `Iblis 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis01",
                                    id: "1140011254228987984"
                                }
                            },
                            {
                                "label": `精靈王 賽露西亞 ★★★`,
                                "value": `salucia`,
                                "description": `Salucia 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_salucia01",
                                    id: "1140011281789751397"
                                }
                            },
                            {
                                "label": `矮人王 蘭兒 ★★★`,
                                "value": `lana`,
                                "description": `Lana 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana01",
                                    id: "1140011264584712202"
                                }
                            },
                            {
                                "label": `法斯公主 露露 ★★★`,
                                "value": `lulu`,
                                "description": `Lulu 2020-12-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_lulu01",
                                    id: "1140011267977912520"
                                }
                            },
                            {
                                "label": `魔人偶 KS-VIII ★★★`,
                                "value": `ks8`,
                                "description": `KS8 2021-02-24`,
                                "default": false,
                                "emoji": {
                                    name: "face_ks01",
                                    id: "1140011259727728670"
                                }
                            },
                            {
                                "label": `復生公主 千鶴 ★★★`,
                                "value": `chizuru`,
                                "description": `Chizuru 2021-04-21`,
                                "default": false,
                                "emoji": {
                                    name: "face_chizuru01",
                                    id: "1140011241285353633"
                                }
                            },
                            {
                                "label": `天使長 聖米勒 ★★★`,
                                "value": `milae`,
                                "description": `Milae 2021-07-14`,
                                "default": false,
                                "emoji": {
                                    name: "face_hshs02",
                                    id: "1140011247878819942"
                                }
                            },
                            {
                                "label": `祭典狂歡 巴爾 ★★★ (限定)`,
                                "value": `f-baal`,
                                "description": `F.Baal 2020-12-30`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal04",
                                    id: "1140011239179825342"
                                }
                            },
                            {
                                "label": `偶像 黑白諾艾莉 ★★★ (限定)`,
                                "value": `noel`,
                                "description": `Noel 2021-02-03`,
                                "default": false,
                                "emoji": {
                                    name: "face_noel01",
                                    id: "1140011278501429260"
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
                                "label": `碧波白喵 娜娜 ★★★ (限定)`,
                                "value": `o-nana`,
                                "description": `O.Nana 2023-07-12`,
                                "default": false,
                                "emoji": {
                                    name: "face_nana15",
                                    id: "1140021913998086184"
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
