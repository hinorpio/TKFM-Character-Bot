const { EmbedBuilder } = require("@discordjs/builders");
const randomReply = require('../replyScript/randomReply.json');

const data = {
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
                "value": `以攻擊力165％對我方HP最低者進行治療，並獲得\"每回合以自身攻擊力96.9/111.3/125.6/140/154.4％進行治療(4回合)、\"受到傷害減少15%(4回合)\"效果，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 治療`,
                "value": `以攻擊力150%對我方HP最低者進行治療`
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
                "name": `<:detail_passive:933340075910131732> 墜落人妻(普通調教道具↑↑) (3潛)`,
                "value": `進行派遣時，少量提升普通調教道具雙倍獲得機率Lv2(全域效果) `
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (6潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/862655188141604885.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'nana': {
        "type": "rich",
        "title": `貓妖 娜娜 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_wind:933339803653644358> <:class_attacker:933339400916578344>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,083,484 | ATK：630,443`
            },
            {
                "name": `<:detail_skill:933339968967933963> 貓體術。疾風爪`,
                "value": `以攻擊力265/298/331/364/397％對目標造成傷害，並造成“受到傷害增加10%(1回合)\"效果，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 抓擊`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 御風之力`,
                "value": `使我方風屬性角色攻擊力增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 深刻爪痕`,
                "value": `攻擊時，有50%機率觸發\"使目標受到傷害增加10%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 亢奮狀態`,
                "value": `必殺時，觸發\"使自身普攻傷害增加20%(3回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 貓體術。二連擊喵`,
                "value": `普攻時，觸發\"以攻擊力50％對目標造成傷害\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 貓咪直覺(空手而歸↓↓) (3潛)`,
                "value": `進行派遣時，少量降低空手而歸機率(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (6潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/859792644385013780.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'iris': {
        "type": "rich",
        "title": `龍女 伊維絲 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,730,120 | ATK：481,468`
            },
            {
                "name": `<:detail_skill:933339968967933963> 龍炎`,
                "value": `以攻擊力200％對敵全體造成傷害，並造成\"以攻擊力37.5/43.1/48.8/54.4/60.0％每回合造成傷害(20回合)\"效果，CD: 5 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 炎息`,
                "value": `以攻擊力50％對敵全體造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 神炎庇護`,
                "value": `使我方火屬性角色被風屬性攻擊時受到傷害減少12.5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 龍人族之力`,
                "value": `攻擊時，觸發\"使自身攻擊力增加2%(最多15層)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 龍魂`,
                "value": `使自身必殺技最大CD減少1回合`
            },
            {
                "name": `<:detail_passive:933340075910131732> 真龍解放`,
                "value": `必殺時，觸發\"使自身攻擊力增加20%(最多5層)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 活潑開朗(經驗藥水↑↑) (3潛)`,
                "value": `進行派遣時，少量提升經驗藥水雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (6潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202437022711819.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'dora': {
        "type": "rich",
        "title": `犬人族 朵拉 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_wind:933339803653644358> <:class_protector:933339611080572948>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,140,340 | ATK：417,776`
            },
            {
                "name": `<:detail_skill:933339968967933963> 忠心守護`,
                "value": `使自身受到傷害減少10/12.5/15/17.5/20%(2回合)、嘲諷效果(2回合)，並變為防禦狀態，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 爪擊`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 靜水守護`,
                "value": `使我方風屬性角色被水屬性攻擊時受到傷害減少12.5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 知恩圖報`,
                "value": `被治療時，觸發\"使自身獲得每回合以攻擊力25%進行治療(2回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 簡單快樂`,
                "value": `使自身被治療時回復量增加12.5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 感恩的心`,
                "value": `被治療時，有50%機率觸發\"使自身當前必殺技CD減少1回合\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 嗅覺敏銳(空手而歸↓↓) (3潛)`,
                "value": `進行派遣時，少量降低空手而歸機率(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (6潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957583597374677022.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'sable': {
        "type": "rich",
        "title": `魅魔 撤芭絲 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_dark:933339859559530506> <:class_obstructer:933339487084359740>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,229,220 | ATK：589,421`
            },
            {
                "name": `<:detail_skill:933339968967933963> 魅惑索魂`,
                "value": `以攻擊力330/376/422/468/514％對目標造成傷害，並以75%機率使目標沉默1回合，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 鞭笞`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 擁抱黑暗`,
                "value": `使我方闇屬性角色被光屬性攻擊時受到傷害減少50% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 色欲湧現`,
                "value": `被攻擊時，有25%機率觸發\"使自身攻擊力增加15%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 徒手服侍技巧`,
                "value": `使自身普攻傷害增加12.5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 撤芭絲的榨取秘術`,
                "value": `每經過4回合，觸發\"使自身攻擊力增加30%(1回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 淫靡本性(稀有&普通調教道具↑) (3潛)`,
                "value": `進行派遣時，微量提升普通調教道具雙倍獲得機率Lv1，稀有調教道具雙倍獲得機率Lv1(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (6潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957584444003328071.webp?size=96&quality=lossless`,
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
                "value": `以攻擊力193.8/222.5/251.3/280/308.8％對我方全體進行治療，並以66%機率使目標睡眠2回合，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 回復音符`,
                "value": `以攻擊力75％對我方全體進行治療`
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
                "name": `<:detail_passive:933340075910131732> Happy Ending(購買許可↑↑) (3潛)`,
                "value": `進行派遣時，少量提升購買許可雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (6潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957584990865080351.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'yoi': {
        "type": "rich",
        "title": `流浪魔法師 尤依 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,075,928 | ATK：632,602`
            },
            {
                "name": `<:detail_skill:933339968967933963> 魔力爆裂`,
                "value": `以攻擊力330/353/373/399/422％對目標造成傷害，並使自身攻擊力增加10%(最多3層)，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 火球術`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 裂炎增幅術法陣`,
                "value": `使我方火屬性角色攻擊力增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔力詠動`,
                "value": `攻擊時，有25%機率觸發\"使自身增加攻擊力30%(2回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔力集中術式`,
                "value": `使自身必殺技傷害增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 時間折疊`,
                "value": `必殺時，有50%機率觸發\"使自身當前必殺技CD減少2回合\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 為了研究(強化素材↑↑) (3潛)`,
                "value": `進行派遣時，少量提升強化素材雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (6潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957585439068422234.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    "shiraka": {
        "type": "rich",
        "title": `暗黑精靈 索拉卡 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_dark:933339859559530506> <:class_obstructer:933339487084359740>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,200,073 | ATK：596,977`
            },
            {
                "name": `<:detail_skill:933339968967933963> 暗影之矢`,
                "value": `以攻擊力265/298/331/364/397％對目標造成傷害，並造成\"攻擊力減少10%(3回合)\"效果，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 普通攻擊`,
                "value": `以攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 暗黑妖精的祝福`,
                "value": `使我方闇屬性角色攻擊力增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 頑強抵抗`,
                "value": `普攻時，觸發\"使目標攻擊力減少5%(1回合)\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 致殘射擊`,
                "value": `必殺時，觸發\"使目標攻擊力減少5%(最多4層)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 妖精箭術`,
                "value": `使自身普攻傷害增加50%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 被虐體質(稀有調教道具↑↑) (3潛)`,
                "value": `進行派遣時，少量提升稀有調教道具雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (6潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957585939025264680.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    "panana": {
        "type": "rich",
        "title": `南瓜仙子 帕奈奈 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_dark:933339859559530506> <:class_healer:933339563127078922>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,288,594 | ATK：574,307`
            },
            {
                "name": `<:detail_skill:933339968967933963> 仙子魔法`,
                "value": `以自身攻擊力194/223/251/280/309％對我方全體進行治療，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 治療魔力`,
                "value": `以自身攻擊力75％對我方全體進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 闇之躍動`,
                "value": `使我方全體暗屬性角色攻擊力增加10%，最大HP增加10% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 不給糖就搗蛋`,
                "value": `普攻時，20％機率觸發\"以自身攻擊力35％對我方HP最低者進行治療\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 萬聖惡作劇！`,
                "value": `必殺時，20%機率觸發\"使自身攻擊力增加50%(3回合)\"效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 魔力回收~！`,
                "value": `普攻時，20%機率觸發\"使自身當前必殺技CD減少1回合\"效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 自慰套仙子(稀有調教道具↑↑) (3潛)`,
                "value": `進行派遣時，少量提升稀有調教道具雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (6潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/957587997153443850.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    "sophie": {
        "type": "rich",
        "title": `人馬女僕 蘇菲 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_water:933339803087421523> <:class_supporter:933339516788408420>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,299,389 | ATK：571,069`
            },
            {
                "name": `<:detail_skill:933339968967933963> 我…我用腳踢你喔！`,
                "value": `以自身攻擊力330/376/422/468/514％對目標造成傷害，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 加…加油`,
                "value": `使我方全體獲得攻擊力增加25%(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 身強體壯`,
                "value": `使自身最大HP增加40%、自身攻擊力增加40%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 茶泡不夠甜`,
                "value": `普攻時，以50%機率觸發「使我方全體獲得『攻擊力增加10%(1回合)』」效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 湯煮不夠甜`,
                "value": `攻擊時，以20%機率觸發「使自身攻擊力增加35%(2回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 米扛兩百樓`,
                "value": `使自身最大HP增加30%、攻擊力增加30%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 聖水湧泉(普通調教道具↑↑) (3潛)`,
                "value": `進行派遣時，少量提升普通調教道具雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (6潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/914060282748342283.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    "jolina": {
        "type": "rich",
        "title": `冷豔美醫 嘉莉娜 ★`,
        "description": `<:rarity_r:933339085639147551> <:element_fire:933339778559131679> <:class_healer:933339563127078922>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,319,900 | ATK：565,671`
            },
            {
                "name": `<:detail_skill:933339968967933963> 戰地療法`,
                "value": `以自身攻擊力165/188/211/234/257％對我方全體進行治療、並以自身攻擊力82.5/94/105.5/117/128.5％對我方當前HP最低者進行治療，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 應急處理`,
                "value": `以自身攻擊力75％對我方全體進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 前線醫官`,
                "value": `使自身造成治療增加50%、攻擊力增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 果決判斷`,
                "value": `普攻時，觸發「以自身攻擊力30％對我方HP最低者進行治療」效果 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 純熟手法`,
                "value": `使自身造成治療增加15%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 看慣生死`,
                "value": `每經過4回合，觸發「使自身攻擊力增加12%(最多3層)」效果`
            },
            {
                "name": `<:detail_passive:933340075910131732> 冰山美人(經驗藥水↑↑) (3潛)`,
                "value": `進行派遣時，少量提升經驗藥水雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (6潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/915842751940141056.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    "mia": {
        "type": "rich",
        "title": `怪盜 米雅 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_obstructer:933339487084359740>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,423,535 | ATK：541,922`
            },
            {
                "name": `<:detail_skill:933339968967933963> 怪盜的綱領`,
                "value": `使目標普攻傷害減少10/12/12/15/15%(3回合)、必殺技傷害減少10%(3回合)，再使自身普攻傷害增加10/12/12/15/15%(3回合)、必殺技傷害增加10%(3回合)，並以自身攻擊力265/298/331/364/397％對目標造成傷害，CD:3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 甩擊`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 翔風之心`,
                "value": `我方全體風屬性角色攻擊力增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 蘿蔔煙霧彈`,
                "value": `普攻時，觸發「使目標被治療時回復量減少25%(2回合)、使目標受到護盾效果減少15%(2回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 興奮狀態`,
                "value": `必殺時，觸發「使自身攻擊力增加20%(3回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 兔兔魔術`,
                "value": `普攻傷害增加40%、必殺技傷害增加20%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 好色本性(稀有調教道具↑↑) (3潛)`,
                "value": `進行派遣時，少量提升稀有調教道具雙倍獲得機率Lv2(全域效果)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (6潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/996211778126106756.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    }
}

const nanascript = randomReply[Math.floor(Math.random() * randomReply.length)];

module.exports = {
    data: {
        name: 'r_1'
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