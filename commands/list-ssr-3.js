const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-ssr-3")
        .setDescription("list-ssr-3"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xefaadd)
                    .setTitle("**SSR** 角色列表 (2022 異界 凱薩 ~ Now)")
                    .setDescription("真是的, 你這個笨蛋,腦子只記色色的事,就記不著其他東西了嗎? 每次都只會麻煩本喵幫你找\n\n算了, 跟笨蛋說教還不如直接幫你找好了, 聽好了, 要本喵幫忙找人時, 就在下面選擇你要找的人, 例如要找巴爾的話, 就選擇「魔王 巴爾 ★★★」, 本喵就會把她的資料找給你看\n\n本喵這次講的那麼直白, 你這笨蛋可要記好了!")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('ssr_3')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `異界 凱薩 ★★★ (限定)`,
                                "value": `f-caesar`,
                                "description": `F.Caesar 2022-03-30`,
                                "default": false
                            },
                            {
                                "label": `夢遊魔境 露露 ★★★ (限定)`,
                                "value": `w-lulu`,
                                "description": `W.Lulu 2022-04-20`,
                                "default": false
                            },
                            {
                                "label": `夢遊魔境 千鶴 ★★★ (限定)`,
                                "value": `w-chizuru`,
                                "description": `W.Chizuru 2022-04-20`,
                                "default": false
                            },
                            {
                                "label": `高等魔族 法雅 ★★★`,
                                "value": `faya`,
                                "description": `Faya 2022-05-11`,
                                "default": false
                            },
                            {
                                "label": `惡兔魔王 兔姬 ★★★ (限定)`,
                                "value": `usagihime`,
                                "description": `Usagihime 2022-05-25`,
                                "default": false
                            },
                            {
                                "label": `夏日 伊布力斯 ★★★ (限定)`,
                                "value": `s-iblis`,
                                "description": `S.Iblis 2022-06-08`,
                                "default": false
                            },
                            {
                                "label": `夏日 黑白諾艾莉 ★★★ (限定)`,
                                "value": `s-noel`,
                                "description": `S.Noel 2022-06-08`,
                                "default": false
                            },
                            {
                                "label": `夏日 聖米勒 ★★★ (限定)`,
                                "value": `s-milae`,
                                "description": `S.Milae 2022-06-08`,
                                "default": false
                            },
                            {
                                "label": `夏日 阿爾蒂雅 ★★★ (限定)`,
                                "value": `s-aridya`,
                                "description": `S.Aridya 2022-06-08`,
                                "default": false
                            },
                            {
                                "label": `花魁 香奈 ★★★ (限定)`,
                                "value": `kana`,
                                "description": `Kana 2022-07-13`,
                                "default": false
                            },
                            {
                                "label": `雪姬 初華 ★★★ (限定)`,
                                "value": `ichika`,
                                "description": `Ichika 2022-07-13`,
                                "default": false
                            },
                            {
                                "label": `雙星之紅 安絲蒂 ★★★ (限定)`,
                                "value": `q-asida`,
                                "description": `Q.Asida 2022-08-03`,
                                "default": false
                            },
                            {
                                "label": `銀河之藍 安絲娜 ★★★ (限定)`,
                                "value": `q-asina`,
                                "description": `Q-Asina 2022-08-03`,
                                "default": false
                            },
                            {
                                "label": `傳說女僕 艾蜜莉 ★★★`,
                                "value": `emily`,
                                "description": `Emily 2022-08-24`,
                                "default": false
                            },
                            {
                                "label": `千咒魔女 安西莉卡 ★★★`,
                                "value": `anjelica`,
                                "description": `Anjelica 2022-08-24`,
                                "default": false
                            },
                            {
                                "label": `適格者 娜娜 ★★★ (限定)`,
                                "value": `c1-nana`,
                                "description": `C1.Nana 2022-09-07`,
                                "default": false
                            },
                            {
                                "label": `未知生命體 基貝魯 ★★★ (限定)`,
                                "value": `geneva`,
                                "description": `Geneva 2022-09-07`,
                                "default": false
                            },
                            {
                                "label": `元氣補給 蓮 ★★★`,
                                "value": `lotus`,
                                "description": `Lotus 2022-09-29`,
                                "default": false
                            },
                            {
                                "label": `夜星 狄 ★★★`,
                                "value": `didi`,
                                "description": `Didi 2022-10-12`,
                                "default": false
                            },
                            {
                                "label": `見習聖騎士 雷歐娜 ★★★`,
                                "value": `h.leona`,
                                "description": `H.Leona 2022-10-26`,
                                "default": false
                            },
                            {
                                "label": `鮮血魔王 洛緹亞 ★★★`,
                                "value": `h.lotiya`,
                                "description": `H.Lotiya 2022-10-26`,
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
