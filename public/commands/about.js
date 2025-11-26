const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    // Slash command data
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Learn about Legbot v2 and its features."),

    // Prefix command name
    name: "about",

    // Description for prefix
    description: "Information about Legbot and its features.",

    async execute(ctx, args) {
        const user = ctx.user ? ctx.user : ctx.author;

        const helpEmbed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle("Legbot v2 — Information")
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                {
                    name: "About Me",
                    value:
                        "Legbot was originally created during the 2021 pandemic by me and my friend Tamesh. " +
                        "We were on Discord every day with nothing to do, so we decided to learn Node.js and build something fun.\n\n" +
                        "**Legbot v1** could:\n" +
                        "• tell jokes\n" +
                        "• show the weather\n" +
                        "• generate funny pet photos\n\n" +
                        "This built on earlier bot projects like *Colorbot*, which taught us the basics of bot development.\n\n" +
                        "Even though the original version stopped development in 2022, it was a huge learning experience. But now…",
                },
                {
                    name: "Legbot v2 — What’s New?",
                    value:
                        "**Legbot v2** is a fully rebuilt and modern bot releasing in **Q2 2026**.\n\n" +
                        "It now includes:\n" +
                        "• moderation + admin commands\n" +
                        "• music playback\n" +
                        "• XP/leveling system\n" +
                        "• updated commands and tools\n\n" +
                        "This version is built to be more stable, more useful, and more customizable.",
                },
                {
                    name: "Commands",
                    value:
                        "This demo version of Legbot v2 only includes a few commands right now.\n" +
                        "Use **`lb-help`** or **`/help`** to see the full command list.",
                },
                {
                    name: "More Information",
                    value: "Visit the Legbot website: https://animatinglegend.github.io",
                }
            );

        // Respond for prefix or slash
        if (ctx.reply) {
            return ctx.reply({ embeds: [helpEmbed] });
        } else {
            return ctx.channel.send({ embeds: [helpEmbed] });
        }
    },
};
