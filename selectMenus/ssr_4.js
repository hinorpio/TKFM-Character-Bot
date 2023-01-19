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
    'ny-salucia': {
        "type": "rich",
        "title": `絕代佳人 賽露西亞 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_obstructer:933339487084359740>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,201,153 | ATK：890,968`
            },
            {
                "name": `<:detail_skill:933339968967933963> 精靈箭術。連連矢`,
                "value": `使自身造成傷害增加10/10/15/15/20%(3回合)，以自身攻擊力200％對目標造成傷害，再使自身獲得「攻擊時，觸發『以自身攻擊力50/65/80/95/110％對目標造成傷害』(3回合)」，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 拉弦射撃`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 深藏不露的勝負心`,
                "value": `我方全體HP增加20%\n我方全體攻擊者、妨礙者獲得「隊伍中至少有3名風屬性角色時，發動《精靈隊長》」\n我方全體獲得「隊伍中至少有2名火屬性角色時，發動《狙擊陣形》」\n\n《精靈隊長》\n攻擊力增加25%\n觸發技傷害增加175%\n普攻時，觸發「以自身攻擊力40％對目標造成傷害」\n必殺時，觸發「以自身攻擊力100％對目標造成傷害」\n\n《狙擊陣形》\n攻擊力增加100%\n造成治療量增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 追風烈撃`,
                "value": `必殺時，觸發「使目標必殺技傷害減少15%(2回合)」\n必殺時，觸發「以自身攻擊力80％對目標造成傷害」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 腐蝕箭袋`,
                "value": `普攻時，觸發「使目標受到觸發技傷害增加20%(最多5層)」\n普攻時，觸發「以自身攻擊力35％對目標造成傷害」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 強烈靈氣`,
                "value": `普攻時，觸發「使我方全體必殺技傷害增加6%(最多5層)」\n必殺時，觸發「使目標受到必殺技傷害增加15%(最多2層)」`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 必殺+ (6潛)`,
                "value": `使自身必殺技傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1064522757712384072.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'ny-lana': {
        "type": "rich",
        "title": `龍飛鳳舞 蘭兒 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,045,702 | ATK：937,027`
            },
            {
                "name": `<:detail_skill:933339968967933963> 迴轉龍捲球！`,
                "value": `使自身獲得4層攻擊力增加18.75/22.5/26.25/30/33.75%(最多4層)，再以自身攻擊力353/404/454/505/555％對目標造成傷害，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 重擊！`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 交友要在勝負後！`,
                "value": `我方全體HP增加20%\n我方全體攻擊力增加40%\n自身普攻時，觸發「以自身攻擊力40％使我方全體攻擊者攻擊力增加(1回合)」\n\n我方全體攻擊者獲得「隊伍中至少有4名攻擊者角色時， 發動《一波帶走！》」\n\n《一波帶走！》\n攻擊力增加110%\n必殺時，觸發「以自身攻擊力60％使我方站位1攻擊力增加(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 蓄力蓄力！`,
                "value": `普攻時，觸發「使自身攻擊力增加12.5%(最多4層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 來發大的！`,
                "value": `每經過4回合，觸發「使自身攻擊力增加75%(最多1層)」\n必殺時，觸發「清除自身《來發大的！》的使自身攻擊力增加效果」\n普攻時，觸發「減少自身《迥轉龍捲球！》的使自身攻擊力增加效果1層」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 轉守為攻！！`,
                "value": `每經過4回合，觸發「使自身造成傷害增加40%(最多1層)」\n必殺時，觸發「清除自身《轉守為攻！！》的使自身造成傷害增加效果」\n使我方全體造成傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 必殺+ (6潛)`,
                "value": `使自身必殺技傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1064523027355815986.webp?size=96&quality=lossless`,
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