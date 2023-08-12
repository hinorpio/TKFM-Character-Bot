const { EmbedBuilder } = require("@discordjs/builders");

const data = {
    "邀請碼規定": 'https://i.imgur.com/PsXQVzX.jpg',
    "工具箱": '領袖9小只有<:mark_04:856493169113563146> ，請無視<:mark_03:856493160784199701> 以下角色 https://i.imgur.com/cH4R9fY.png \n https://purindaisuki.github.io/tkfmtools/enlist/filter/',
    "帳號綁定": 'https://i.imgur.com/XQ8FsEw.jpg',
    "首抽推薦": 'https://i.imgur.com/wnawl9d.jpg',
    "曬卡定義及規定": 'https://i.imgur.com/Pvsauvk.png https://i.imgur.com/ycp8lg1.jpg',
    "平台關係圖": 'https://i.imgur.com/XrhADtP.png',
    "貼牛棚": 'https://i.imgur.com/HLKUsTI.png',
    "資源優先表": 'https://ppt.cc/fpD1vx',
    "輔助升星優先表": 'https://discord.com/channels/757480103830880256/885785014632075324/966671052090511471',
    "升星寶珠需求表": 'https://i.imgur.com/ru4F7Qc.png',
    "角色評價表": 'https://tiermaker.com/create/tenkafumanssr-1395604?fbclid=IwAR0rUpqXjjidMKmuRXw_ZjTWipwEIW6HeVolHeEAYisMtQZId6vAsbGnBCo',
    "商店必買": "https://i.imgur.com/rF1HzKQ.jpg",
    "登入自選": "https://i.imgur.com/JibYpIK.jpg",
    "看狀態": 'https://i.imgur.com/k6tiVAq.png',
    "主線卡關": 'https://imgur.com/e6EmPTq https://imgur.com/L8EuJHf \nhttps://imgur.com/4rDWmuu https://imgur.com/vOKoIzB\nhttps://i.imgur.com/ZTzoPZ7.jpg\nhttps://imgur.com/sUeGvGM https://imgur.com/7h1GEHp\nhttps://i.imgur.com/kqOFMjq.jpg',
    "機制網": 'https://tkfmguide.com',
    "⁠角色評價及活動資訊": 'https://discord.com/channels/757480103830880256/885785014632075324/966670881323630652'
}
module.exports = {
    data: {
        name: 'command_1'
    },
    async execute(interaction, client) {
        const msg = data[interaction.values[0]]
        await interaction.reply({
            content: msg,
            ephemeral: true,
        })
    }
}