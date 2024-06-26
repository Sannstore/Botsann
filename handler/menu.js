// User
module.exports.helpMenu = (pushname, sender, saldo, role) => {
  return `
╭───═[ *INFO ME* ]═─────⋆
│╭───────────────···
││» 𝙽𝙰𝙼𝙰 : ${pushname}
││» 𝙽𝙾𝙼𝙾𝚁 : ${sender}
││» 𝚂𝙰𝙻𝙳𝙾 : ${saldo}
││» 𝚁𝙾𝙻𝙴 : ${role}
│╰───────────────···
├─═[ *STORE MENU* ]═───⋆
│╭───────────────···
││» .cektrx
││» .topup
││» .code
││» .list
││» .me
│╰───────────────···
╰─────© Ɲꪮ᥎ᥲ Ⲋtꪮɾꫀ─────⋆`;
};

// Owner
module.exports.helpOwner = (pushname, sender, saldo, role) => {
  return `
╭───═[ *INFO ME* ]═─────⋆
│╭───────────────···
││» 𝙽𝙰𝙼𝙰 : ${pushname}
││» 𝙽𝙾𝙼𝙾𝚁 : ${sender}
││» 𝚂𝙰𝙻𝙳𝙾 : ${saldo}
││» 𝚁𝙾𝙻𝙴 : ${role}
│╰───────────────···
├─═[ *OWNER MENU* ]═───⋆
│╭───────────────···
││» .addlist
││» .updatelist
││» .dellist
││» .setproses
││» .changeproses
││» .delsetproses
││» .setdone
││» .changedone
││» .delsetdone
││» .proses
││» .done
││» .hidetag
││» .listuser
││» .cektpay
││» .cekdigi
││» .setrole
││» .addsaldo
││» .cekip
││» .kick
│╰───────────────···
╰─────© Ɲꪮ᥎ᥲ Ⲋtꪮɾꫀ─────⋆`;
};

// Profile
module.exports.profile = (pushname, sender, saldo, role) => {
  return `
╭───═[ *PROFILE* ]═─────⋆
│╭───────────────···
││» 𝙽𝙰𝙼𝙰 : ${pushname}
││» 𝙽𝙾𝙼𝙾𝚁 : ${sender}
││» 𝚂𝙰𝙻𝙳𝙾 : ${saldo}
││» 𝚁𝙾𝙻𝙴 : ${role}
│╰───────────────···
╰─────© Ɲꪮ᥎ᥲ Ⲋtꪮɾꫀ─────⋆`;
};

let file = require.resolve(__filename);
const chalk = require("chalk");
const fs = require("fs");
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.greenBright(`Update In ${__filename}`));
  delete require.cache[file];
  require(file);
});
