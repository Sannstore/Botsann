const fs = require("fs");
global.d = new Date();
global.calender = d.toLocaleDateString("id");

global.namabot = "Nova Store"; // Nama bot
global.namaowner = "Nova Store"; // Nama owner
global.owner = ["6281244286074"]; // Nomor owner
global.invo = "LSD" + "-"; // LSD nya aja yang diganti
global.pp_bot = "https://telegra.ph/file/63cb924ada55d8f7463fd.png"; // upload di telegra.ph
global.web = "https://chat.whatsapp.com/DwVxacM5tc55VOXdA80lp4"; // Bebas mau link gc ataupun apa

// Digiflazz
const digiuser = "wasikeWjem9D"; // Username
const digiapi = "dc641c74-0bce-406e-beee-89d91080a2a2"; // Production key

// Keuntungan role
/*
RUMUS:
(Nilai persentase - 1) * 100
*/
const bronze = 1.015; // 1.5% (1.015 - 1 * 100 = 0.015 * 100 = 1.5%)
const silver = 1.01; // 1% (1.01 - 1 * 100 = 0.01 * 100 = 1%)
const gold = 1.005; // 0.5% (1.005 - 1 * 100 = 0.005 * 100 = 0.5%)

module.exports = {
  digiuser,
  digiapi,
  bronze,
  silver,
  gold,
};

let file = require.resolve(__filename);
const chalk = require("chalk");
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.greenBright(`Lutz Store Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
