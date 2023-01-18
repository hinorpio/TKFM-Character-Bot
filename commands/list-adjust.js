const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder} = require("@discordjs/builders");
const util = require("../util");
const randomReply = require('../replyScript/randomReply.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("list-adjust-1")
        .setDescription("list-adjust-1"),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const embed = new EmbedBuilder()
                    .setColor(0xb4c9d9)
                    .setTitle("**調整歷史** 角色列表")
                    .setDescription("蛤？笨蛋凱薩你在說甚麼？(暈倒)，你怎麼那麼突然又要找以前的資料，你這不是想累死本喵嗎？！\n......唉，算了算了，也不是第一天的事了。來吧，你想找誰？")
                    
                const list = new ActionRowBuilder().setComponents(
                    new SelectMenuBuilder()
                        .setCustomId('adjust_1')
                        .setPlaceholder('選擇角色')
                        .setOptions([
                            {
                                "label": `魔管家 艾可 ★★ (調整前)`,
                                "value": `aiko`,
                                "description": `Aiko (Before 2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_ik01",
                                    id: "856202436162617385"
                                }
                            },
                            {
                                "label": `神官長 菲歐菈 ★★ (調整前)`,
                                "value": `fiora`,
                                "description": `Fiora (Before 2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_fiora01",
                                    id: "862655189046788126"
                                }
                            },
                            {
                                "label": `雙蛇軍團護士長 艾琳 ★ (調整前)`,
                                "value": `irene`,
                                "description": `Irene (Before 2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_irene01",
                                    id: "862655188141604885"
                                }
                            },
                            {
                                "label": `美人魚 瑪蓮 ★ (調整前)`,
                                "value": `marlene`,
                                "description": `Marlene (Before 2021-05-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_mermaid01",
                                    id: "858240484681580584"
                                }
                            },
                            {
                                "label": `劍聖 神無雪 ★★ (調整前)`,
                                "value": `minayomi`,
                                "description": `Minayomi (Before 2021-07-14)`,
                                "default": false,
                                "emoji": {
                                    name: "face_minayomi02",
                                    id: "895195995644784652"
                                }
                            },
                            {
                                "label": `矮人王 蘭兒 ★★★ (調整前)`,
                                "value": `lana`,
                                "description": `Lana (Before 2021-09-22)`,
                                "default": false,
                                "emoji": {
                                    name: "face_lana01",
                                    id: "856202436463820810"
                                }
                            },
                            {
                                "label": `大將軍 朱諾安 ★★ (調整前)`,
                                "value": `juneau`,
                                "description": `Juneau (Before 2021-09-22)`,
                                "default": false,
                                "emoji": {
                                    name: "face_juneau01",
                                    id: "862655188540063754"
                                }
                            },
                            {
                                "label": `女忍者 凜月 ★★ (調整前)`,
                                "value": `ritsuki`,
                                "description": `Ritsuki (Before 2021-09-22)`,
                                "default": false,
                                "emoji": {
                                    name: "face_ritsuki01",
                                    id: "856202436838817881"
                                }
                            },
                            {
                                "label": `蛇女之后 梅絲米奈雅 ★★★ (調整前)`,
                                "value": `mesmiia`,
                                "description": `Mesmiia (Before 2021-10-27)`,
                                "default": false,
                                "emoji": {
                                    name: "face_mesmiia01",
                                    id: "856202437005279263"
                                }
                            },
                            {
                                "label": `復生公主 千鶴 ★★★ (調整前)`,
                                "value": `chizuru`,
                                "description": `Chizuru (Before 2021-10-27)`,
                                "default": false,
                                "emoji": {
                                    name: "face_chizuru01",
                                    id: "856202436476534785"
                                }
                            },
                            {
                                "label": `祭典狂歡 巴爾 ★★★ (限定) (調整前)`,
                                "value": `f-baal`,
                                "description": `F.Baal (Before 2022-01-12)`,
                                "default": false,
                                "emoji": {
                                    name: "face_baal04",
                                    id: "929765145981366282"
                                }
                            },
                            {
                                "label": `復活兔 撒旦 ★★★ (限定) (調整前)`,
                                "value": `e-satan`,
                                "description": `E.Satan (Before 2022-04-13)`,
                                "default": false,
                                "emoji": {
                                    name: "face_satan02",
                                    id: "865993275927035914"
                                }
                            },
                            {
                                "label": `夏日 KS-VIII ★★★ (限定) (調整前)`,
                                "value": `s-ks8`,
                                "description": `S.KS8 (Before 2022-04-13)`,
                                "default": false,
                                "emoji": {
                                    name: "face_ks02",
                                    id: "1047027074151493662"
                                }
                            },
                            {
                                "label": `小惡魔 布蘭妮 ★★★ (限定) (調整前)`,
                                "value": `h-britney`,
                                "description": `H.Britney (Before 2022-12-31)`,
                                "default": false,
                                "emoji": {
                                    name: "face_britney02",
                                    id: "902817412360065054"
                                }
                            },
                            {
                                "label": `貓娘Vtuber 杏仁咪嚕 ★★★ (調整前)`,
                                "value": `miru`,
                                "description": `Miru (Before 2023-01-19)`,
                                "default": false,
                                "emoji": {
                                    name: "face_miru01",
                                    id: "950349904197328907"
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
