const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-8")
        .setDescription("list-ssr-8"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2026年新春 ~ 現在)")
                    .setDescription("真是的, 你這個笨蛋, 腦子只記色色的事, 就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_8')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `花嫁 靜 ★★★ (限定)`,
                                "value": `b-shizuka`,
                                "description": `B.Shizuka 2026-01-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_shizuka07",
                                    id: "1458458915665871061"
                                }
                            },
                            {
                                "label": `御前神使 兔姬 ★★★ (限定)`,
                                "value": `m-usagihime`,
                                "description": `M.Usagihime 2026-01-07`,
                                "default": false,
                                "emoji": {
                                    name: "face_uh05",
                                    id: "1458458929578119289"
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

