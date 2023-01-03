const { EmbedBuilder } = require("@discordjs/builders");
const randomReply = require('../replyScript/randomReply.json');

const data = {
    'shiro': {
        "type": "rich",
        "title": `賢者 白 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358>  <:class_healer:933339563127078922>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：待確認 | ATK：待確認`
            },
            {
                "name": `<:detail_skill:933339968967933963> 待確認`,
                "value": `待確認`
            },
            {
                "name": `<:detail_attack:933340014379667457> 待確認`,
                "value": `待確認`
            },
            {
                "name": `<:detail_leader:933339992732876811> 待確認`,
                "value": `待確認`
            },
            {
                "name": `<:detail_passive:933340075910131732> 待確認`,
                "value": `待確認`
            },
            {
                "name": `<:detail_passive:933340075910131732> 待確認`,
                "value": `待確認`
            },
            {
                "name": `<:detail_passive:933340075910131732> 待確認`,
                "value": `待確認`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 待確認+ (6潛)`,
                "value": `使自身 待確認 增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫 待確認 (12潛)`,
                "value": `使自身免疫 待確認`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1058426292967571608.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
}

const nanascript = randomReply[Math.floor(Math.random() * randomReply.length)];

module.exports = {
    data: {
        name: 'ssr_3'
    },
    async execute(interaction, client) {
        const character = data[interaction.values[0]]
        const embed = new EmbedBuilder()
            .setColor(character.color)
            .setTitle(character.title)
            .setDescription(character.description)
            .setThumbnail(character.thumbnail.url)
            .addFields(character.fields);
        await interaction.reply({
            content: `<@!${interaction.user.id}> ${nanascript}`,
            embeds: [embed],
            ephemeral: true,
        })
    }
}