//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Lagos,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "ooux81hycrp6fp47wlxp90b80b8hc1xwnju4q71e8p1pfwj9hwjhc6002gh84tmo";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2349121214408";
global.sudo = process.env.SUDO || "2349121214408";
global.owner = process.env.OWNER_NUMBER || "2349121214408";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElsdDdIS2lucFBGbjlFVGtjTGNyZkV5RGhJR0h6ZzkxY05lUUJma2kwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWg4d2twMHl1Q3lMVGZKNG9uSG5pOG1ZNUpnY0NpZE85Qis5T0pKMG9qND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ21zT2J4a0MxMjR3MlRqRUYxeFp1RDFkT2N5YnZ3WXBzWS83Y1h3UEY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvLys4bEVVOW9BN3l3WDdZUVlhODlVeUw0T2tZdVF2SFJjRGVNYVg2R1U4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNMZ09mZnM4ZUkrZWhOK3dOeUtmWmFHc3l6MnB2OVNBc1lqL2VhZmU1Vnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMxVU1FbkVRajVwTnRKTC9BYy9HR1Q2U3p1MTFkSHFnMWNQMUt5anhUbm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xHb0hoSDBhM0dNNmg5NnhGWWpSKzhua3FHeHhzdzQ0M0dBcTZNdzgzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWRIOG93TTdKajJNeUkzYUk3VDNCbzFFSHd6NHN4cUFDT1pnRWJFelpnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0rSmhqNkJBVXNJT2dmSndsVzhPc2lVRVNpMXZKTVFaa2RSVGo4YnJKc0g3d294NExSMzIzczlVT3Z5RjIwczRCdDhxU0VYdmk1WVFpQkhGU1F6c0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJ5TkZZUTBsaERReVBZUzkzYXJBbzBqamVUaGZ3MEI3cnkrREwwcGwrSWNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjEyMTQ0MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkRCMUMzNDMxODk1RkYxNEYyOEVBNzM1ODQ0RTQ0MTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTI1MTcyNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMTIxNDQwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNjkzQjRDQTBDRTFFMkJENzQyQzZCNTgwNEQwREExMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5MjUxNzMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTIxMjE0NDA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0Q0REQTM0REU1RDAwRDk4Qjg1NTA3QTk5QTJCRUMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkyNTE3NDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjEyMTQ0MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTUxODBGQzFCNUIyQTlENTFFNTdENEJEODIyNTg5M0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTI1MTc1OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoienBON2JsdXNRd2FPeEFTNHViYUdaQSIsInBob25lSWQiOiI5MjUyZDBkOC1hOWZkLTQ3ZjYtOGYzOC1hYTIwYTYzNzliNzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDViK0NFY1ZabHFTbCtKazNoZHBUUU4xMnY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVVzBwMXlZb2JVVHRZN3ZWS2JDeUtsVlFxYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIQVgxVFhYWSIsIm1lIjp7ImlkIjoiMjM0OTEyMTIxNDQwODo0OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJAMXp6eSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnZMdDdjR0VQZmw1ck1HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRjk0ZjJDMXhrby91VitsbXh0MUMyaFE4Q0hVMWwySWJpSWtrVnZsTGJWdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUVNxNGJaUWxaMkhWbnFQOFhZL090Ykw0cjM3eVV6akoxbFhZMnY1bU5teWhyRmxIME9RcGF6OEVvVWJrZFBSMjVWKzVzSVB2ZHF3UlE0dUdmRytTRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlYyaGQ3aENTNlBlY1podytjK1RGUlRCTURrQ2ZzM0FBRWpoYWRKeXQ1ZHNGclZaUEkwT1BZVXRta1NtbEF3OWdGZURoeXp0dVBwOUgyUjZzT09lWERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMTIxNDQwODo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSZmVIOWd0Y1pLUDdsZnBac2JkUXRvVVBBaDFOWmRpRzRpSkpGYjVTMjFjIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MjUxOTA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJtUSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is IZZY 𝐌𝐃",
  author: process.env.PACK_AUTHER || "IZZY-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "IZZY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "IZZY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
