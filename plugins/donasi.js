let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌「 *Donasi • Emoney* 」
├ Gopay / Dana: 081252848955
├ Pulsa: 081336990737
├ Qris: Minta owner
│ 
└────
_*Donasi ini untuk membeli kuota, biar botnya bisa on terus*_
`.trim(), 'Makasih yang udah donasi', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
