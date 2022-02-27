let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • axis [083813417529]
│ • axis semua banh
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282146218274
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
