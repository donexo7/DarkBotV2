let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`*_ð¸TOP 10 OTAKUS DEL GRUPOð¸_*
    
*_1.- ð®${toM(a)}ð®_*
*_2.- ð·${toM(b)}ð·_*
*_3.- ð®${toM(c)}ð®_*
*_4.- ð·${toM(d)}ð·_*
*_5.- ð®${toM(e)}ð®_*
*_6.- ð·${toM(f)}ð·_*
*_7.- ð®${toM(g)}ð®_*
*_8.- ð·${toM(h)}ð·_*
*_9.- ð®${toM(i)}ð®_*
*_10.- ð·${toM(j)}ð·_*`, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })  
}
handler.help = ['toppt']
handler.tags = ['main']
handler.command = ['topotakus','topotaku','topotak','toptakus']
handler.group = true

module.exports = handler
