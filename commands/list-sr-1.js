const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-sr-1")
        .setDescription("list-sr-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xfef4d3)
                    .setTitle("**SR** 角色列表")
                    .setDescription("真是的, 你這個笨蛋,腦子只記色色的事,就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('sr_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `魔管家 艾可 ★★`,
                                "value": `aiko`,
                                "description": `Aiko 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `聖騎士長 雷歐娜 ★★`,
                                "value": `leona`,
                                "description": `Leona 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `神官長 菲歐菈 ★★`,
                                "value": `fiora`,
                                "description": `Fiora 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `女忍者 凜月 ★★`,
                                "value": `ritsuki`,
                                "description": `Ritsuki 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `劍聖 神無雪 ★★`,
                                "value": `minayomi`,
                                "description": `Minayomi 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `妖狐 靜 ★★`,
                                "value": `shizuka`,
                                "description": `Shizuka 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `大將軍 朱諾安 ★★`,
                                "value": `juneau`,
                                "description": `Juneau 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `天才女軍師 布蘭妮 ★★`,
                                "value": `britney`,
                                "description": `Britney 2020-12-14`,
                                "default": false
                            },
                            {
                                "label": `史萊姆女王 娜芙菈菈 ★★`,
                                "value": `nafrala`,
                                "description": `Nafrala 2021-03-10`,
                                "default": false
                            },
                            {
                                "label": `魔法少女 托特拉 ★★`,
                                "value": `tyrella`,
                                "description": `Tyrella 2021-07-14`,
                                "default": false
                            },
                            {
                                "label": `地方媽媽 提爾絲 ★★ (限定)`,
                                "value": `teresa`,
                                "description": `Teresa 2021-09-08`,
                                "default": false
                            },
                            {
                                "label": `最後的銀龍 普莉希拉 ★★`,
                                "value": `pulicia`,
                                "description": `Pulicia 2021-09-29`,
                                "default": false
                            },
                            {
                                "label": `刺針 嘉維爾 ★★`,
                                "value": `janelle`,
                                "description": `Janelle 2021-10-13`,
                                "default": false
                            },
                            {
                                "label": `精靈舞者 塔諾西雅 ★★`,
                                "value": `tanocia`,
                                "description": `Tanocia 2022-05-11`,
                                "default": false
                            },
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
