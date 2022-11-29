const { EmbedBuilder } = require("@discordjs/builders");
const randomReply = require('../replyScript/randomReply.json');

const data = {
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
                "value": `使我方站位3的隊員攻擊力增加30/35/40/45/50%(1回合)，再以攻擊力100％對我方全體進行治療、我方站位3的隊員當前必殺技CD減少4回合\"效果，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 治癒術`,
                "value": `以攻擊力75％對我方全體進行治療`
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
    'leona': {
        "type": "rich",
        "title": `聖騎士長 雷歐娜 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_water:933339803087421523> <:class_protector:933339611080572948>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,387,314 | ATK：561,353`,
            },
            {
                "name": `<:detail_skill:933339968967933963> 聖光守護`,
                "value": `以最大HP37.9/42.6/47.3/52.0/56.7％對自身施放護盾(1回合)，並獲得嘲諷效果 (1回合)且變為防禦狀態，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 斬擊`,
                "value": `以攻擊力50％對目標造成傷害，並以最大HP7.5％對自身施放護盾(2回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 身先士卒的聖騎士長`,
                "value": `使雷歐娜最大HP增加50%，必殺技CD減少1回合 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 無懼之心`,
                "value": `使自身受到傷害減少10% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 永不退縮`,
                "value": `最大HP增加15%、被治療時回復量增加15%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 聖光騎士團之盾`,
                "value": `當前HP小於25％時，發動\"受到傷害減少75%\"效果 `
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
            "url": `https://cdn.discordapp.com/emojis/856202438160023582.webp?size=96&quality=lossless`,
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
                "value": `以攻擊力95/110/125/140/155％對我方全體進行治療，再以攻擊力120/138/156/174/192％對我方全體施放護盾(2回合)，CD: 5 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 守護術`,
                "value": `以攻擊力50％對我方全體施放護盾(1回合)`
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
                "value": `使敵全體獲得\"受到傷害增加20%(1回合)\"效果，再以攻擊力133/149/166/182/199％對敵全體造成傷害，CD: 3 `
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
                "value": `普攻時，追加技能\"以攻擊力33％對敵全體進行追擊\"`
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
                "value": `以攻擊力266/282/298/315/331％對目標造成傷害，並造成“受到傷害增加10%(最多3層)效果，CD: 3`
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
    'shizuka': {
        "type": "rich",
        "title": `妖狐 靜 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_water:933339803087421523> <:class_obstructer:933339487084359740>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,117,670 | ATK：788,773`
            },
            {
                "name": `<:detail_skill:933339968967933963> 陰陽術。封魔`,
                "value": `以攻擊力330/376/422/468/514％對目標造成傷害，並以50%機率使目標沉默2回合效果，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 咒術`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 抗魔結界`,
                "value": `使我方全體免疫沉默、攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 縛行之術`,
                "value": `攻擊時，觸發\"使目標普攻傷害減少15%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 五行流止`,
                "value": `攻擊時，觸發\"使目標被治療時被回復量減少50%(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 狐妖術。幻惑`,
                "value": `每經過3回合，觸發\"使目標攻擊力減少15%、受到傷害增加15%(1回合)\"效果 `
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
            "url": `https://cdn.discordapp.com/emojis/856202436783243275.webp?size=96&quality=lossless`,
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
                "value": `使我方全體屬性相剋增減傷效果減少100%、攻擊力增加10%、受到傷害減少7.5%、最大HP增加15%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻守兼備`,
                "value": `普攻時，觸發\"使自身攻擊力增加5%(3回合)、受到傷害減少3.3%(2回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 帝國劍術`,
                "value": `使自身普攻傷害增加40%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 法斯帝國齊劍戰法`,
                "value": `必殺時，觸發\"使自身以外的隊員攻擊力增加15%、受到傷害減少10%(4回合)\"效果 `
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
    'britney': {
        "type": "rich",
        "title": `天才女軍師 布蘭妮 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_light:933339825933791312> <:class_obstructer:933339487084359740>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,247,213 | ATK：757,107`
            },
            {
                "name": `<:detail_skill:933339968967933963> 第108計。全陣破敵`,
                "value": `以攻擊力133/149/166/166/166％對敵全體造成傷害並造成\"必殺技當前CD增加1回合、攻擊力減少15/15/15/20/20%(1回合)、受到必殺技傷害增加15/15/15/15/20%(1回合)\"效果，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 魔光刃`,
                "value": `以攻擊力50％對敵全體造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 第26計。波狀進攻`,
                "value": `使自身獲得\"每經過3回合，使我方全體攻擊力增加50%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 見破`,
                "value": `普攻時，觸發\"使敵全體攻擊力減少5%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 續戰最佳化配置`,
                "value": `攻擊時，觸發\"使我方全體被治療時回復量增加22.5%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 第27計。尖波追擊`,
                "value": `每經過3回合，觸發\"使敵全體受到傷害增加25%(1回合)\"效果 `
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
            "url": `https://cdn.discordapp.com/emojis/856202435541991454.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'nafrala': {
        "type": "rich",
        "title": `史萊姆女王 娜芙菈菈 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_wind:933339803653644358> <:class_protector:933339611080572948>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,472,115 | ATK：549,838`
            },
            {
                "name": `<:detail_skill:933339968967933963> 濕濕黏黏滑滑`,
                "value": `使敵全體攻擊力減少10/12.5/15/15/15%(1回合) [3絆 (2回合)]，每回合以自身攻擊力200％回復自身(2回合)，CD: 5 [5絆 CD: 4]`
            },
            {
                "name": `<:detail_attack:933340014379667457> 黏液攻擊`,
                "value": `使目標攻擊力減少20%(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 我是善良的史萊姆唷`,
                "value": `使自身最大HP增加30%；每經過4回合，觸發\"使目標受到傷害增加15%(2回合)、使自身被治療時回復量增加30%(2 回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 能量果凍`,
                "value": `攻擊時，觸發\"以自身攻擊力100％對我方HP最低者進行治療“效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 引人注目`,
                "value": `使自身防禦減傷效果增加10%；每經過4回合，觸發\"使自身獲得嘲諷(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 史萊姆的韌性`,
                "value": `被攻擊時，觸發\"使自身受到傷害減少15%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 回復量+ (6潛)`,
                "value": `使自身被治療時回復量增加15%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202437035032616.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'tyrella': {
        "type": "rich",
        "title": `魔法少女 托特拉 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_light:933339825933791312> <:class_attacker:933339400916578344>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,991,006 | ATK：821,878`
            },
            {
                "name": `<:detail_skill:933339968967933963> 必殺。魔法少女閃光！`,
                "value": `使目標受到光屬性傷害增加30%(最多1層)，並以自身攻擊力445/514/583/652/721%對目標造成傷害，CD: 5`
            },
            {
                "name": `<:detail_attack:933340014379667457> 魔法少女旋風劍！`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 愛與希望之光！`,
                "value": `使我方全體光屬性隊員攻擊力增加30%，並使自身必殺傷害增加25% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 光之制裁！`,
                "value": `必殺時，以50%機率觸發\"使自身當前必殺技CD減少2回合\"效果(1回合)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 正義是不會屈服的！`,
                "value": `必殺時，觸發\"使自身必殺傷害增加40%(4回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔法少女的光環！`,
                "value": `必殺時，觸發\"使敵全體受到光屬性傷害增加20%(4回合)\"`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 必殺+ (6潛)`,
                "value": `使自身必殺傷害增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1030095216113369118.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'teresa': {
        "type": "rich",
        "title": `地方媽媽 提爾絲 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_fire:933339778559131679> <:class_protector:933339611080572948>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,677,945 | ATK：552,717`
            },
            {
                "name": `<:detail_skill:933339968967933963> 啊啦啊啦`,
                "value": `使自身進入防禦狀態，使我方全體獲得受到傷害減少50%(1回合)，並使我方全體獲得\"被攻擊時，觸發\"使自身受到傷害增加25/22.5/20/17.5/15%(1回合)\"，CD:4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 蹄擊`,
                "value": `對當前敵對目標造成自身攻擊力100％的傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 媽媽來保護大家`,
                "value": `使我方全體最大HP增加50%，使我方全體護盾效果減少50%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 膠原蛋白`,
                "value": `防禦時，觸發\"使自身回復最大HP10%\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 母性光輝`,
                "value": `被攻擊時，觸發\"使我方全體受到普攻傷害減少2.5%(最多4層)\"`
            },
            {
                "name": `<:detail_passive:933340075910131732> 精力旺盛`,
                "value": `使自身最大HP增加30%`
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
            "url": `https://cdn.discordapp.com/emojis/885553652545228810.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'pulicia': {
        "type": "rich",
        "title": `最後的銀龍 普莉希拉 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_dark:933339859559530506><:class_obstructer:933339487084359740>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,011,157 | ATK：816,121`
            },
            {
                "name": `<:detail_skill:933339968967933963> 封龍之力`,
                "value": `以攻擊力330/376/422/468/514％對目標造成傷害，並使目標造成普攻傷害減少60/80/100/100/200%(1回合) [4絆 (效果會在3回合內逐漸減少)]，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 銀龍之力`,
                "value": `以自身100％攻擊力對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 封印儀式`,
                "value": `使我方全體獲得\"攻擊時，觸發\"使目標造成必殺傷害減少10%(1回合)\"效果\" `
            },
            {
                "name": `<:detail_passive:933340075910131732> 第一封印`,
                "value": `普攻時，觸發\"使目標造成普攻傷害減少20%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 第二封印`,
                "value": `攻擊時，觸發\"使目標攻擊力減少15%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 最終封印`,
                "value": `每經過5回合，觸發\"攻擊時，觸發\"使目標造成傷害減少12.5%(最多2層)\"效果(1回合)\"效果 `
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
            "url": `https://cdn.discordapp.com/emojis/892790161023328286.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'janelle': {
        "type": "rich",
        "title": `刺針 嘉維爾 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_wind:933339803653644358> <:class_attacker:933339400916578344>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,189,638 | ATK：771,501`
            },
            {
                "name": `<:detail_skill:933339968967933963> 精準刺擊`,
                "value": `以自身攻擊力265/298/331/369％對目標造成傷害，使目標防禦減傷效果減少15%(3回合)，CD: 3\n\n5絆：使目標防禦減傷效果減少15%(3回合)，以自身攻擊力397％對目標造成傷害，CD: 3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 突刺`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 超天然突擊`,
                "value": `使自身攻擊力增加50%，並獲得\"攻擊時，觸發\"解除目標嘲諷\"效果\"`
            },
            {
                "name": `<:detail_passive:933340075910131732> 發現弱點`,
                "value": `必殺時，觸發\"使目標受到刺針嘉維爾傷害增加15%(最多3層)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 正面突破`,
                "value": `第1回合時，觸發\"使我方全體對防禦目標傷害增加100%(50回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 憨憨笑靨`,
                "value": `使自身攻擊力增加30%`
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
            "url": `https://cdn.discordapp.com/emojis/898520473485312050.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'tanocia': {
        "type": "rich",
        "title": `精靈舞者 塔諾西雅 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_light:933339825933791312> <:class_supporter:933339516788408420>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,062,974 | ATK：803,167`
            },
            {
                "name": `<:detail_skill:933339968967933963> 神祀舞姬`,
                "value": `使我方全體攻擊力增加1.5/1.75/2/2.25/2.5%(最多10層)，以自身攻擊力25％使我方全體攻擊力增加(1回合)，並以自身攻擊力60/70/80/90/100％對我方全體進行治療，CD:3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 誘人舞姿`,
                "value": `以自身攻擊力25％使我方全體攻擊力增加(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 純粹的舞者`,
                "value": `自身攻擊力增加50%，我方全體最大HP增加10% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 窈窕淑女`,
                "value": `普攻時，觸發「使我方全體必殺傷害增加2%(最多5層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 一顧傾人城`,
                "value": `必殺時，觸發「使我方全體普攻傷害增加10%(最多2層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 再顧傾人國`,
                "value": `必殺時，觸發「使我方全體攻擊力增加10%(最多3層)」`
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
            "url": `https://cdn.discordapp.com/emojis/971961423594913802.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'yingying': {
        "type": "rich",
        "title": `公會看板娘 小螢 ★★`,
        "description": `<:rarity_sr:933339169105772585> <:element_water:933339803087421523> <:class_healer:933339563127078922>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,270,243 | ATK：791,652`
            },
            {
                "name": `<:detail_skill:933339968967933963> 我最喜歡我的工作了！`,
                "value": `使自身攻擊力增加20%(4回合)，再以攻擊力80/85/90/95/100％對我方全體進行治療，並給予我方全體「每回合以攻擊力40/40/50/50/60％進行治療(4回合)」，CD: 5`
            },
            {
                "name": `<:detail_attack:933340014379667457> 今天也辛苦了~`,
                "value": `以攻擊力75％對我方全體進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 歡迎來到冒險者公會！`,
                "value": `使我方全體攻擊力增加30%\n使我方全體HP增加30%\n使我方全體被治療時回復量增加30%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 這是今天可以接取的任務~`,
                "value": `第一回合時，觸發「使自身以外所有隊員普攻傷害增加20%(最多1層)、必殺技傷害增加10%(最多1層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 請各位務必小心！`,
                "value": `自身受到傷害減少10%\n普攻時，觸發「使自身造成治療增加10%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 我會成為大家的後盾的！`,
                "value": `使自身必殺技最大CD減少1回合\n自身造成持續型治療增加10%\n攻擊時，觸發「使我方全體普攻傷害增加4%(5回合)」`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 持續治療+ (6潛)`,
                "value": `使自身造成持續型治療增加10%`
            },
            {
                "name": `<:detail_passive2:1041115919356801136> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1029055774149849238.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
}

const nanascript = randomReply[Math.floor(Math.random() * randomReply.length)];

module.exports = {
    data: {
        name: 'sr_1'
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