# Legbot v2

Legbot v2 is a modern reboot of my original discord bot [Legbot-v1](https://github.com/AnimatingLegend/legbothost), which was created back in 2021 with my friend [colorlol](https://github.com/colorlol).
This new version is built with a cleaner structure, updated libraries, and a larger set a features It includes moderation tools. admin utilities, music playback, and general fun commands, all running on [Node.js](https://nodejs.org/en) & [Discord.js](https://discord.js.org/).

## Features
### Moderation / Admin tools
- Kick, Ban, Timeout, Purge
- User info and server info commands
- Role management (depending on your role perms)
### Music Commands
- Join & leave VC's
- Play songs from YouTube
- Queue System
- Pause, Resume, Skip Features
### Utility Commands
- Help menu (with embed design)
- Ping, Uptime, Bot statistics
- Prefix-based command handling (`lb-`)

## Dependencies
If you haven't already install [Node.js](https://nodejs.org/en) (perferably a more recent version).

To verify your installation go to your cmd terminal and write: ``node -v`` or ``npm -v``.

**WE ARE STILL WORKING ON ALL THE DEPENDECIES YOU NEED FOR THIS BOT BUT FOR NOW INSTALL THE BASICS**

Start off with `npm install`, followed by whatever dependency you need to install (eg. npm install discord.js)
```
discord.js
@discordjs/rest
```

## Building
Building is somewhat of a tricky part. we first need to add our API token.

### Current File Structure
```
└── legbothost-v2/
    ├── node_modules/
    │   └── public/
    │       ├── api/
    │       │   └── **config.json**
    │       └── commands/
    │           └── about.js
    ├── .gitignore
    ├── deploy.js
    ├── main.js
    ├── package-lock.json
    ├── package.json
    └── README.md
```

What you need to do, is go to the `public/` folder and create an `api` folder. afterwards, go into the api folder and create a file called `config.json`.

Once made, put this inside the file:
```
{
     "token": "YOUR_DISCORD_BOT_TOKEN",
     "user_id": "YOUR_DISCORD_BOT_USER_ID"
}
```

Once you add your token and user id, and if you downloaded all the dependecies needed, then you're ready to build the game !

to start the bot up, type `node main.js`. and the bot should be online.
  
## Contributing
If you want to contribute and expand onto Legbots features then feel free to send out PR's and Report / Fix issues !

# Thank you for using Legbot :)