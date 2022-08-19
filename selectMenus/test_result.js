module.exports = {
    data: {
        name: 'test_result'
    },
    async execute(interaction) {
        await interaction.reply({
            content: `You select: ${interaction.values[0]}`
        })
    }
}