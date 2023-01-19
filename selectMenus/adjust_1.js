const { EmbedBuilder } = require("@discordjs/builders");
const randomReply = require('../replyScript/randomReply.json');

const data = {
    'i-iblis': {
        "type": "rich",
        "title": `偶像 伊布力斯 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_obstructer:933339487084359740>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,878,735 | ATK：899,604\n(錯誤植入了「魔王 伊布力斯」的數據)`
            },
            {
                "name": `<:detail_skill:933339968967933963> 月夜熱曲`,
                "value": `使目標獲得\"以攻擊力138.5/160.4/182.3/204.2/226%每回合造成傷害(6回合)\"、\"攻擊力減少15%(6回合)\"、\"被治療時回複量減少25%(6回合)\"效果，CD: 6 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 歌唱`,
                "value": `使目標獲得\"以攻擊力50％每回合造成傷害(4回合)\"效果 `
            },
            {
                "name": `<:detail_leader:933339992732876811> 高貴完美的魔族偶像`,
                "value": `使自身攻擊力增加50%；每WAVE的第1回合，觸發\"使自身當前必殺技CD減少6回合\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 歌唱力`,
                "value": `當前HP大於95%時，發動\"使自身攻擊力增加20%\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 舞蹈力`,
                "value": `被治療時回復量增加50%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 偶像力。全開`,
                "value": `使自身必殺技最大CD減少2回合`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊力增加 (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436837376020.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'aiko': {
        "type": "rich",
        "title": `魔管家 艾可 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_dark:933339859559530506> <:class_supporter:933339516788408420>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,117,670 | ATK：788,773`    
            },
            {
                "name": `<:detail_skill:933339968967933963> 魔管家秘術。魔力灌注 `,
                "value": `使我方站位3的隊員攻擊力增加30/35/40/45/50%(1回合)，再以攻擊力75％對我方全體進行治療、我方站位3的隊員當前必殺技CD減少4回合\"效果，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 治癒術`,
                "value": `以攻擊力50％對我方全體進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 艾可的貼身服務`,
                "value": `使我方站位3的隊員攻擊力增加50%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 最佳後援`,
                "value": `普攻時，觸發\"使我方站位3的隊員攻擊力增加10%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 無微不至的照顧`,
                "value": `必殺時，觸發\"清除我方站位3的隊員的沉默、麻痺、睡眠效果\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 敬請全力攻擊！`,
                "value": `攻擊時，觸發\"清除我方站位3的隊員的攻擊力減少、普攻傷害減少、必殺技傷害減少效果\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436162617385.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'fiora': {
        "type": "rich",
        "title": `神官長 菲歐菈 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_light:933339825933791312> <:class_healer:933339563127078922>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,188,199 | ATK：771,501`
            },
            {
                "name": `<:detail_skill:933339968967933963> 神賜祝福`,
                "value": `以攻擊力66/75.9/85.8/95.7/105.6％對我方全體進行治療，再以攻擊力101.6/116.9/132.1/147.4/162.6％對我方全體施放護盾(2回合)，CD: 5 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 守護術`,
                "value": `以攻擊力38.5％對我方全體施放護盾(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 免於傷痛的祈願`,
                "value": `使我方全體護盾效果增加30%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 治療的聖手`,
                "value": `普攻時，觸發\"使我方全體每回合以攻擊力15％治療自身(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 主在守望`,
                "value": `被攻擊時，觸發\"使自身受到傷害減少10%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 夏日迎來`,
                "value": `使自身護盾效果增加30%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/862655189046788126.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'irene': {
        "type": "rich",
        "title": `雙蛇軍團護士長 艾琳 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_light:933339825933791312> <:class_healer:933339563127078922>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,136,381 | ATK：615,329`
            },
            {
                "name": `<:detail_skill:933339968967933963> 真摰守護`,
                "value": `以攻擊力165％對我方HP最低者進行治療，並獲得\"每回合以自身攻擊力92.8/105.8/118.7/131.6/144.6％進行治療(4回合)、\"受到傷害減少15%(4回合)\"效果，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 治療`,
                "value": `以攻擊力100%對我方HP最低者進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 對抗黑暗之志`,
                "value": `使我方全體光屬性角色被闇屬性攻擊時受到傷害減少50%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 快速愈合`,
                "value": `普攻時，觸發\"使我方HP最低者獲得每回合以攻擊力25%進行治療(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 溫柔後盾`,
                "value": `每經過1回合，觸發\"使我方HP最低者被治療時回複量增加30%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 溫柔體貼的心`,
                "value": `必殺時，觸發\"清除我方HP最低者的受到傷害增加、防禦減傷減少、被回復量減少效果\"`
            },
            {
                "name": `<:detail_passive_nr:1041116863029067867> 墜落人妻(普通調教道具↑↑) (3潛)`,
                "value": `進行派遣時，少量提升普通調教道具雙倍獲得機率Lv2(全域效果) `
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (6潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/862655188141604885.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'marlene': {
        "type": "rich",
        "title": `美人魚 瑪蓮 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_water:933339803087421523> <:class_healer:933339563127078922>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,330,696 | ATK：563,512`
            },
            {
                "name": `<:detail_skill:933339968967933963> 療愈之歌聲`,
                "value": `以攻擊力165/188/211/234/257％對我方全體進行治療，並以66%機率使目標睡眠2回合，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 回復音符`,
                "value": `以攻擊力50％對我方全體進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 鼓舞曲`,
                "value": `我方全體免疫睡眠、受到傷害減少10% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 自癒力`,
                "value": `被攻擊時，有15%機率觸發\"以攻擊力100％對自身進行治療\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 癒合音符`,
                "value": `使自身進行治療時回復量增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 歌唱時間`,
                "value": `每經過4回合，觸發\"使我方全體被治療時回復量增加20%(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive_nr:1041116863029067867> Happy Ending(購買許可↑↑) (3潛)`,
                "value": `進行派遣時，少量提升購買許可雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (6潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957584990865080351.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'minayomi': {
        "type": "rich",
        "title": `劍聖 神無雪 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,851,387 | ATK：862,181`
            },
            {
                "name": `<:detail_skill:933339968967933963> 神無二刀流。滅天一擊`,
                "value": `以攻擊力265/298/331/364/397％對目標造成傷害，並造成“受到傷害增加10%(最多3層)效果，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 縱斬`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 神技。弱點見破`,
                "value": `每Wave的第1回合，觸發\"使目標受到傷害增加30%(50回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 神無流。追斬`,
                "value": `普攻時，觸發\"以攻擊力30%對目標進行追擊“效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 神無流。裂鐵`,
                "value": `攻擊時，觸發\"使目標受到傷害增加5%(最多5層)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 豪。氣。萬。千`,
                "value": `攻擊時，觸發\"使自身攻擊力增加6%(最多5層)\"效果 `
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 普攻傷害+ (6潛)`,
                "value": `使自身普攻傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/895195995644784652.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'lana': {
        "type": "rich",
        "title": `矮人王 蘭兒 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_attacker:933339400916578344>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,385,392 | ATK：764,304`
            },
            {
                "name": `<:detail_skill:933339968967933963> 躍空斷裂破`,
                "value": `使目標解除防禦狀態，再以攻擊力569/663/756/850/944%對目標造成傷害，CD: 6`
            },
            {
                "name": `<:detail_attack:933340014379667457> 跳斬`,
                "value": `以攻擊力100%對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 矮人王的氣勢`,
                "value": `使我方全體攻擊力增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 力量儲存`,
                "value": `普攻時，觸發\"使自身攻擊力傷害增加2.5%(6回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 屏氣凝神`,
                "value": `每經過1回合，觸發\"使自身攻擊力傷害增加5%(6回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 巨斧破龍的幻光`,
                "value": `每經過6回合，觸發\"使自身攻擊力增加50%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436463820810.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'juneau': {
        "type": "rich",
        "title": `大將軍 朱諾安 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_dark:933339859559530506> <:class_attacker:933339400916578344>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,077,368 | ATK：798,849`
            },
            {
                "name": `<:detail_skill:933339968967933963> 攻守一體。迅突長刺`,
                "value": `使自身獲得\"攻擊力增加15%、受到傷害減少10%(3回合) [4絆 (4回合)]\"效果，再以攻擊力400/460/520/520/520%對目標造成傷害，CD: 5 [5絆 CD: 4]`
            },
            {
                "name": `<:detail_attack:933340014379667457> 突刺`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 平等之劍`,
                "value": `使我方全體屬性相剋增減傷效果減少100%、攻擊力增加10%、受到傷害減少7.5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻守兼備`,
                "value": `普攻時，觸發\"使自身攻擊力增加5%(2回合)、受到傷害減少3.3%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 帝國劍術`,
                "value": `使自身普攻傷害增加30%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 法斯帝國齊劍戰法`,
                "value": `必殺時，觸發\"使自身以外的隊員攻擊力增加15%、受到傷害減少10%(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/862655188540063754.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'ritsuki': {
        "type": "rich",
        "title": `女忍者 凜月 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_wind:933339803653644358> <:class_attacker:933339400916578344>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,874,417 | ATK：854,984`
            },
            {
                "name": `<:detail_skill:933339968967933963> 忍法。苦無散破`,
                "value": `以攻擊力133/149/166/182/199％對敵全體造成傷害，並造成\"受到傷害增加15%(1回合)\"效果，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 散射`,
                "value": `以攻擊力50％對敵全體造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 速攻忍法。疾`,
                "value": `第1回合時，觸發\"使我方全體當前必殺技CD減少4回合\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 即效毒藥`,
                "value": `普攻時，追加技能\"以攻擊力20％對敵全體進行追擊\"`
            },
            {
                "name": `<:detail_passive:933340075910131732> 專注忍法。一葉`,
                "value": `第1回合時，觸發\"使自身攻擊力增加20%(4回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 先手忍法。蝕甲`,
                "value": `每Wave的第1回合，觸發”使敵全體受到傷害增加20%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 普攻傷害+ (6潛)`,
                "value": `使自身普攻傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436838817881.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'mesmiia': {
        "type": "rich",
        "title": `蛇女之后 梅絲米奈雅 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_obstructer:933339487084359740>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,183,881 | ATK：813,242`
            },
            {
                "name": `<:detail_skill:933339968967933963> 蛇身纏繞猛咬`,
                "value": `以攻擊力330/376/422/422/422％對目標造成傷害，再以100%機率使目標麻痺1回合，但也使目標被麻痺機率減少25/25/25/20/20%(25回合)，CD: 4 [5絆 CD: 3]`
            },
            {
                "name": `<:detail_attack:933340014379667457> 咬擊`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 情熱之舞`,
                "value": `使我方全體火屬性角色攻擊力增加35%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 梅絲的咬擊`,
                "value": `普攻時，觸發\"使目標受到普攻傷害增加7.5%(2回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 凱蒂的咬擊`,
                "value": `必殺時，觸發\"使目標受到必殺傷害增加15%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 梅絲、凱蒂，一起上！`,
                "value": `攻擊時，觸發\"使目標受到普攻傷害增加2%(最多10層)、受到必殺傷害增1.5%(最多10層)\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 普攻傷害+ (6潛)`,
                "value": `使自身普攻傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202437005279263.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'chizuru': {
        "type": "rich",
        "title": `復生公主 千鶴 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_attacker:933339400916578344>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,101,837 | ATK：834,833`
            },
            {
                "name": `<:detail_skill:933339968967933963> 千鶴的全力一擊！`,
                "value": `使目標受到風屬性傷害增加12/12/12/15/18%(最多2層)，再以攻擊力330/376/422/422/422%對目標造成傷害，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 正拳`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 超級千鶴！`,
                "value": `使自身攻擊力增加90%、普攻傷害增加45%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 不死肉體`,
                "value": `使自身受到傷害減少15%，但受到火屬性傷害增加30%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 防禦加速`,
                "value": `防禦時，觸發\"使自身當前必殺技CD減少1回合\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 烈風鼓舞`,
                "value": `必殺時，觸發\"使我方全體風屬性角色攻擊力增加15%(最多2層)\"效果`
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
            "url": `https://cdn.discordapp.com/emojis/856202436476534785.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'f-baal': {
        "type": "rich",
        "title": `祭典狂歡 巴爾 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_attacker:933339400916578344>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,061,535 | ATK：844,908`
            },
            {
                "name": `<:detail_skill:933339968967933963> 烈日祭典盛宴`,
                "value": `使自身攻擊力增加25/25/25/35/35%(3/3/3/3/4回合)，再以攻擊力165/188/211/211/211％對敵全體造成傷害，CD: 4 [5絆 CD: 3]`
            },
            {
                "name": `<:detail_attack:933340014379667457> 平民美食攻擊`,
                "value": `以攻擊力50％對敵全體造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 慶典魔王的氣勢`,
                "value": `第1回合時，觸發\"使自身攻擊力增加35%(4回合)\"效果；自身普攻傷害增加150%，但自身以外的隊員造成傷害減少15%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 想賺錢就得有行動力`,
                "value": `自身HP低於99%時，發動\"使自身攻擊力增加17.5%\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 痛感帶來愉悅`,
                "value": `自身HP低於99%時，發動\"使自身普攻傷害增加50%\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 最高境界是自攻自受`,
                "value": `使自身每回合以自身最大HP7.5％進行治療；第1回合＆每經過1回合時，觸發\"以自身當前HP1.5％對自身造成傷害\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 普攻傷害+ (6潛)`,
                "value": `使自身普攻傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/929765145981366282.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'b-satan': {
        "type": "rich",
        "title": `花嫁 撒旦 ★★★ (削弱前)`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_attacker:933339400916578344>`,
        "color": 0xC390FF,
        "fields": [
            {
            "name": `<:detail_skill:933339968967933963> 奈落之花`,
            "value": `以自身攻擊力490/568/646/724/802％對目標造成傷害，CD: 5 `
            },
            {
            "name": `<:detail_attack:933340014379667457> 落花爪`,
            "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
            "name": `<:detail_leader:933339992732876811> 純粹的力量`,
            "value": `我方全體HP最大值增加15%\n每經過5回合，觸發「使我方全體攻擊力增加150%(3回合)」\n第1回合時，觸發「除自身以外我方角色獲得《絕對服從》」\n \n《絕對服從》\n攻擊時，觸發「使目標受到闇屬性傷害增加1%(最多20層)」(50回合)\n攻擊時，觸發「以自身攻擊力30％使我方站位1角色攻擊力增加(1回合)」(50回合)`
            },
            {
            "name": `<:detail_passive:933340075910131732> 無垢嫁衣`,
            "value": `普攻時，觸發「使自身必殺傷害增加8%(最多5層)」 \n必殺時，觸發「使自身普攻傷害增加80%(最多1層)」 `
            },
            {
            "name": `<:detail_passive:933340075910131732> 苦痛歡愉`,
            "value": `攻擊時，觸發「使目標受到闇屬性傷害增加4%(最多5層)」\n防禦時，觸發「使自身造成傷害增加40%(2回合)」`
            },
            {
            "name": `<:detail_passive:933340075910131732> 真魔之力`,
            "value": `攻擊時，觸發「使我方全體造成傷害增加3%(最多10層)」`
            },
            {
            "name": `<:detail_passive:933340075910131732> 必殺+ (6潛)`,
            "value": `使自身必殺技傷害增加10%`
            },
            {
            "name": `<:detail_passive:933340075910131732> 免疫沉默 (12潛)`,
            "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/943378431427633222.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'e-satan': {
        "type": "rich",
        "title": `復活兔 撒旦 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_obstructer:933339487084359740>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,947,106 | ATK：522,490`
            },
            {
                "name": `<:detail_skill:933339968967933963> 殺意誘惑`,
                "value": `使自身獲得嘲諷(1回合)並變為防禦狀態且攻擊力增加60/80/100/100/100%(1回合)、被攻擊時，觸發\"以攻擊力30/30/30/40/50％對自身進行治療\"效果(1回合)，但防禦減傷效果減少25%(1回合)，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 撕裂`,
                "value": `以攻擊力50％對目標造成傷害，並使自身攻擊力增加25%(2回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 血月的災厄`,
                "value": `使自身必殺技最大CD減少1回合，攻擊力增加33%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 痛楚與狂喜`,
                "value": `被攻擊時，觸發\"使自身攻擊力增加2%(最多25層)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 縱慾廝殺`,
                "value": `使自身免疫必殺技CD變動效果；被攻擊時，觸發\"以攻擊力100％對目標進行反擊\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 殺戮衝動`,
                "value": `必殺時，觸發\"自身造成傷害增加33%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 回復量+ (6潛)`,
                "value": `使自身被治療時回復量增加15%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/865993275927035914.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    's-ks8': {
        "type": "rich",
        "title": `夏日 KS-VIII ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_obstructer:933339487084359740>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,346,530 | ATK：852,105`
            },
            {
                "name": `<:detail_skill:933339968967933963> 出力120%。殺球`,
                "value": `以攻擊力265/298/331/331/364％對目標造成傷害，並使目標必殺技當前CD增加1/1/1/1/2回合、造成傷害減少15/15/15/20/20%(1回合)、受到傷害增加15/15/15/20/20%(3回合)，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 排球直擊`,
                "value": `以攻擊力100%對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 值得信賴的海灘保鑣`,
                "value": `每Wave的第1回合，觸發\"使目標受到必殺技傷害增加50%(50回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 弱點分析`,
                "value": `使自身必殺技傷害增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 高速迷你魚雷`,
                "value": `每經過3回合，觸發\"自身攻擊時，觸發以自身攻擊力40％對目標進行3次追擊(1回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 捕魚用音爆彈`,
                "value": `每經過4回合，觸發\"自身攻擊時，觸發以自身攻擊力50％對敵方全體進行4次追擊(1回合)\"效果`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 攻擊力+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1047027074151493662.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    's-noel': {
        "type": "rich",
        "title": `夏日 黑白諾艾莉 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_supporter:933339516788408420>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,060,456 | ATK：702,411`
            },
            {
                "name": `<:detail_skill:933339968967933963> 閃亮閃亮★諾艾莉光線`,
                "value": `以自身攻擊力40/45/45/50/55%使我方全體妨礙者攻擊力增加(1/1/2/2/2回合)，並使我方全體妨礙者當前必殺技CD減少1回合，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 盡情歌唱`,
                "value": `以自身攻擊力40％使我方全體妨礙者攻擊力增加(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 夏日風情♡海灘閃耀之星`,
                "value": `使我方全體HP增加20%、攻擊力增加40%\n使自身普攻時，觸發「以自身攻擊力40％使我方全體妨礙者攻擊力增加(1回合)」\n使自身攻擊時，觸發「以自身攻擊力50％對自身、我方全體妨礙者、我方全體守護者進行治療」\n使自身必殺時，觸發「以自身攻擊力25％使我方全體妨礙者攻擊力增加(10回合)」\n使我方全體妨礙者獲得《偶像應援團！》 \n\n《偶像應援團！》 \n自身攻擊時，觸發「使我方站位1的隊員攻擊力增加25%(4回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 如流星般墜落~♪`,
                "value": `必殺時，觸發「以自身最大血量50％使我方全體獲得護盾(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 舞台上的超級新星★`,
                "value": `第一回合時，觸發「使我方全體妨礙者必殺技傷害增加35%(50回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 華麗★閃亮★爆誕★`,
                "value": `攻擊時，觸發「以自身攻擊力10%使我方全體攻擊力增加(1回合)」\n第一回合時，觸發「使我方全體妨礙者造成傷害增加20%(50回合)」`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/983334725437489222.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'h-britney': {
        "type": "rich",
        "title": `小惡魔 布蘭妮 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,168,048 | ATK：901,044`
            },
            {
                "name": `<:detail_skill:933339968967933963> 本天才特製萬聖魔力砲`,
                "value": `以自身攻擊力330/376%對目標造成傷害，使目標受到小惡魔布蘭妮傷害增加10/10%(最多2層)，CD: 4 \n\n3絆：使目標受到小惡魔布蘭妮傷害增加10/15/15%(最多2層)，以自身攻擊力422/422/468%對目標造成傷害，CD: 4\n`
            },
            {
                "name": `<:detail_attack:933340014379667457> 本軍師親自出手`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 將魔力分本天才一點`,
                "value": `使我方全體攻擊力增加40%\n使自身必殺CD停止倒數，並使必殺技傷害增加100%\n使除了自身外的非守護者防禦時，觸發\"使小惡魔布蘭妮當前必殺技CD減少2回合並免疫必殺技CD變動效果(1回合)且以自身攻擊力20％增加小惡魔布蘭妮的攻擊力(2回合)，但也使自身必殺技CD增加1回合\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 魅魔天賦`,
                "value": `普攻時，觸發\"使必殺技傷害增加10%(4回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 吸魔，但是會漏`,
                "value": `必殺時，觸發\"使自身攻擊力增加50%該效果會在4回合內遞減\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 魅魔軍師的秘策`,
                "value": `使自身造成傷害增加35%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 必殺傷害+ (6潛)`,
                "value": `使自身必殺技傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/902817412360065054.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'miru': {
        "type": "rich",
        "title": `貓娘Vtuber 杏仁咪嚕 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,992,445 | ATK：865,060`
            },
            {
                "name": `<:detail_skill:933339968967933963> 發現破綻！`,
                "value": `使目標受到必殺技傷害增加10/15/20/25/35%(1回合)，再以自身攻擊力265/298/331/364/397%對目標造成傷害，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 翻滾`,
                "value": `自身獲得受到傷害減少45%(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 人被殺，還沒死`,
                "value": `我方全體最大HP增加40%\n我方全體被治療量增加80%\n自身必殺技最大CD減少1回合 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 天賦都點翻滾`,
                "value": `防禦減傷效果減少25% \n普攻時，觸發「使自身必殺技傷害增加10%(7回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 超級留言`,
                "value": `攻擊時，觸發「使自身攻擊力增加20%(3回合)」\n必殺時，觸發「使自身獲得《實況嗨起來》」\n \n《實況嗨起來》 \n「觀看人數：1000」(最多20層)\n「抖內100000 $」 (20回合) \n造成傷害增加7%(最多5層) `
            },
            {
                "name": `<:detail_passive:933340075910131732> 外鄉人戰法`,
                "value": `必殺時，觸發「以自身攻擊力99.9％對目標造成傷害」 \n被攻擊時，觸發「使自身受到傷害減少15%(1回合)」 `
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 必殺+ (6潛)`,
                "value": `使自身必殺技傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/950349904197328907.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
}

const nanascript = randomReply[Math.floor(Math.random() * randomReply.length)];

module.exports = {
    data: {
        name: 'adjust_1'
    },
    async execute(interaction, client) {
        const character = data[interaction.values[0]]
        const embed = new EmbedBuilder()
            .setColor(character.color)
            .setTitle(character.title)
            .setDescription(character.description)
            .setThumbnail(character.thumbnail.url)
            .addFields(character.fields)
        await interaction.reply({
            content: `<@!${interaction.user.id}> ${nanascript}`,
            embeds: [embed],
            ephemeral: true,
        })
    }
}