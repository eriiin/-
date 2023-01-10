import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import {
  VerifyDiscordRequest,
  getRandomEmoji,
  getRandomNiTian,
  getRandomDaily,
  playNitianAudio,
  DiscordRequest,
} from "./utils.js";
import { getShuffledOptions, getResult } from "./game.js";
import {
  HELLO_COMMAND,
  CHALLENGE_COMMAND,
  TEST_COMMAND,
  HasGuildCommands,
} from "./commands.js";

import Discord from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  VoiceConnectionStatus,
  generateDependencyReport,
} from "@discordjs/voice";

var bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

bot.on("ready", (message) => {
  console.log("ready");
});

bot.on("debug", console.log).on("warn", console.log);

bot.on("uncaughtException", (err) => {
  console.log(err);
});

bot.on("error", (error) => {
  console.log("Error occured :", error);
});

bot.on("messageCreate", (msg) => {
  console.log("messageCreate: " + msg.content);
  if (msg.content === "你好") {
    msg.channel.send("好？不好？好？\n我不好，试试输入“/hello”指令让我开心一下。");
  }
  if (msg.content.toLowerCase().includes("ow")||
    msg.content.trim().replaceAll(/\s/g, "").includes("守望")) {
    msg.channel.send("又来坐牢啦？ <:liuHanHuangDou:1002706040913141820> ");
  }
  if (
    msg.content.trim().replaceAll(/\s/g, "").includes("玩不") ||
    msg.content.trim().replaceAll(/\s/g, "").includes("玩什么") ||
    msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("van不") ||
    msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("van什么") ||
    msg.content.includes("玩啥")
  ) {
    msg.channel.send("玩？玩？？玩你妹 <:shutup:1035387028239556609> ");
  }
  if (
    msg.content.trim().replaceAll(/\s/g, "").includes("nm") ||
    msg.content === "草" ||
    msg.content.toLowerCase().includes("屌") ||
    msg.content.toLowerCase().includes("sd")
  ) {
    msg.channel.send("温馨提醒：文明上网 <:gunleft:942292749758124094>  ");
  }
  if (msg.content.includes("睡了") || msg.content.includes("晚安") ||
    msg.content.includes("886") || msg.content.includes("再见")
  ) {
    msg.channel.send("赶紧爬 <:liuHanHuangDou:1002706040913141820>");
  }
  if (msg.content.includes("洗澡") || msg.content.includes("🛀")) {
    msg.channel.send("洗？洗？？洗你妹 <:liuHanHuangDou:1002706040913141820> ");
  }
  
  if (msg.content.trim().replaceAll(/\s/g, "").includes("来点群成员生活日常")) {
    msg.channel.send(getRandomDaily());
  }
  
  if (msg.member.voice.channelId){
  // play specific audio if member in vc and sent trigger keyword
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("我zhao")) {
      // audio url
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woozaooo.mp3?v=1673165055489";
      // audio len = n sec * 1000
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("死了aaa")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woyaosilaaaaaa.mp3?v=1673234303048";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("冲")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/buchongdoubuxing.mp3?v=1673234303431";
      const audioLen = 3500;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("哈哈")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/hahaha.mp3?v=1673235415643";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("嗯")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wenziengine.mp3?v=1673235507446";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("垃圾")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/lajilo.mp3?v=1673235645839";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("浮夸")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/fukua373.mp3?v=1673235920680";
      const audioLen = 28500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("说的道理")
    ) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/shuoDeDaoLiFullVer.mp3?v=1673235994840";
      const audioLen = 28500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("蚊子晚餐")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/%E8%9A%8A%E5%AD%90%E6%99%9A%E9%A5%AD.mp3?v=1673236317401";
      const audioLen = 6000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("汤") &&
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("发电")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/datiaoj.mp3?v=1673236122628";
      const audioLen = 11600;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("neko") &&
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("大笑")
    ) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/12fadian.mp3?v=1673236621634";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("12") &&
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("发电")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/12fadian.mp3?v=1673236621634";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("baba") ||
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("ji")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/babaji.mp3?v=1673237472364";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("b动静")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/bdongjing.mp3?v=1673234484571";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("无敌")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wudile.mp3?v=1673301803479";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("下了") ||
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("晚安")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/xialebebe.mp3?v=1673245377855";
      const audioLen = 8000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("你爹") ||
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("爸爸")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woshinidie.mp3?v=1673245452370";
      const audioLen = 6000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("雷普") ||
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("想被")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/leipu.mp3?v=1673245575400";
      const audioLen = 6000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("j")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/jja.mp3?v=1673249588690";
      const audioLen = 3600;
      playNitianAudio(msg, audioUrl, audioLen);
    }
  }
});

