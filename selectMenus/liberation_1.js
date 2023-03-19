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
                "name": `<a:119:882828927842795530>**注意**<a:119:882828927842795530>`,
                "value": `**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**\n\n--------------`
            },
            {
                "name": `<:liberate_1:1054796644136263731> 第一階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x300,000`
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
                "name": `<:liberate_2:1054796646728355851> 第二階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:crystal_fire:1054638743249748099> 緋紅結晶x20\n<:item_fragment:1054638756210163812> 技之碎片x150，<:item_sliver:1054655504040865832> 銀幣x400,000`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `**HP與ATK將永久提升10%**\nHP：3,440,520 | ATK：910,400`
            },
            {
                "name": `<:liberate_3:1054796649035214879> 第三階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x500,000`
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
        },
        "imageUrl": "https://cdn.discordapp.com/attachments/933707595301150740/1054811284283064392/char-01-2e94cdaa4f11a45635703144d76d06bc.png"
    },
    'satan': {
        "type": "rich",
        "title": `魔王 撒旦 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_dark:933339859559530506> <:class_protector:933339611080572948>`,
        "color": 0xC390FF,
        "fields": [
            {
                "name": `<a:119:882828927842795530>**注意**<a:119:882828927842795530>`,
                "value": `**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**\n\n--------------`
            },
            {
                "name": `<:liberate_1:1054796644136263731> 第一階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x300,000`
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
                "name": `<:liberate_2:1054796646728355851> 第二階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:crystal_dark:1054638740112408596> 靛紫結晶x20\n<:item_fragment:1054638756210163812> 技之碎片x150，<:item_sliver:1054655504040865832> 銀幣x400,000`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `**HP與ATK將永久提升10%**\nHP：4,947,826 | ATK：633,319`
            },
            {
                "name": `<:liberate_3:1054796649035214879> 第三階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x500,000`
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
        },
        "imageUrl": "https://cdn.discordapp.com/attachments/933707595301150740/1054811284631199837/char-02-62ba2a893efff53c60042743e5341b63.png"
    },
    'iblis': {
        "type": "rich",
        "title": `魔王 伊布力斯 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_light:933339825933791312> <:class_attacker:933339400916578344>`,
        "color": 0xEFB26B,
        "fields": [
            {
                "name": `<a:119:882828927842795530>**注意**<a:119:882828927842795530>`,
                "value": `**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**\n\n--------------`
            },
            {
                "name": `<:liberate_1:1054796644136263731> 第一階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x300,000`
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
                "name": `<:liberate_2:1054796646728355851> 第二階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:crystal_light:1054638745816682556> 雪白結晶x20\n<:item_fragment:1054638756210163812> 技之碎片x150，<:item_sliver:1054655504040865832> 銀幣x400,000`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `**HP與ATK將永久提升10%**\nHP：3,166,609 | ATK：989,565`
            },
            {
                "name": `<:liberate_3:1054796649035214879> 第三階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x500,000`
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
        },
        "imageUrl": "https://cdn.discordapp.com/attachments/933707595301150740/1054811285008699413/char-03-4a1ae928679be2f9258ef2637f7e9fe7.png"
    },
    'salucia': {
        "type": "rich",
        "title": `精靈王 賽露西亞 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_supporter:933339516788408420>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<a:119:882828927842795530>**注意**<a:119:882828927842795530>`,
                "value": `**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**\n\n--------------`
            },
            {
                "name": `<:liberate_1:1054796644136263731> 第一階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x300,000`
            },
            {
                "name": `<:detail_skill:933339968967933963> 導引之箭矢`,
                "value": `以攻擊力625%對目標造成傷害，並使我方全體攻擊力增加25%(最多2層)，CD: 6`
            },
            {
                "name": `<:detail_passive:933340075910131732> 引領者`,
                "value": `攻擊時，觸發「使我方全體造成傷害增加20%(1回合)」\n攻擊時，觸發「使我方全體普攻傷害增加30%(1回合)」`
            },
            {
                "name": `<:liberate_2:1054796646728355851> 第二階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:crystal_wind:1054638751567056926> 翠綠結晶x20\n<:item_fragment:1054638756210163812> 技之碎片x150，<:item_sliver:1054655504040865832> 銀幣x400,000`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `**HP與ATK將永久提升10%**\nHP：3,597,268 | ATK：870,818`
            },
            {
                "name": `<:liberate_3:1054796649035214879> 第三階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x500,000`
            },
            {
                "name": `<:detail_leader:933339992732876811> 精靈領域`,
                "value": `我方全體最大HP增加20%\n我方全體攻擊力增加50%\n我方全體普攻傷害增加50%\n自身攻擊力增加50%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 破天一擊`,
                "value": `必殺時，觸發「使敵方全體受到傷害增加12.5%(最多2層)且使敵方全體防禦狀態解除」\n必殺時，觸發「使敵方目標受到普攻傷害增加35%(最多2層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 揚起勝利之風`,
                "value": `我方全體攻擊力增加25%\n第1回合，觸發「使自身必殺技冷卻時間減少6回合」`
            },
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436720590878.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        },
        "imageUrl": "https://cdn.discordapp.com/attachments/933707595301150740/1077973945011159111/ezgif-1-36f270b187.png"
    },
    'lana': {
        "type": "rich",
        "title": `矮人王 蘭兒 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_water:933339803087421523> <:class_attacker:933339400916578344>`,
        "color": 0x48B4EB,
        "fields": [
            {
                "name": `<a:119:882828927842795530>**注意**<a:119:882828927842795530>`,
                "value": `**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**\n\n--------------`
            },
            {
                "name": `<:liberate_1:1054796644136263731> 第一階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x300,000`
            },
            {
                "name": `<:detail_passive:933340075910131732> 力量儲存`,
                "value": `行動時，觸發「使自身攻擊力增加15%(最多4層)」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 屏氣凝神`,
                "value": `行動時，觸發「使自身造成傷害增加5%(最多4層)」`
            },
            {
                "name": `<:liberate_2:1054796646728355851> 第二階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:crystal_water:1054638748664594564> 蒼藍結晶x20\n<:item_fragment:1054638756210163812> 技之碎片x150，<:item_sliver:1054655504040865832> 銀幣x400,000`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `**HP與ATK將永久提升10%**\nHP：3,723,932 | ATK：840,735`
            },
            {
                "name": `<:liberate_3:1054796649035214879> 第三階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x500,000`
            },
            {
                "name": `<:detail_skill:933339968967933963> 躍空斷裂破`,
                "value": `使目標解除防禦狀態，再以攻擊力1050％對目標造成傷害，並使自身獲得普攻傷害增加100%(3回合)，CD: 6`
            },
            {
                "name": `<:detail_leader:933339992732876811> 矮人王的氣勢`,
                "value": `我方全體最大HP增加20%\n自身攻擊力增加125%\n自身普攻傷害增加100%\n自身造成傷害增加35%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 巨斧破龍的幻光`,
                "value": `自身必殺技傷害增加50%\n行動時，觸發\n「使目標受到水屬性傷害增加6%(最多4層)」`
            },
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436463820810.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        },
        "imageUrl": "https://cdn.discordapp.com/attachments/933707595301150740/1077976410943135806/ezgif-1-bedf4ffa82.png"
    },
    'lulu': {
        "type": "rich",
        "title": `法斯公主 露露 ★★★`,
        "description": `<:rarity_ssr:933339183848763412> <:element_wind:933339803653644358> <:class_healer:933339563127078922>`,
        "color": 0x54BA71,
        "fields": [
            {
                "name": `<a:119:882828927842795530>**注意**<a:119:882828927842795530>`,
                "value": `**由於角色眾多，故此解放所需素材中的對應角色的記憶精碎將統一以【無名的記憶碎片】的表情符號【<:item_nameless:1054798367210872843>】作顯示。如發生任何誤會，本喵並不會負責！**\n\n--------------`
            },
            {
                "name": `<:liberate_1:1054796644136263731> 第一階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x300,000`
            },
            {
                "name": `<:detail_skill:933339968967933963> 大家加油喔！`,
                "value": `以自身攻擊力25％使我方輔助者攻擊力增加(1回合)，以攻擊力200％對我方全體進行治療，並以自身攻擊力110%每回合對我方全體進行治療(5回合)，CD: 4`
            },
            {
                "name": `<:detail_attack:933340014379667457> 鼓舞`,
                "value": `以攻擊力75％對我方全體進行治療`
            },
            {
                "name": `<:detail_passive:933340075910131732> 認真應援`,
                "value": `攻擊時，觸發「以自身攻擊力25％使我方全體攻擊力增加(1回合)」`
            },
            {
                "name": `<:liberate_2:1054796646728355851> 第二階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:crystal_wind:1054638751567056926> 翠綠結晶x20\n<:item_fragment:1054638756210163812> 技之碎片x150，<:item_sliver:1054655504040865832> 銀幣x400,000`
            },
            {
                "name": `<:5flower:981031925168865290> 完全體數據`,
                "value": `**HP與ATK將永久提升10%**\nHP：3,518,102 | ATK：889,817`
            },
            {
                "name": `<:liberate_3:1054796649035214879> 第三階段`,
                "value": `<:item_liberate:1054638758164705380> 解放晶石x1，<:item_nameless:1054798367210872843> 角色記憶精碎x10\n<:item_flawless:1054638754243027004> 無暇魂魄x1，<:item_sliver:1054655504040865832> 銀幣x500,000`
            },
            {
                "name": `<:detail_leader:933339992732876811> 被激起的保護慾`,
                "value": `我方全體最大HP增加35%\n我方全體攻擊力增加40%\n我方全體必殺技傷害增加25%\n我方全體造成傷害增加20%\n我方全體守護者最大HP增加15%\n我方全體被治療時回復量增加30%`
            },
            {
                "name": `<:detail_passive:933340075910131732> 額外治療`,
                "value": `普攻時，觸發「我方HP最低者受到傷害減少15%(1回合)」\n普攻時，觸發「以自身攻擊力40％對我方HP最低者進行治療」`
            },
            {
                "name": `<:detail_passive:933340075910131732> 讓大家看見我的努力！`,
                "value": `我方全體必殺技傷害增加30%\n必殺時，觸發「使目標受到風屬性傷害增加20%(最多2層)」`
            },
        ],
        "thumbnail": {
            "url": `https://cdn.discordapp.com/emojis/856202436657152060.webp?size=96&quality=lossless`,
            "height": 0,
            "width": 0
        },
        "imageUrl": "https://cdn.discordapp.com/attachments/933707595301150740/1077979593283215380/ezgif-1-2ec5f0275b.png"
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
            .addFields(character.fields)
            .setImage(character.imageUrl);
        await interaction.reply({
            content: `<@!${interaction.user.id}> ${nanascript}`,
            embeds: [embed],
            ephemeral: true,
        })
    }
}