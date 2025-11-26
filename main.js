const discord = require("discord.js");
const { Routes } = require("discord.js");
const { token, user_id } = require("./src/api/config.json");

const fs = require("node:fs");
const path = require("node:path");

// ==========================================================
// initialize bot client
// ==========================================================
const client = new discord.Client({
     intents: [
          discord.GatewayIntentBits.Guilds,
          discord.GatewayIntentBits.GuildMessages,
          discord.GatewayIntentBits.MessageContent,
     ],
});

// ==========================================================
// initialize commands
// find the command files, cache them, and load them
// ==========================================================
client.commands = new discord.Collection();
client.on('error', console.error);

const commands = [];
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync("./commands").filter(folder => fs.statSync(`./commands/${folder}`).isDirectory());

// ===== Loading Commands =====
for (const folder of commandFolders) {
     const cmdFiles_folder = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

     for (const file of cmdFiles_folder) {
          const command = require(`./commands/${folder}/${file}`);
          client.commands.set(command.data.name, command);
     }
}

for (const file of commandFiles) {
     const command = require(`./commands/${file}`);
     client.commands.set(command.data.name, command);
}

// ===== Registering Commands =====
const rest = new discord.REST({ version: '10' }).setToken(token);

rest
     .put(Routes.applicationCommands(user_id), {
          body: commands,
     })
     .then(() => {
          console.log(`Successfully registered ${commands.length} application commands.`);
     })
     .catch((err) => {
          console.log(err);
     })
// ===================================================================
// bot is ready!
// once the bot is ready, its gonna log its information and go online.
// ===================================================================
client.once("clientReady", () => {
     console.log(`
          [${new Date().toLocaleString()}]
          ================================================
          READY: 
          [
               username: ${client.user.username}, 
               id: ${client.user.id}, 
               tag: ${client.user.tag}, 
               status: ${client.user.presence.status}, 
               commands: ${client.commands.size} 
          ], 
          ================================================
          READY TO SERVE IN ${client.guilds.cache.size} GUILD(S)
          ================================================
          CREATED BY: Aaron 'Legend' Augustin
          ================================================
          SOURCE CODE: https://github.com/AnimatingLegend/legbothost-v2
          `  
     );

     client.user.setPresence({
          status: 'idle',
          activities: [{
               name: `${prefix}help || /help`,
               type: discord.ActivityType.Watching
          }]
     });
});
// ===================================================================
// message / prefix handler
// if the message (or command) starts with the prefix (lb- or '/'), the bot will execute the command. 
// ===================================================================
const prefix = 'lb-';

// ===== Message Handler =====
client.on('messageCreate', async (message) => {
     if (message.author.bot || !message.content.startsWith(prefix)) return;

     const args = message.content.slice(prefix.length).trim().split(/ +/);
     const commandName = args.shift().toLowerCase();

     const command = client.commands.get(commandName);
     if (!command) return;

     try {
          await command.execute(message, args);
     } catch (err) {
          console.error(err);
     }
});

// ===== Interaction Handler =====
client.on('interactionCreate', async (interaction) => {
     if (!interaction.isChatInputCommand()) return;

     const command = client.commands.get(interaction.commandName);
     if (!command) return;

     try {
          await command.execute(interaction);
     } catch (err) {
          console.error(err);
          await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
     }
});

client.login(token);