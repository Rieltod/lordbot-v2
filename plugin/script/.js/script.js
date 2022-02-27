let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*Riel Botz Menggunakan Script*
github.com/Rieltod/lordbot-aq-tes
_*Jangan Lupa Follow Sama Kasi Star Ya bnh*_

`.trim(), m)
}
handler.help = ['script']
handler.tags = ['main']
handler.command = /^(script)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
