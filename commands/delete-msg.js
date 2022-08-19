const { SlashCommandBuilder } = require("@discordjs/builders");
const util = require("../util");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("delete-msg")
        .setDescription("BOT刪除特定訊息")
        .addStringOption((option) => 
            option
                .setName("message_id")
                .setDescription('訊息ID')
                .setRequired(true),
        ),
    async execute(interaction, client) {
        try {
            if(util.checkRole(interaction, interaction.member._roles)){
                const channel = await client.channels.fetch(interaction.channelId)
                const messageID = interaction.options.getString("message_id")
                const message = await channel.messages.fetch(messageID)

                message.delete()

                interaction.reply({
                    content: 'DELETE SUCCESS',
                    ephemeral: false,
                });
            }
        } catch (error) {
            util.showErrorReply(interaction, error)
        }
        
    }
}
