let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*NOVATO(A) III* 🪤'
        : ((user.level >= 3) && (user.level <= 6)) ? '*NOVATO(A) II* 🪤'
            : ((user.level >= 6) && (user.level <= 9)) ? '*NOVATO(A) I* 🪤'
                : ((user.level >= 9) && (user.level <= 12)) ? '*APRENDIS III* 🪚'
                    : ((user.level >= 12) && (user.level <= 15)) ? '*APRENDIS II* 🪚'
                        : ((user.level >= 15) && (user.level <= 18)) ? '*APRENDIS I* 🪚'
                            : ((user.level >= 18) && (user.level <= 21)) ? '*EXPLORADOR(A) III* 🪓'
                                : ((user.level >= 21) && (user.level <= 24)) ? '*EXPLORADOR(A) II* 🪓'
                                    : ((user.level >= 24) && (user.level <= 27)) ? '*EXPLORADOR(A) I* 🪓'
                                        : ((user.level >= 27) && (user.level <= 30)) ? '*MAESTRO(A) III* ⚒️'
                                            : ((user.level >= 30) && (user.level <= 33)) ? '*MAESTRO(A) II* ⚒️'
                                                : ((user.level >= 33) && (user.level <= 36)) ? '*MAESTRO(A) I* ⚒️'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? '*IRON III* 🦾'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? '*IRON II* 🦾'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? '*IRON I* 🦾'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? '*PLATA III* 🔮'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? '*PLATA II* 🔮'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? '*PLATA I* 🔮'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? '*ORO III* 🏅'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? '*ORO II* 🏅'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? '*ORO I* 🏅'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? '*DIAMANTE III* 💎'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? '*DIAMANTE II* 💎'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? '*DIAMANTE I* 💎'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? '*PRO EN GATABOT III* 😼'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? '*PRO EN GATABOT II* 😼'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? '*PRO EN GATABOT I* 😼'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? '*SUPER PRO III* 🎩'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? '*SUPER PRO II* 🎩'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? '*SUPER PRO I* 🎩'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? '*LEGENDARIO(A) III* 🛡️'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? '*LEGENDARIO(A) II* 🛡️'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? '*LEGENDARIO(A) I* 🛡️'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? '*LEYENDA III* 🏆'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? '*LEYENDA II* 🏆'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? '*LEYENDA I* 🏆'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? '*ESTELAR III* ☄️'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? '*ESTELAR II* ☄️'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? '*ESTELAR I* ☄️'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 700)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? '👑 *ÉLITE GLOBAL* 🏁'
                                                                                                                                                                                : 'Star king dragon'


    user.role = role
    return true
    
if (user.level = 6) { 
let m = global.db.data.users[m.sender].exp += 2000
let g = global.db.data.users[m.sender].money += 1000
let d = global.db.data.users[m.sender].limit += 40
conn.sendHydrated(m.chat, `Ah subido de rol ${role}\n gana ${m} exp ${g} GataCoins ${d} diamantes`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['Menu', `.menu`]
], m,)}
}

export default handler
