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
    'v-baal': {
        "type": "rich",
        "title": `甜心可可 巴爾 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_healer:933339563127078922>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,966,895 | ATK：719,684`
            },
            {
                "name": `<:detail_skill:933339968967933963> 情人節巧克力大放送~`,
                "value": `以自身攻擊力20%使自身以外我方全體攻擊力增加(1回合)，使目標受到傷害增加15/15/22.5/22.5/30%(最多3/3/2/2/2層)，以自身攻擊力96/110/123/137/150％每回合對我方全體進行治療(3回合)，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 甜蜜滋味`,
                "value": `以自身攻擊力20％使自身以外我方全體攻擊力增加(1回合)，以自身攻擊力20％對我方全體進行治療，並以自身攻擊力20％每回合對全體進行治療(2回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 戀愛少女的小小心機`,
                "value": `我方全體最大HP增加20%\n我方全體攻擊力增加50%\n我方全體獲得「隊伍中有至少3名火屬性隊員時，發動《大家一起做巧克力吧》」\n我方站位3的隊員獲得《送給最喜歡的那個他♡》\n\n《大家一起做巧克力吧》\n必殺時，觸發「使目標受到必殺技傷害增加15%(2回合)」\n必殺時，觸發「使目標受到火屬性傷害增加15%(2回合)」\n\n《送給最喜歡的那個他♡》\n攻擊力增加70%\n必殺時，觸發「使自身造成傷害增加20%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 商人的行銷策略`,
                "value": `使我方最大HP最低者獲得「受到傷害減少15%」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 是愛，人家加了愛唷~`,
                "value": `我方全體受到必殺技傷害減少10%\n必殺時，觸發「使我方全體被治療時回復量增加20%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 巧克力、荼還是人家♡`,
                "value": `我方治療者以及輔助者獲得《激情夜晚》 \n\n《激情夜晚》\n攻擊力增加40%\n防禦時，觸發「我方全體受到持續型治療增加20%(1回合)」`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1072880868869275659.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'v-satan': {
        "type": "rich",
        "title": `致命可可 撒旦 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_obstructer:933339487084359740>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,722,566 | ATK：604,533`
            },
            {
                "name": `<:detail_skill:933339968967933963> 女僕密技。殺個精光(?)`,
                "value": `使目標受到傷害增加10/10/12.5/12.5/15%(最多2層)、使自身獲得1層「致命香氣」(最多9層)、使自身獲得「普攻時，追加『以自身攻擊力30/50/70/90/110％對目標造成傷害』(4回合)」、再以自身攻擊力215/238/261/284/307％對目標造成傷害，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 狩獵開始`,
                "value": `以自身攻擊力100％對目標造成傷害 `
            },
            {
                "name": `<:detail_leader:933339992732876811> 血淋淋的愛意`,
                "value": `我方全體最大HP增加20%\n我方全體攻擊力增加50\n我方全體普攻傷害增加30%\n我方全體攻擊者、妨礙者獲得「攻擊時，觸發『使我方全體獲得1層『甜蜜殺意』(最多30層)』」\n我方全體攻擊者、妨礙者獲得「依據「甜蜜殺意」層數獲得不同效果：\n10層以上：「普攻時，追加『以自身攻擊力50％對目標造成傷害』」\n20層以上：「攻擊力增加50%」\n30層以上：「造成傷害增加25%」」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 贈予甜美的死亡`,
                "value": `普攻時，觸發「使自身獲得1層『致命香氣』(最多9層)」\n依據「致命香氣」層數獲得不同效果：\n3層以上：「普攻時，追加『以自身攻擊力40％對目標造成傷害』」 \n9層以上：「攻擊力增加50%」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 不夠不夠不夠！`,
                "value": `每經過1回合，觸發「使自身獲得1層『受虐狂熱』(最多10層)」\n被攻擊時，觸發「使自身獲得1層『受虐狂熱』(最多10層)」\n依據「受虐狂熱」層數獲得不同效果：\n5層以上：「攻攣力增加20%」\n10層以上：「攻擊力增加40%」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 死一次試試看吧~`,
                "value": `依據「致命香氣」層數獲得不同效果：\n3層以上：「自身造成傷害增加20%」\n6層以上：「普攻時，觸發『使自身普攻傷害增加10%(最多3層)』」\n9層以上：「攻擊時，觸發『使目標受到傷害增加15%(最多1層)』」`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊力+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1071982179095163012.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'v-iblis': {
        "type": "rich",
        "title": `純情可可 伊布力斯 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_supporter:933339516788408420>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,320,620 | ATK：859,300`
            },
            {
                "name": `<:detail_skill:933339968967933963> 香蜜沉沉味如糖`,
                "value": `以自身攻擊力20/20/20/30/40％使我方全體光屬性角色攻擊力增加(1回合)，以自身攻擊力30/35/40/40/40％使我方站位5的隊員攻擊力增加(1回合)，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 只送給你`,
                "value": `以自身攻擊力10％使我方全體光屬性角色攻擊力增加(1回合)，以自身攻擊力20％使我方站位5的隊員攻擊力增加(1回合)、使我方站位5的隊員普攻傷害增加35%(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 濃情蜜意之日`,
                "value": `使我方全體最大HP增加30%\n使我方全體攻擊力增加40%\n使我方全體治療者、輔助者獲得《送給最愛的他》\n使我方站位5的隊員獲得《人情巧克力》 \n\n《送給最愛的他》\n必殺時，觸發「使我方站位5的隊員造成傷害增加15%(1回合)」\n必殺時，觸發「使我方站位5的隊員獲得『必殺時，觸發 「以自身攻擊力50％對目標造成傷害」(1回合)』」 \n\n《人情巧克力》\n必殺時，觸發「使除了自身以外的隊員攻擊力增加50%(最多1層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 甜蜜獻禮`,
                "value": `第一回合時，觸發「使我方站位5的隊員普攻傷害增加50%(最多1層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 精心製作巧克力`,
                "value": `每經過4回合，觸發「使我方站位5的隊員必殺傷害增加40%(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 戀愛、魔王、巧克力`,
                "value": `必殺時，觸發「使我方站位5的隊員必殺技傷害增加30%(1回合)」\n必殺時，觸發「使我方全體攻擊者必殺傷害增加20%(1回合)」`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1071982359508959312.webp?size=128&quality=lossless`,
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