const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-7")
        .setDescription("list-ssr-7"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2025 媽媽 ~ Now)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_7')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `盛慾嬌妻 達芙妮 ★★★ (限定)`,
                                "value": `mom-daphne`,
                                "description": `MomDaphne 2025-05-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_daphne02",
                                    id: "1370215945410183228"
                                }
                            },
                            {
                                "label": `美艷少婦 椿 ★★★ (限定)`,
                                "value": `w-tsubaki`,
                                "description": `W.Tsubaki 2025-05-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_tsubaki02",
                                    id: "1370215950896595025"
                                }
                            },
                            {
                                "label": `盛暑沁夏 伊布力斯 ★★★ (限定)`,
                                "value": `ss-iblis`,
                                "description": `SS.Iblis 2025-06-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_iblis10",
                                    id: "1382206163885621281"
                                }
                            },
                            {
                                "label": `夏日 希依 ★★★ (限定)`,
                                "value": `s-evie`,
                                "description": `S.Evie 2025-06-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_ce03",
                                    id: "1382206005856833627"
                                }
                            },
                            {
                                "label": `夏日 諾蕾蒂 ★★★ (限定)`,
                                "value": `s-noma`,
                                "description": `S.Noma 2025-06-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_noma02",
                                    id: "1382206074416791562"
                                }
                            },
                            {
                                "label": `怒濤魔鯊 芙紐絲 ★★★ (限定)`,
                                "value": `forneusa`,
                                "description": `Forneusa 2025-06-11`,
                                "default": false,
                                "emoji": {
                                    name: "face_forneusa01",
                                    id: "1382205878509375559"
                                }
                            },
                            {
                                "label": `聖劍覺醒 神田綾音 ★★★ (限定)`,
                                "value": `bu-ayane`,
                                "description": `Bu.Ayane 2025-06-25`,
                                "default": false,
                                "emoji": {
                                    name: "face_ayane05",
                                    id: "1390268364655693914"
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

