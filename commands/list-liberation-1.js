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
                    .setDescription("娜娜：解放晶石？那是甚麼喵？\n\n伊布力斯：哼！這兩顆可是本小姐從神秘商人哪買回來的超稀有晶石，這晶石是能讓人突破自身體能極限，戰鬥力更上一層樓的，符合本小姐的傳說級寶物。\n\n伊布力斯：(將一顆解放晶石放在娜娜的辦公桌上)\n\n伊布力斯：咳咳...哼，娜娜，看在你也是魔王的後宮的份上，這一顆解放晶石，本小姐就賜予給你了。哼！可...可不是本小姐關心你喔，\n\n伊布力斯：妳每次都工作到不懂休息，雖然你只是普通的側室，但本小姐只是不希望同為後官的一員每天都加班到半夜，上次泡溫泉時就提醒你了，要掌握休息和工作的平衡。反正你都不聽，那至少讓你身體變強一點，不要每次工作都累到睡在辦公桌上，本小姐每次經過看到都......沒！沒事！\n\n娜娜：............\n\n伊布力斯：......明白了嗎？減輕負擔，對，本小姐只是想讓凱薩減輕負擔，本...本小姐可是凱薩的正宮，我可不允許凱薩的後宮每天加班到累趴弄這事情給傳出去，這可會嚴重影響到凱薩的名譽的！知道了嗎？！\n\n娜娜：......伊布力斯呀，(從抽屜拿出來一顆解放晶石) 謝謝你的好意，可是。\n\n娜娜：第一，你手上這晶石，本喵從神秘商人那裡用五折買來了，你是被騙了吧。第二，本喵早就試過了，本想看看這晶石能不能讓本喵提高工作效率，結果甚麼都沒發生，浪費了15000魔晶石！唉，你也早點放棄吧，這玩意或許只是個破石......等等？！這...？！3顆破石在發光？！阿！伊布力斯！你手中？小心！！！\n\n伊布力斯：？欸？？欸欸欸？？？？？\n\n娜娜：It's...It's Over 900000？！伊布力斯！你的攻擊力？終於突破90萬了！\n\n---------------------------------------------\n<a:119:882828927842795530>**注意**<a:119:882828927842795530>**注意**<a:119:882828927842795530>\n**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**")
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
