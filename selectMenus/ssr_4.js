const { EmbedBuilder } = require("@discordjs/builders");
const randomReply = require('../replyScript/randomReply.json');

const data = {
    'shiro': {
        "type": "rich",
        "title": `賢者 白 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_healer:933339563127078922>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,330,469 | ATK：784,453`
            },
            {
                "name": `<:detail_skill:933339968967933963> 再生之風`,
                "value": `以攻擊力50％對我方全體進行治療，以自身攻擊力60/70/80/90/100％每回合對我方全體進行治療(4回合)，並使自身以外的我方全體攻擊力增加0/0/17.5/20/25％(1回合)，自身以外的我方全體攻擊力增加15/17.5/17.5/20/25%(4回合)，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 癒合術`,
                "value": `以自身攻擊力25％對我方全體進行治療，並以自身攻擊力25％每回合對我方全體進行治療(2回合) `
            },
            {
                "name": `<:detail_leader:933339992732876811> 超越時間的賢者`,
                "value": `我方全體HP增加10%\n我方全體攻擊力增加40%\n我方全體攻擊者造成傷害增加20%\n我方全體守護者最大HP增加10%\n我方全體治療者攻擊力增加40%\n我方全體輔助者攻擊力增加40%\n我方全體妨礙者造成傷害增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 全能之術`,
                "value": `普攻時，觸發「以自身攻擊力25％對我方當前HP最低者進行治療」\n攻擊時，觸發「使我方全體獲得友方目標最大HP10％的護盾(1回合)」\n攻擊時，觸發「以自身攻擊力20％使我方全體攻擊者、妨礙者攻擊力增加(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 千年智慧`,
                "value": `最大HP增加10%\n攻擊力增加20%\n造成治療量增加25%\n造成持續治療量增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 最佳化配置`,
                "value": `第1回合時，觸發《適才適所》\n\n《適才適所》\n使我方全體攻擊者造成傷害增加15%(50回合)\n使我方全體守護者受到傷害減少15%(50回合)\n使我方全體治療者攻擊力增加15%(50回合)\n使我方全體輔助者攻擊力增加15%(50回合)\n使我方全體妨礙者造成傷害增加15%(50回合)`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1058426292967571608.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'shiro2': {
        "type": "rich",
        "title": `賢者 白 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_healer:933339563127078922>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：待確認 | ATK：待確認`
            },
            {
                "name": `<:detail_skill:933339968967933963> 再生之風`,
                "value": `以攻擊力50％對我方全體進行治療，以自身攻擊力60/70/80/90/100％每回合對我方全體進行治療(4回合)，並使自身以外的我方全體攻擊力增加0/0/17.5/20/25％(1回合)，自身以外的我方全體攻擊力增加15/17.5/17.5/20/25%(4回合)，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 癒合術`,
                "value": `以自身攻擊力25％對我方全體進行治療，並以自身攻擊力25％每回合對我方全體進行治療(2回合) `
            },
            {
                "name": `<:detail_leader:933339992732876811> 超越時間的賢者`,
                "value": `我方全體HP增加10%\n我方全體攻擊力增加40%\n我方全體攻擊者造成傷害增加20%\n我方全體守護者最大HP增加10%\n我方全體治療者攻擊力增加40%\n我方全體輔助者攻擊力增加40%\n我方全體妨礙者造成傷害增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 全能之術`,
                "value": `普攻時，觸發「以自身攻擊力25％對我方當前HP最低者進行治療」\n攻擊時，觸發「使我方全體獲得友方目標最大HP10％的護盾(1回合)」\n攻擊時，觸發「以自身攻擊力20％使我方全體攻擊者、妨礙者攻擊力增加(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 千年智慧`,
                "value": `最大HP增加10%\n攻擊力增加20%\n造成治療量增加25%\n造成持續治療量增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 最佳化配置`,
                "value": `第1回合時，觸發《適才適所》\n\n《適才適所》\n使我方全體攻擊者造成傷害增加15%(50回合)\n使我方全體守護者受到傷害減少15%(50回合)\n使我方全體治療者攻擊力增加15%(50回合)\n使我方全體輔助者攻擊力增加15%(50回合)\n使我方全體妨礙者造成傷害增加15%(50回合)`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
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
        name: 'ssr_4'
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