const { EmbedBuilder } = require("@discordjs/builders");
const randomReply = require('../replyScript/randomReply.json');

const data = {
    'baal': {
        "type": "rich",
        "title": `魔王 巴爾 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `第一階段`,
                "value": `**必殺技，一星被動強化**`
            },
            {
                "name": `<:detail_skill:933339968967933963> 烈焰攻心`,
                "value": `使自身攻擊力增加35%(3回合)，造成傷害增加10%(3回合)，再以攻擊力503％對目標造成傷害，CD: 3`
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔王肉體`,
                "value": `使自身普攻傷害增加25%\n使自身必殺技傷害增加15%`
            },
            {
                "name": `第二階段`,
                "value": `**HP與ATK將永久提升10%**`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,440,520 | ATK：910,400`
            },
            {
                "name": `第三階段`,
                "value": `**隊長技，三星被動，五星被動強化**`
            },
            {
                "name": `<:detail_leader:933339992732876811> 魔王巴爾之狡詐`,
                "value": `我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n自身攻擊力增加125%\n自身必殺技傷害增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 不為人知的性格`,
                "value": `必殺時，觸發「使自身攻擊力增加15%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 巴爾的惡作劇`,
                "value": `第1回合開始時，觸發「使自身當前必殺技CD減少1回合」\n必殺時，觸發「使自身當前必殺技CD減少1回合、目標當前必殺技CD增加2回合」\n必殺時，觸發「使目標受到火屬性傷害增加10%(最多2層)」`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856492803358326804.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'satan': {
        "type": "rich",
        "title": `魔王 撒旦 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_protector:933339611080572948>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `第一階段`,
                "value": `**必殺技，普攻，一星被動強化**`
            },
            {
                "name": `<:detail_skill:933339968967933963> 暴戾恣睢`,
                "value": `使自身攻擊力增加100%(3回合)，獲得嘲諷效果(3回合)並變為防禦狀態，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 撕裂`,
                "value": `以100%攻擊力對目標造成傷害，並變為防禦狀態`
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔王的霸氣`,
                "value": `使自身受到傷害減少20%`
            },
            {
                "name": `第二階段`,
                "value": `**HP與ATK將永久提升10%**`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,440,520 | ATK：910,400`
            },
            {
                "name": `第三階段`,
                "value": `**隊長技，三星被動，五星被動強化**`
            },
            {
                "name": `<:detail_leader:933339992732876811> 魔王撒旦之狂妄`,
                "value": `我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n使自身攻擊力增加100%\n使撒旦自身獲得嘲諷效果(永久)、防禦時減傷效果增加15%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 撒旦的回禮`,
                "value": `被攻擊時，觸發「以自身攻擊力100%進行反擊」\n被攻擊時，觸發「使自身攻擊力增加10%(最多10層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 不敗之軀`,
                "value": `使自身每回合以自身最大HP20%進行治療\n被攻擊時，觸發「使自身造成傷害增加2%(最多10層)」`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436619403294.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'iblis': {
        "type": "rich",
        "title": `魔王 伊布力斯 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_attacker:933339400916578344>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `第一階段`,
                "value": `**必殺技，一星被動強化**`
            },
            {
                "name": `<:detail_skill:933339968967933963> 劇毒之薔薇`,
                "value": `使目標受到魔王 伊布力斯的傷害增加10%(最多3層)，並以攻擊力560％對目標造成傷害，CD: 3`
            },
            {
                "name": `<:detail_passive:933340075910131732> 秘傳魔力儀式`,
                "value": `當前HP大於75％時，發動「造成傷害增加20%」`
            },
            {
                "name": `第二階段`,
                "value": `**HP與ATK將永久提升10%**`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,166,609 | ATK：989,565`
            },
            {
                "name": `第三階段`,
                "value": `**隊長技，三星被動，五星被動強化**`
            },
            {
                "name": `<:detail_leader:933339992732876811> 魔王伊布力斯之傲慢`,
                "value": `我方全體最大HP20%\n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n攻擊時，觸發「以150％攻擊力對敵全體進行追擊」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔力汲取`,
                "value": `普攻傷害增加20%\n造成傷害時會以傷害值33％回復自身HP\n使自身必殺傷害增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 眾生壓迫`,
                "value": `使自身攻擊力增加25%\n攻擊時，觸發「使敵方全體受到光屬性傷害增加4%(最多5層)」`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436821254184.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
}

const nanascript = randomReply[Math.floor(Math.random() * randomReply.length)];

module.exports = {
    data: {
        name: 'liberation_1'
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