bot.login(process.env.DISCORD_TOKEN);

// Create an express app
const app = express();
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Store for in-progress games. In production, you'd want to use a DB
const activeGames = {};

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */
app.post("/interactions", async function (req, res) {
  // Interaction type and data
  const { type, id, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    // "test" guild command
    if (name === "test") {
      // Send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // Fetches a random emoji to send from a helper function
          content: "滚 " + getRandomEmoji(),
        },
      });
    }
    if (name === "hello") {
      // Send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // Fetches a random emoji to send from a helper function
          content: getRandomNiTian(),
        },
      });
    }
    // "challenge" guild command
    if (name === "challenge" && id) {
      const userId = req.body.member.user.id;
      // User's object choice
      const objectName = req.body.data.options[0].value;

      // Create active game using message ID as the game ID
      activeGames[id] = {
        id: userId,
        objectName,
      };

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // Fetches a random emoji to send from a helper function
          content: `Rock papers scissors challenge from <@${userId}>`,
          components: [
            {
              type: MessageComponentTypes.ACTION_ROW,
              components: [
                {
                  type: MessageComponentTypes.BUTTON,
                  // Append the game ID to use later on
                  custom_id: `accept_button_${req.body.id}`,
                  label: "Accept",
                  style: ButtonStyleTypes.PRIMARY,
                },
              ],
            },
          ],
        },
      });
      // return res.send({
      //   type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      //   data: {
      //     // Fetches a random emoji to send from a helper function
      //     content: '玩nm，给爷爬 ' + getRandomEmoji(),
      //   },
      // });
    }
  }

  /**
   * Handle requests from interactive components
   * See https://discord.com/developers/docs/interactions/message-components#responding-to-a-component-interaction
   */
  if (type === InteractionType.MESSAGE_COMPONENT) {
    // custom_id set in payload when sending message component
    const componentId = data.custom_id;

    if (componentId.startsWith("accept_button_")) {
      // get the associated game ID
      const gameId = componentId.replace("accept_button_", "");
      // Delete message with token in request body
      const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}/messages/${req.body.message.id}`;
      try {
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            // Fetches a random emoji to send from a helper function
            content: "What is your object of choice?",
            // Indicates it'll be an ephemeral message
            flags: InteractionResponseFlags.EPHEMERAL,
            components: [
              {
                type: MessageComponentTypes.ACTION_ROW,
                components: [
                  {
                    type: MessageComponentTypes.STRING_SELECT,
                    // Append game ID
                    custom_id: `select_choice_${gameId}`,
                    options: getShuffledOptions(),
                  },
                ],
              },
            ],
          },
        });
        // Delete previous message
        await DiscordRequest(endpoint, { method: "DELETE" });
      } catch (err) {
        console.error("Error sending message:", err);
      }
    } else if (componentId.startsWith("select_choice_")) {
      // get the associated game ID
      const gameId = componentId.replace("select_choice_", "");

      if (activeGames[gameId]) {
        // Get user ID and object choice for responding user
        const userId = req.body.member.user.id;
        const objectName = data.values[0];
        // Calculate result from helper function
        const resultStr = getResult(activeGames[gameId], {
          id: userId,
          objectName,
        });

        // Remove game from storage
        delete activeGames[gameId];
        // Update message with token in request body
        const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}/messages/${req.body.message.id}`;

        try {
          // Send results
          await res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: { content: resultStr },
          });
          // Update ephemeral message
          await DiscordRequest(endpoint, {
            method: "PATCH",
            body: {
              content: "吴迪拉 lj佬 " + getRandomEmoji(),
              components: [],
            },
          });
        } catch (err) {
          console.error("Error sending message:", err);
        }
      }
    }
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");

  // Check if guild commands from commands.json are installed (if not, install them)
  HasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, [
    HELLO_COMMAND,
    TEST_COMMAND,
    CHALLENGE_COMMAND,
  ]);
});
