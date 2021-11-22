let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Moon-Bot

「 Kebijakan Privasi 」
1. Moon-bot tidak akan merekam data riwayat chat user.
2. Moon-bot tidak akan menyebarkan nomor users.
3. Moon-bot tidak akan menyimpan media yang dikirimkan oleh users.
4. Moon-bot tidak akan menyalah gunakan data data users.
5. Owner Moon-bot berhak melihat data riwayat chat users.
6. Owner Moon-bot berhak melihat status users.
7. Owner Moon-bot dapat melihat riwayat chat, dan media yang dikirimkan users.

「 Peraturan Moon-Bot 」
1. Users dilarang TELEPEON maupun VC nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

「 Syarat Ketentuan Moon-Bot 」
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. Moon-bot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. Moon-bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Moon-bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Moon-bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

-Moon ®2021
-Nando

Peraturan: 1 Oktober 2021
`.trim()
    conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), teks, © Moon, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['peraturan']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler
