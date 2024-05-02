let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*༺═━━═⊱╊⊰🐤⊱╉⊰═━━═༻*\n*『😈┇اهلا بـك فـي قـائـمـة الاقـسـام┇😈』*\n*✠ ━━ • ━ ‹✤› ━ • ━━ ✠*\n*『🤖┇مـعـلـومـات الـبـوت┇🤖』*\n*✠ ━━ • ━ ‹✤› ━ • ━━ ✠*\n*【🥱┇الـمـنـصـة ⟣ هـيـروكـو】*\n*【🤦🏻‍♂️┇قـبـل الامـر ⟣ . 】*\n*【👽┇عـدد الاوامر ⟣ +300 】*\n*【🌟┇البوت لسه تحت التطوير ف ما تستعجل 】*\n*【 💔┇احبكم وشكرا 🐦💔 】*\n༺━─━─╃⌬〔🐤〕⌬╄─━─━༻*\n> *BY┇ZEZO BOT*'
            },
            body: {
              text: '> استمتع بالبوت'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'زيزو',
                        rows: [
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: 'ببيجبلك رقم المطور',
                            id: '.المطور'
                          }, 
                          {
                                header: 'القايمه', 
                                title: 'القايمه', 
                                description: 'بيجبلك الاوامر', 
                                id: '.القايمه', 
                         } 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['اوامر']

export default handler
