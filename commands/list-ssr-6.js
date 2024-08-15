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
                    .setTitle("**SSR** 角色列表 (2024 夏日活動後 ~ Now)")
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

