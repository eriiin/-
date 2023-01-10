import fetch from 'node-fetch';
import { verifyKey } from 'discord-interactions';

import Discord from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  VoiceConnectionStatus,
  generateDependencyReport,
} from "@discordjs/voice";

export function VerifyDiscordRequest(clientKey) {
  return function (req, res, buf, encoding) {
    const signature = req.get('X-Signature-Ed25519');
    const timestamp = req.get('X-Signature-Timestamp');

    const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
    if (!isValidRequest) {
      res.status(401).send('Bad request signature');
      throw new Error('Bad request signature');
    }
  };
}

export async function DiscordRequest(endpoint, options) {
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  // Use node-fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)'
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  return res;
}

// Simple method that returns a random emoji from list
export function getRandomEmoji() {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export function getRandomNiTian() {
  const nitianList = ['555你是依托答辩😭','五五欸欸啊啊得个得个😄','你真是个sb😌','wow（电棍声）🤓',
                      '我是你爹😎','哈哈，举办了😤','你好，第一天来这个频道，感觉像家一样🤖','信誉毛巾 遇水变大变高🧻',
                      '我是你爷爷😶‍🌫️','哎哟米诺🌏','芜（汤声）📸','吃香菇吃香菇吃香菇🍄','笨比 焯了👋',
                      '今天去购物了 超市里 扫货🌊','今天开车上高速了 前面的车 载重 超了✨', '？\n你再说一翅？🍗'];
  return nitianList[Math.floor(Math.random() * nitianList.length)];
}

export function getRandomDaily() {
  const dailyList = ['<:soupWatching:1012882586030317619>  打了 <:373high:948851215490486303> 的 🍑', 
                      '<:373high:948851215490486303> 🫒 了 <:soupWatching:1012882586030317619>  的 🚪',
                     '<:soupWatching:1012882586030317619> 希望群里的大家 战暴 他的 🍑',
                     '<:LOL:998435504796225596> 想要查询您的 户口📜📋',
                     '<:bushchick:957824298112933888> 说：我早谢啦！<:gee:1002694442836308018>',
                     "<:soupWatching:1012882586030317619> 说：蚊子在20岁时能在30分钟内carry你ow连胜30把，但他现在30岁了，只能吃三碗饭 <:kindsenior:1002693471846547526> "];
  return dailyList[Math.floor(Math.random() * dailyList.length)];
}

export function playNitianAudio(msg, audioUrl, audioLen) {
  console.log(msg.channelId, msg.member.voice.channel.id, msg.guildId);
  const connection = joinVoiceChannel({
    selfDeaf: false,
    channelId: msg.member.voice.channel.id,
    guildId: msg.guildId,
    adapterCreator: msg.guild.voiceAdapterCreator,
  });

  const resource = createAudioResource(audioUrl, { inlineVolume: true });

  const player = createAudioPlayer();
  connection.on(VoiceConnectionStatus.Ready, () => {
    console.log(
      "The connection has entered the Ready state - ready to play audio!"
    );

    const subscription = connection.subscribe(player);

    player.play(resource);

    if (subscription) {
      // unsub after n sec
      setTimeout(() => subscription.unsubscribe(), audioLen);
    }
    setTimeout(() => connection.destroy(), audioLen);
  });
  
  return 0;
}

export const dict = {};

// export const 
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
