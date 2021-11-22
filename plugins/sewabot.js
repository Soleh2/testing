let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌「 List Berlangganan 」
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
- Pulsa (Telkom): 081336990737 (+5.000)
- GoPay: 081252848955
- Dana: 081252848955
- Qris all payment
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 Bulan', description: "Rp20.000\nSewa bot Selama 2 bulan.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp10.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp5.000\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
