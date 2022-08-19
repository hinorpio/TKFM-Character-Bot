const { SlashCommandBuilder } = require("@discordjs/builders");
const util = require("../util");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("send-msg")
        .setDescription("BOT發送特定訊息")
        .addStringOption((option) => 
            option
                .setName("message")
                .setDescription('訊息')
                .setRequired(true),
        ),
    async execute(interaction, client) {
        try {
            const channel = await client.channels.fetch(interaction.channelId)

            await interaction.deferReply()

            await channel.send({
                content: interaction.options.getString("message"),
                ephemeral: false,
            })

            await interaction.deleteReply()
            
        } catch (error) {
            util.showErrorReply(interaction, error)
        }
        

    }
}
