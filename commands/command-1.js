const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("command-1")
        .setDescription("command-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xffd700)
                    .setTitle("**指令** 列表")
                    .setDescription("你個笨蛋! 現在是怎麼了, 指令也不會自己記住了嗎? 你可真會為難本喵!\n\n............\n\n算了算了, 聽好了, 指令就在下方, 要甚麼就自己選擇\n\n~~這會是最後一次了嗎喵?~~")
                    .setImage("https://cdn.discordapp.com/attachments/933707595301150740/1003945819189284954/unknown.png")

                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('command_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `邀請碼規定`,
                                "value": `邀請碼規定`,
                                "default": false
                            },
                            {
                                "label": `工具箱`,
                                "value": `工具箱`,
                                "default": false
                            },
                            {
                                "label": `帳號綁定`,
                                "value": `帳號綁定`,
                                "default": false
                            },
                            {
                                "label": `首抽推薦`,
                                "value": `首抽推薦`,
                                "default": false
                            },
                            {
                                "label": `曬卡定義及規定`,
                                "value": `曬卡定義及規定`,
                                "default": false
                            },
                            {
                                "label": `平台關係圖`,
                                "value": `平台關係圖`,
                                "default": false
                            },
                            {
                                "label": `貼牛棚`,
                                "value": `貼牛棚`,
                                "default": false
                            },
                            {
                                "label": `資源優先表`,
                                "value": `資源優先表`,
                                "default": false
                            },
                            {
                                "label": `輔助升星優先表`,
                                "value": `輔助升星優先表`,
                                "default": false
                            },
                            {
                                "label": `升星寶珠需求表`,
                                "value": `升星寶珠需求表`,
                                "default": false
                            },
                            {
                                "label": `角色評價表`,
                                "value": `角色評價表`,
                                "default": false
                            },
                            {
                                "label": `商店必買`,
                                "value": `商店必買`,
                                "default": false
                            },
                            {
                                "label": `登入自選`,
                                "value": `登入自選`,
                                "default": false
                            },
                            {
                                "label": `看狀態`,
                                "value": `看狀態`,
                                "default": false
                            },
                            {
                                "label": `主線卡關`,
                                "value": `主線卡關`,
                                "default": false
                            },
                            {
                                "label": `塔九機制`,
                                "value": `塔九機制`,
                                "default": false
                            },
                            {
                                "label": `活動資訊`,
                                "value": `活動資訊`,
                                "default": false
                            }
                        ])
                )

                const nanaScriptList = [
                    "本、本喵不要繼續加班了……",
                    "笨蛋凱撒，快點工作喵！",
                    "會死哦，本喵說不定真的會死喵！",
                    "－－笨蛋凱撒！！！",
                    "本喵完全能想像當初負責照顧你的人有多麼辛苦喵。",
                    "<:nana_simpsons:934456179705409566>"
                ]
                
                const nanascript = nanaScriptList[Math.floor(Math.random() * nanaScriptList.length)];
                const channel = await client.channels.fetch(interaction.channelId)

                await interaction.deferReply()

                await channel.send(
                    {
                        content: `<@!${interaction.user.id}> ${nanascript}`,
                        embeds: [embed],
                        components: [list],
                        ephemeral: true,
                    }
                )

                await interaction.deleteReply()
            }
        } catch (error) {
            util.showErrorReply(interaction, error)
        }
    }
}
