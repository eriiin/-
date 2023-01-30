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
  getRandomCompliment,
  getRandomFeichuan,
  getRandomHuojian,
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
import { Client, GatewayIntentBits, REST, Routes, Partials, ChannelType, AttachmentBuilder, EmbedBuilder } from "discord.js";
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
  if (msg.content.toLowerCase().includes("来ow")||
    msg.content.trim().replaceAll(/\s/g, "").includes("守望")) {
    msg.channel.send("又来坐牢啦？ <:liuHanHuangDou:1002706040913141820> ");
  }
  if (msg.content.trim().replaceAll(/\s/g, "").includes("玩不") ||
    msg.content.trim().replaceAll(/\s/g, "").includes("玩什么") ||
    msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("van不") ||
    msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("van什么") ||
    msg.content.includes("玩啥")) {
    msg.channel.send("玩？玩？？<:shutup:1035387028239556609> ");
  }
  if (msg.content.trim().replaceAll(/\s/g, "").includes("nm") ||
    msg.content === "草" ||
    msg.content.toLowerCase().includes("屌") ||
    msg.content.toLowerCase().includes("sd")) {
    msg.channel.send("温馨提醒：文明上网 <:gunleft:942292749758124094> ");
  }
  if (msg.content.includes("睡了") || msg.content.includes("晚安") ||
    msg.content.includes("886") || msg.content.includes("再见")
  ) {
    // if(msg.member.name){}
    msg.channel.send("睡觉小心鼙鼓 <:oishii:1002704930345324595> ");
  }
  if (msg.content.includes("洗澡") || msg.content.includes("🛀")) {
    msg.channel.send("洗？洗？？<:liuHanHuangDou:1002706040913141820> ");
  }
  
  if (msg.content.trim().replaceAll(/\s/g, "").includes("来点群成员生活日常")) {
    msg.channel.send(getRandomDaily());
  }
  if (msg.content.trim().replaceAll(/\s/g, "") === "好叮") {
    msg.channel.send(getRandomCompliment());
  }
  if (msg.content.trim().replaceAll(/\s/g, "").includes("主播") ||
    msg.content.trim().replaceAll(/\s/g, "").includes("打赏") ) {

    switch(true) {
      case msg.content.trim().replaceAll(/\s/g, "").includes("飞船"):
        // code block
        msg.channel.send(getRandomFeichuan());
        break;
      case  msg.content.trim().replaceAll(/\s/g, "").includes("火箭"):
        // code block
        msg.channel.send(getRandomHuojian());
        break;
      default:
        // code block
        msg.channel.send("https://tenor.com/view/rookie-camp-rookie-money-penize-dolary-gif-14544590");
    }
  }
  
  if (msg.member.voice.channelId && !msg.content.startsWith("<:") &&
      !msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("http") ){
  // play specific audio if member in vc and sent trigger keyword
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("我zhao")) {
      // audio url
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woozaooo.mp3?v=1673165055489";
      // audio len = n sec * 1000
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("死了")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woyaosilaaaaaa.mp3?v=1673234303048";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("en")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/enenen.mp3?v=1673816994052";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("努力")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/hennuli.mp3?v=1675051269447";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("降妖")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/haoxiangyao.mp3?v=1675050819123";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("考掉")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/kaodiao.mp3?v=1675050943913";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("呵呵呵")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/bbxiaosheng.mp3?v=1675054140595";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("吓我")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/biexiawo.mp3?v=1675054211377";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("掉了")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/diaole.mp3?v=1675054251283";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("冲")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/buchongdoubuxing.mp3?v=1673234303431";
      const audioLen = 3500;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("死雷")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/diusilei.mp3?v=1675054320625";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("诶")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/edui.mp3?v=1675054374610";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("昂")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/eng.mp3?v=1675054468833";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("long")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/long.mp3?v=1675054547910";
      const audioLen = 9000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("qs")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/qs.mp3?v=1675054705252";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("hehe")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/laughing.mp3?v=1673817070497";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("阿刁")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/adiao.mp3?v=1674462251933";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("没了")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/meileya.mp3?v=1675055379554";
      const audioLen = 6000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("打")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/da.mp4?v=1674461819205";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("wakuang")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wakuang.mp3?v=1674462629773";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("说得")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/shuodedui.mp3?v=1675055682464";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("sj")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/sj.mp3?v=1675056137472";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("suck")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/suck.mp3?v=1675056151938";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("不玩儿了")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wantmd.mp3?v=1675056179179";
      const audioLen = 6000;
      playNitianAudio(msg, audioUrl, audioLen);

    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("哈")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/hahaha.mp3?v=1673235415643";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("sila")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woyaosile.mp3?v=1674462170799";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (!msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("liuHanHuangDou") &&
        msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("ha")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/ha.mp3?v=1673825473285";
      const audioLen = 3000;
     playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("卧槽")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wocaooo.mp3?v=1675056617306";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("沃雷")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wooleima.mp3?v=1675056682845";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("雷马")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/woliema.mp4?v=1673852975772";
      const audioLen = 4500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("好想")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/bugeijin.mp4?v=1673853048917";
      const audioLen = 6500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("软")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/ruan.mp4?v=1673853151879";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("呼")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wowu.mp4?v=1674460187373";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("tmd")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wtmdn.mp4?v=1674460189302";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("对")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/dui.mp4?v=1673853244142";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("幻灭")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/%E6%B2%A1%E6%A2%A6.mp4?v=1674460601568";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("欺负")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/qifuren.mp4?v=1673853192333";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("烧")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/saoma.mp3?v=1673817174660";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("lj")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/doushilaji.mp3?v=1673817259062";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("友善")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/buyoushan.mp3?v=1673600753933";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("叼")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/diaonia.mp3?v=1673601067276";
      const audioLen = 8000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("唠")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/jiushilao.mp3?v=1673601272160";
      const audioLen = 2000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("经理")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/dajingli.mp3?v=1673678540499";
      const audioLen = 3500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("dan")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/jigedan.mp3?v=1673678529000";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("呜")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/ooaaaa.mp3?v=1673678532279";
      const audioLen = 4500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("b话")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/bhuaduo.mp3?v=1673678542724";
      const audioLen = 4500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
//     if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("高音")) {
      
//       const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/haitunyin.mp3?v=1673678537317";
//       const audioLen = 10000;
//       playNitianAudio(msg, audioUrl, audioLen);
      
//     }
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
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("道理")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/shuoDeDaoLiFullVer.mp3?v=1673235994840";
      const audioLen = 28500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("晚餐")) {
      
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
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("neko") &&
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("大笑")) {
      
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
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("屁眼子") ||
      msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("皮燕子"))      {
 
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/pyz.mp3?v=1673413959307";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("seki"))     {
 
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/sekia.mp3?v=1673592606844";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("无敌")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wudile.mp3?v=1673301803479";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("进")) {
      
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/jinjinjin.mp3?v=1673487399667";
      const audioLen = 8000;
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
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("jj")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/jja.mp3?v=1673249588690";
      const audioLen = 3100;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("难做")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/nanzuo.mp3?v=1673817322469";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("去")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/quququ.mp3?v=1673817383280";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("bt")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/namebt.mp3?v=1673817529112";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("丢")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wodiu.mp3?v=1673818467820";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("狗日")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/gouride.mp3?v=1673820410871";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("吃屎")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/chishi.mp3?v=1673820631835";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("射")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/yaoshele.mp3?v=1673820560655";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("救命")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/jiuming.mp3?v=1673820445464";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("吊")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/diaonimie.mp3?v=1673817425308";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("垃圾")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/lajilo.mp3?v=1673399318416";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("打条毛")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wahahadatiaomao.mp3?v=1673399402206";
      const audioLen = 8000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("p") && 
        !msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("soup")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/guanwopshi.mp3?v=1673400317185";
      const audioLen = 2000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("玩j")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wanjj.mp3?v=1673400394633";
      const audioLen = 5000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("突击")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/goodxiaorizi.mp3?v=1673400499996";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("woo")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/zaiyingyiba.mp3?v=1673400474630";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
     if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("饿")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/eeeeeeeh.mp3?v=1673400875518";
      const audioLen = 10000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("急")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/Ggedan.mp3?v=1673401023290";
      const audioLen = 4500;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("挖矿")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wakuang.mp3?v=1673401167700";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("梦想破")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/Nodream.mp3?v=1673401924333";
      const audioLen = 4000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("吊你")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/diaoni.mp3?v=1673402093042";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("没梦想")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/wenzinodream.mp3?v=1673402229408";
      const audioLen = 3000;
      playNitianAudio(msg, audioUrl, audioLen);
      
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("加密通话")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/ganma.mp3?v=1673402396546";
      const audioLen = 7000;
      playNitianAudio(msg, audioUrl, audioLen);
            
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("撒谎")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/sahuang.mp3?v=1674536583047";
      const audioLen = 1500;
      playNitianAudio(msg, audioUrl, audioLen);
                
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("干死他")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/gansita.mp3?v=1674537946079";
      const audioLen = 3500;
      playNitianAudio(msg, audioUrl, audioLen);
                   
    }
    if (msg.content.toLowerCase().trim().replaceAll(/\s/g, "").includes("傻")) {
      const audioUrl = "https://cdn.glitch.global/b652c6d7-2aa4-4954-b08a-d754ecd5ddd6/shade.mp3?v=1674543652310";
      const audioLen = 3000;
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
    
    // TODO: add command for wishing
    
    
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
