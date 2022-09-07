const { EmbedBuilder } = require("@discordjs/builders");

const data = {
    'f-caesar': {
        "type": "rich",
        "title": `異界 凱薩 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_obstructer:933339487084359740>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,778,340 | ATK：755,668`
            },
            {
                "name": `<:detail_skill:933339968967933963> 讓余更盡興吧！`,
                "value": `以自身攻擊力330/376/422/468/514%及自身最大HP89/107/125/143/161％對目標造成傷害，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 魔力碾碎拳`,
                "value": `以自身攻擊力100%及自身最大HP50％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 魔王的頂端`,
                "value": `自身最大HP增加100%\n自身普攻傷害增加125%\n自身必殺傷害增加100%\n攻擊時，觸發「使目標造成傷害減少10%(1回合)」 \n攻擊時，觸發「使自身受到傷害減少10%(1回合)」 \n我方全體攻擊力增加40%\n我方全體造成傷害增加20%\n使自身以外的我方全體隊員獲得《臣服於王》 \n\n《臣服於王》\n防禦時、必殺時，觸發「使目標受到火、水、風、光、闇屬性傷害增加6%(2回合)」(50回合)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 面對魔王的絕望`,
                "value": `攻擊時，觸發「使目標被治療時回復量減少50%(2回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 面對魔王的恐懼`,
                "value": ` 必殺時，觸發「使自身造成傷害增加20%(最多2層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 凱薩之名`,
                "value": `第1回合，觸發「使敵方全體受到傷害增加20%(50回合)、 使敵方全體造成傷害減少10%(50回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 傷害+ (6潛)`,
                "value": `使自身造成傷害增加7.5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 完全免疫 (12潛)`,
                "value": `使自身免疫睡眠\n使自身免疫麻痺\n使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/958255717024935956.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'w-lulu': {
        "type": "rich",
        "title": `夢遊魔境 露露 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_attacker:933339400916578344>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,228,501 | ATK：883,771`
            },
            {
                "name": `<:detail_skill:933339968967933963> 下午茶同盟全員突擊`,
                "value": `以自身攻擊力330/376/422/468/514％對目標造成傷害，使我方全體攻擊者獲得「普攻時，追加技能『以自身攻擊力37.5/45/45/52.5/60％對目標造成傷害』(3/3/4/4/4回合)」，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 超級露露拳`,
                "value": `以攻擊力100%對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 魔境夢遊~下午茶同盟~`,
                "value": `第1回合時，觸發「使自身當前必殺技CD減少4回合」 \n自身必殺時，觸發 「《Shuffling》」\n使我方全體獲得「隊伍中至少有4名攻擊者時，發動《Four of a Kind》」 \n\n《Shuffling》\n 使我方全體攻擊者獲得「普攻時追加技能『以自身攻擊力37.5％對目標造成傷害』(4回合)」 \n\n《Four of a Kind》\n自身攻擊力增加70%\n自身普攻傷害增加100%\n自身受到傷害減少10% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 美好的願望`,
                "value": `必殺時，觸發「使我方全體普攻傷害增加30%(最多2層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 公主領導力(夢)`,
                "value": `第1回合時，觸發「使我方全體普攻傷害增加30%(50回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 下午茶同盟的野心`,
                "value": `必殺時，觸發「使我方全體造成傷害增加12.5%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 普攻傷害+ (6潛)`,
                "value": `普攻傷害增加10% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/964931570446250114.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'w-chizuru': {
        "type": "rich",
        "title": `夢遊魔境 千鶴 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_supporter:933339516788408420>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,235,698 | ATK：880,893`
            },
            {
                "name": `<:detail_skill:933339968967933963> 逆轉劇開演蹦~`,
                "value": `使自身攻擊力增加30/35/40/45/50%(1回合)，再以自身攻擊力30/30/35/35/40％使我方全體攻擊力增加(1回合)，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 兔兔應援~蹦❤️`,
                "value": `以自身攻擊力30％使我方全體攻擊力增加(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 千鶴兔兔要上了蹦~`,
                "value": `使我方全體獲得「隊伍中至少有3名攻擊者時，發動『《小兔子團結一心》』」 \n使自身獲得「隊伍中至少有3名攻擊者時，發動『《大家一起蹦》』」 \n每經過一回合，觸發「《蹦蹦跳》」\n\n《小兔子團結一心》\n必殺技傷害增加50%\n最大HP增加30% \n\n《大家一起蹦》 \n必殺時，觸發「使我方全體攻擊者當前必殺技CD減少1回合」 \n\n《踹蹦跳》\n 普攻時，觸發「使夢遊魔境千鶴攻擊力增加15%(5回合)」 (1回合)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 時間好趕~時間好趕~`,
                "value": `每經過1回合，觸發「使我方全體攻擊力增加2.5%(最多8層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 手製兔兔餅乾~`,
                "value": `第1回合時，觸發「使我方全體被治療時回復量增加30%(50回合)」\n每經過1回合，觸發「以自身攻擊力20％對我方全體進行治療」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 幸運兔腳`,
                "value": `普攻時，觸發「使我方全體普攻傷害增加40%(1回合)」 \n必殺時，觸發「使我方全體必殺傷害增加15%(1回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 普攻傷害+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/965642375584153600.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'faya': {
        "type": "rich",
        "title": `高等魔族 法雅 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_healer:933339563127078922>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：2,985,248 | ATK：866,499`
            },
            {
                "name": `<:detail_skill:933339968967933963> 我有一個夢想`,
                "value": `以自身攻擊力20％使我方全體攻擊力增加(1回合)，並以自身最大HP50/60/65/70/75％給予我方全體進行治療，再給予自身「普攻時，追加技能『以自身攻擊力15/20/20/22.5/25％使我方全體攻擊力增加(1回合)』(3/3/4/4/4回合)」，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 治療之聲`,
                "value": `以自身攻擊力50％對我方全體進行治療`
            },
            {
                "name": `<:detail_leader:933339992732876811> 強者的溫柔`,
                "value": `我方全體最大HP增加20%\n我方全體攻擊力增加20%\n我方全體普攻傷害增加40%\n我方全體受到治療量增加30%\n我方全體受到護盾量增加30% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 認知阻礙魔法`,
                "value": `普攻時，觸發「以自身最大HP20％給予我方全體護盾(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 良善之心`,
                "value": `普攻時，觸發「使我方全體受到護盾效果增加5%(最多6層)」\n必殺時，觸發「使我方全體被治療時回復量增加15%(最多2層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 貴族加護`,
                "value": `第一回合時，觸發「使自身當前必殺技CD減少2回合」\n必殺時，觸發「使我方全體普攻傷害增加22.5%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻擊力+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/971961353109635153.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'usagihime': {
        "type": "rich",
        "title": `惡兔魔王 兔姬 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_obstructer:933339487084359740>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,358,044 | ATK：849,226`
            },
            {
                "name": `<:detail_skill:933339968967933963> 是我兔姬DA！`,
                "value": `以自身攻擊力33/37.6%對目標造成傷害10次，使自身造成傷害增加10/12.5%(4回合)，CD:4 \n\n3絆：使自身造成傷害增加15/17.5/20%(4回合)，並以自身攻擊力42.2/46.8/51.4%對目標造成傷害10次，CD:4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 兔姬剛掌波`,
                "value": `以自身攻擊力125％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 固有結界。惡兔王國！`,
                "value": `我方全體攻擊力增加30%\n必殺時，觸發「使自身攻擊力增加50%(最多4層)」\n第一回合時，觸發「使我方全體當前必殺技CD減少2回合」\n我方全體攻擊者、守護者、妨礙者獲得《無駄無駄無駄！ 》 \n\n《無駄無駄無駄！》\n普攻時，追加技能「以自身攻擊力20％對目標造成傷害3次」\n普攻傷害增加60% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 無限歐派製！`,
                "value": `普攻時，追加「以自身攻擊力10％對目標造成傷害6次」\n普攻時，觸發「使我方全體普攻傷害增加15%(最多3層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 但是，我拒絕！`,
                "value": `普攻時，觸發「使目標被治療時回復量減少50%(2回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 上吧！惡兔三獸士！`,
                "value": `每經過一回合，觸發「使敵方全體受到普攻傷害增加20%(最多5層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732>  攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://media.discordapp.net/attachments/786918057054044181/978254673687478302/IMB_zHpQhI.gif`,
            "height": 0,
            "width": 0
        }
    },
    's-iblis': {
        "type": "rich",
        "title": `夏日 伊布力斯 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_attacker:933339400916578344>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,109,032 | ATK：916,877`
            },
            {
                "name": `<:detail_skill:933339968967933963> 夏日少女的戀心是無敵的！`,
                "value": `使我方全體水、火屬性隊員攻擊力增加30/30/40/40/40%(1回合)，使目標受到水、火屬性的傷害增加5/7.5/10/12.5/15%(最多2層)，並以自身攻擊力330/376/422/468/514%對目標造成傷害，CD:4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 遮陽傘揮擊`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 慵懶高雅！伊布力斯高級渡假村`,
                "value": `我方全體攻擊力增加100%\n攻擊時，觸發「使我方全體獲得友方目標最大HP25％的護盾(1回合)」\n使我方全體隊員獲得「隊伍中有5名攻擊者時，發動『《享受夏日》』」 \n\n《享受夏日》\n攻擊時，觸發「以自身攻擊力15％對我方全體進行治療」\n必殺時，觸發「以自身攻擊力12.5％對我方全體施放護盾 (1回合)」\n攻擊時，觸發「使我方全體必殺技傷害增加5%(最多10層)」\n攻擊時，觸發「使目標受到水、火屬性的傷害增加3%(最多10層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 海灘明豔夏日之花`,
                "value": `防禦時，觸發「使我方全體水、火屬性隊員被治療時回復量增加50%(2回合)」\n必殺時，觸發「使我方全體水、火屬性隊員攻擊力增加15%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 臣服於我！`,
                "value": `使自身造成傷害增加25%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 頭抬太高了！`,
                "value": `每經過4回合，觸發「使目標受到水、火屬性傷害增加40%(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/983334594122240050.webp?size=128&quality=lossless`,
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
                "value": `HP：4,060,456 | ATK：702,410`
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
                "name": `<:detail_passive:933340075910131732> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/983334725437489222.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    's-milae': {
        "type": "rich",
        "title": `夏日 聖米勒 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_attacker:933339400916578344>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,235,697 | ATK：880,893`
            },
            {
                "name": `<:detail_skill:933339968967933963> 主的愛如潮水`,
                "value": `以自身攻擊力330/376/422/468/514％對目標造成傷害，並給予我方全體『普攻時，觸發「以自身攻擊力10/15/15/20/25％對目標造成傷害(3/3/4/4/4回合)」』，CD :4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 潮湧`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 天使狩獵區`,
                "value": `我方全體攻擊力增加50%\n每經過一回合，觸發「使我方全體造成觸發技效果增加20%(最多10層)」\n使我方全體攻擊者、守護者、妨礙者獲得《性愛之神的寵召》 \n\n《性愛之神的寵召》 \n必殺技傷害增加40% \n必殺時，觸發「以自身攻擊力80％對目標造成傷害」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 樂園印記`,
                "value": `每經過一回合，觸發「使自身攻擊力增加10%(最多10層)」\n必殺時，觸發「以自身攻擊力80％對目標造成傷害」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 失神浪潮`,
                "value": `普攻時，觸發「使目標受到觸發技傷害增加20%(最多5層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 神的撫摸`,
                "value": `自身造成傷害增加20%\n自身必殺技傷害增加40% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 必殺+ (6潛)`,
                "value": `使自身必殺技傷害增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫睡眠 (12潛)`,
                "value": `使自身免疫睡眠`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/983334661491134525.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    's-aridya': {
        "type": "rich",
        "title": `夏日 阿爾蒂雅 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_attacker:933339400916578344>`,
        "color": 0x48B4EB,
        "fields": [
          {
            "name": `<:5flower:981031925168865290> 完全體數據`,
            "value": `HP：2,967,975 | ATK：961,497`
          },
          {
            "name": `<:detail_skill:933339968967933963> 巨浪「大瘋狗」`,
            "value": `使自身必殺技傷害增加10/10/12.5/12.5/15%(12回合)，再以攻擊力116/132/149/165/182%對敵方站位2、3、4的敵人造成傷害，CD: 3 `
          },
          {
            "name": `<:detail_attack:933340014379667457> 衝浪`,
            "value": `以攻擊力40％對敵方站位2、3、4的目標造成傷害`
          },
          {
            "name": `<:detail_leader:933339992732876811> 傳奇衝浪手傳承者`,
            "value": `我方全體攻擊力增加50%、受到傷害減少15%\n自身獲得《追浪》、《啟乘》\n\n《追浪》 \n每經過3回合，觸發「使自身造成傷害增加125%(1回合) 、使敵方全體受到傷害增加50%(1回合)」 \n\n《啟乘》\n每經過6回合，觸發「使自身造成必殺技傷害增加125%(1回合)」 `
          },
          {
            "name": `<:detail_passive:933340075910131732> 只要呼吸就好…`,
            "value": `自身HP大於75％時，發動「攻擊力增加50%」`
          },
          {
            "name": `<:detail_passive:933340075910131732> 餘波蕩漾`,
            "value": `必殺時，觸發「以攻擊力30％對敵方站位2、3、4的目標造成傷害」`
          },
          {
            "name": `<:detail_passive:933340075910131732> 起床氣`,
            "value": `第4回合時，觸發「使自身攻擊力增加40%(50回合)」 \n第7回合時，觸發「使自身攻擊力增加80%(50回合)」`
          },
          {
            "name": `<:detail_passive:933340075910131732> 攻擊+ (6潛)`,
            "value": `攻擊力增加10%`
          },
          {
            "name": `<:detail_passive:933340075910131732> 免疫沉默 (12潛)`,
            "value": `免疫沉默`
          }
        ],
        "thumbnail": {
          "url": `https://cdn.discordapp.com/emojis/983334741442973716.webp?size=128&quality=lossless`,
          "height": 0,
          "width": 0
        }
    },
    'kana': {
        "type": "rich",
        "title": `花魁 香奈 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_healer:933339563127078922>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,327,818 | ATK：856,424`
            },
            {
                "name": `<:detail_skill:933339968967933963> 玉指輕拂朱唇笑`,
                "value": `以自身攻擊力165/188/211/234/257％對我方全體進行治療，並獲得受到傷害減少10/12.5/12.5/15/17.5%(1/1/2/2/2回合)、攻擊力增加20/25/25/30/35%(3/3/4/4/4回合)，再使自身獲得普攻傷害增加30/30/40/40/50%(4回合)，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 舞袖`,
                "value": `以自身攻擊力75％使我方全體進行治療 `
            },
            {
                "name": `<:detail_leader:933339992732876811> 花落沾吾衣`,
                "value": `我方全體HP增加35%、被治療時回復量增加25%\n我方全體火、閽屬性隊員獲得「被治療時，觸發『使自身造成必殺技傷害增加7.5%(2回合)、造成普攻傷害增加10%(2回合)』」(無法透過觸發技的治療效果發動)\n我方全體火、閽屬性隊員獲得「普攻、必殺時，追加技能 『以自身攻擊力5％對我方全體進行治療』」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 魁首盼佳人`,
                "value": `第1回合時，觸發《如癡如醉》 \n\n《如癡如醉》\n使我方全體獲得「被治療時，觸發『使自身攻擊力增加12.5%(2回合)』」(無法透過觸發技的治療效果發動)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 香徑燕語喧`,
                "value": `第1回合時，觸發《滿園春色》 \n\n《滿園春色》\n使我方全體獲得「被治療時，觸發『使自身造成傷害增加5%(2回合)』」(無法透過觸發技的治療效果發動)`
            },
            {
                "name": `<:detail_passive:933340075910131732> 奈何花相落`,
                "value": `第1回合時，觸發「使自身造成治療量增加25%(最多1層)」\n第1回合時，觸發「我方全體被治療時回復量增加12.5%(最多1層)、受到持續型傷害減少30%(最多1層)」 \n攻擊時，觸發「使我方當前HP最低者受到傷害減少20%(1回合)，再以攻擊力15%對我方當前HP最低者進行治療 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻擊+ (6潛)`,
                "value": `攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/996211600950308934.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'ichika': {
        "type": "rich",
        "title": `雪姬 初華 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_attacker:933339400916578344>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,411,301 | ATK：836,271`
            },
            {
                "name": `<:detail_skill:933339968967933963> 霜華綻放`,
                "value": `使敵方站位2、3、4目標受到必殺技傷害增加2.5/2.5/3.75/3.75/5%(最多4層)，再以自身攻擊力102/116/130/143/157％對敵方站位2、3、4目標造成傷害，CD:3`
            },
            {
                "name": `<:detail_attack:933340014379667457> 冰刺`,
                "value": `以自身攻擊力100％對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 永凍之巔`,
                "value": `我方全體攻擊力增加40%\n自身必殺技最大CD增加一回合\n自身必殺時，觸發「使敵方全體受到傷害增加7.5%(最多4層)」\n自身必殺時，觸發「使敵方全體受到必殺技傷害增加12.5%(最多4層)」\n自身攻擊時，觸發「以自身攻擊力25％使我方全體攻擊力增加(1回合)」\n自身免疫沉默 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 霜風障壁`,
                "value": `防禦時，觸發「以自身攻擊力50％給予我方全體護盾(1回合)」\n防禦時，觸發「以100％機率對自身造成沉默效果(2回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 徹骨冰寒`,
                "value": `必殺時，觸發「使自身攻擊力增加18.75%(最多4層)」 \n必殺時，觸發「使自身必殺技傷害增加15%(最多4層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 冰山美人`,
                "value": `自身造成傷害增加15%\n自身必殺時，觸發「給予我方全體自身最大HP20％的護盾(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻擊+ (6潛)`,
                "value": `使自身攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫沉默 (12潛)`,
                "value": `使自身免疫沉默`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/996211665953620048.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'q-asida': {
        "type": "rich",
        "title": `雙星之紅 安絲蒂 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_fire:933339778559131679> <:class_attacker:933339400916578344>`,
        "color": 0xF45F34,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,077,367 | ATK：926,952`
            },
            {
                "name": `<:detail_skill:933339968967933963> 安絲蒂特製調酒`,
                "value": `使目標受到傷害增加18/18/20/20/20%(7回合)，再以攻擊力265/298/331/364/397％對目標造成傷害，CD: 3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 熱情招呼`,
                "value": `以攻擊力100％對目標造成傷害 `
            },
            {
                "name": `<:detail_leader:933339992732876811> 熱情的雙星店長`,
                "value": `我方全體獲得《美酒》、《佳人》、《圍事》、《親愛的妹妹》\n自身必殺時，觸發「使我方全體造成傷害增加35%(1回合)」\n\n《美酒》\n隊伍中有至少(1/2/3)名攻擊者時，各發動「攻擊力增加15/20/30%」\n\n《佳人》\n隊伍中有至少(1/2/3)名妨礙者時，各發動「攻擊力增加15/20/30%」\n\n《圍事》\n隊伍中有至少1名守護者時，發動「必殺技傷害增加50%」\n\n《親愛的妹妹》\n當「銀河之藍 安絲娜」在我方場上且存活時，發動「造成傷害增加20%」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 氣勢第一`,
                "value": `必殺時，觸發「使我方全體造成必殺技傷害增加25%(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 戀愛衝鋒`,
                "value": `必殺時，觸發《加點酒水》\n\n《加點酒水》\n使我方全體攻擊者、妨礙者獲得「必殺時，觸發『以攻擊力77％對目標造成傷害』(1回合)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 七夕的祈願`,
                "value": `第7回合時，觸發「使我方全體造成傷害增加30%(最多1層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 攻擊力+ (6潛)`,
                "value": `攻擊力增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (12潛)`,
                "value": `免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1004274017504591993.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'q-asina': {
        "type": "rich",
        "title": `銀河之藍 安絲娜 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_protector:933339611080572948>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：4,637,643 | ATK：614,608`
            },
            {
                "name": `<:detail_skill:933339968967933963> 姐姐就由我來保護`,
                "value": `以自身最大HP40/45/50/55/60％對自身施放護盾(1回合)，並獲得嘲諷效果(1回合)，再使目標受到火、水屬性傷害增加14/18/22/26/30%(2回合)，CD:3 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 甜言蜜語`,
                "value": `以自身攻擊力50％對目標造成傷害，以自身攻擊力50％對自身與「雙星之紅 安絲蒂」進行治療 `
            },
            {
                "name": `<:detail_leader:933339992732876811> 頂級夜店仕掛人`,
                "value": `使我方全體最大HP增加30%\n使我方全體攻擊力增加40%\n使自身最大HP增加40%\n使自身與「雙星之紅 安絲蒂」受到傷害減少20%、受到護盾效果增加30%、受到治療效果增加30% `
            },
            {
                "name": `<:detail_passive:933340075910131732> 友善職場`,
                "value": `普攻時，觸發「以自身最大HP10％對我方全體施放護盾(1回合)」\n普攻時，觸發「以自身最大HP10％對『雙星之紅 安絲蒂』施放護盾(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 天之羽織`,
                "value": `必殺時，觸發「使自身受到傷害減少30%(2回合)」\n必殺時，觸發「使『雙星之紅 安絲蒂』受到傷害減少30%(2回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 銀河分隔的雙子`,
                "value": `使我方全體火、水屬性隊員獲得「《命運交織》」\n使我方全體火、水屬性隊員獲得 「當『雙星之紅 安絲蒂』 在我方場上且存活時，發動《命運交織。絆》』」\n\n《命運交織》 \n攻擊時，觸發「使目標受到火、水屬性傷害增加1.5%(最多7層)」\n攻擊時，觸發「使自身造成傷害增加1.5%(最多7層)」\n攻擊時，觸發「使自身必殺技傷害增加1.5%(最多7層)」\n \n《命運交織。絆》 \n攻擊時，觸發「使自身造成傷害增加1.5%(最多7層)」 \n攻擊時，觸發「使自身必殺技傷害增加1.5%(最多7層)」 `
            },
            {
                "name": `<:detail_passive:933340075910131732> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1004273866341883904.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'emily': {
        "type": "rich",
        "title": `傳說女僕 艾蜜莉 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_supporter:933339516788408420>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,048,578 | ATK：849,225`
            },
            {
                "name": `<:detail_skill:933339968967933963> 女僕密技。真。家務分身術`,
                "value": `以自身攻擊力15/20/30/30/30％使我方全體攻擊力增加(1回合)，再使我方站位5的隊員攻擊力增加20/25/30/45/60%(1回合)，再以攻擊力100％對我方全體進行治療、我方站位5的隊員當前必殺技CD減少4回合\"效果，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 嚴厲指導`,
                "value": `以自身攻擊力30％使我方全體攻擊力增加(1回合)`
            },
            {
                "name": `<:detail_leader:933339992732876811> 一絲不苟穿的女僕長`,
                "value": `使自身攻擊力增加100%\n每經過1回合，觸發「以自身攻擊力30％使我方全體攻擊力增加(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 女僕密技。快速上菜術`,
                "value": `普攻時，觸發「使自身攻擊力增加10%(最多4層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 女僕密技。瞬間更衣術`,
                "value": `必殺時，觸發「使我方站位5的隊員攻擊力增加40%(2回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 女僕密技。頑垢清潔術`,
                "value": `必殺時，觸發「使我方全體造成傷害增加30%(1回合)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 減傷+ (6潛)`,
                "value": `使自身受到傷害減少5%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫麻痺 (12潛)`,
                "value": `使自身免疫麻痺`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1010770415209152574.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'anjelica': {
        "type": "rich",
        "title": `千咒魔女 安西莉卡 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_attacker:933339400916578344>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：3,087,442 | ATK：837,711`
            },
            {
                "name": `<:detail_skill:933339968967933963> 迴路定礎。禁咒展開`,
                "value": `使自身攻擊力增加20/35/35/50/50%(4回合)、使自身受到傷害減少10/12.5/15/17.5/20%(4回合)，再以攻擊力330/376/422/468/514％對目標造成傷害，CD: 4 `
            },
            {
                "name": `<:detail_attack:933340014379667457> 咒文詠唱`,
                "value": `以攻擊力100%對目標造成傷害`
            },
            {
                "name": `<:detail_leader:933339992732876811> 魔道賢者`,
                "value": `使我方全體屬性相剋增減傷效果減少100%\n使我方全體攻擊力增加30%\n使我方全體最大HP增加15%\n自身獲得每經過1回合，觸發「使我方全體攻擊力增加5% (最多25層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 千咒`,
                "value": `自身必殺技傷害增加25%\n攻擊時，觸發「自身必殺技傷害增加2%(最多25層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 結構解析`,
                "value": `自身造成傷害增加10%\n必殺時，觸發「使自身造成傷害增加6%(最多5層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 偏執的追尋者`,
                "value": `每經過一回合，觸發「使自身攻擊力增加4%(最多50層)」 \n攻擊時，觸發「使自身攻擊力增加2%(最多50層)」`
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
            "url": `https://cdn.discordapp.com/emojis/1010770215145066547.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'c1-nana': {
        "type": "rich",
        "title": `適格者 娜娜 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_attacker:933339400916578344>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：- | ATK：-`
            },
            {
                "name": `<:detail_skill:933339968967933963> -`,
                "value": `-`
            },
            {
                "name": `<:detail_attack:933340014379667457> -`,
                "value": `-`
            },
            {
                "name": `<:detail_leader:933339992732876811> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> + (6潛)`,
                "value": `使自身-增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫 (12潛)`,
                "value": `使自身免疫`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1016388788169232525.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
    'geneva': {
        "type": "rich",
        "title": `未知生命體 基貝魯 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_attacker:933339400916578344>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `HP：- | ATK：-`
            },
            {
                "name": `<:detail_skill:933339968967933963> -`,
                "value": `-`
            },
            {
                "name": `<:detail_attack:933340014379667457> -`,
                "value": `-`
            },
            {
                "name": `<:detail_leader:933339992732876811> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> -`,
                "value": `-`
            },
            {
                "name": `<:detail_passive:933340075910131732> + (6潛)`,
                "value": `使自身-增加10%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 免疫 (12潛)`,
                "value": `使自身免疫`
            }
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/1015476554970710107.webp?size=128&quality=lossless`,
            "height": 0,
            "width": 0
        }
    },
}

const nanaScriptList = [
    "本、本喵不要繼續加班了……",
    "笨蛋凱撒，快點工作喵！",
    "會死哦，本喵說不定真的會死喵！",
    "－－笨蛋凱撒！！！",
    "本喵完全能想像當初負責照顧你的人有多麼辛苦喵。",
    "<:nana_simpsons:934456179705409566>"
  ]
  
const nanascript = nanaScriptList[Math.floor(Math.random() * nanaScriptList.length)];

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