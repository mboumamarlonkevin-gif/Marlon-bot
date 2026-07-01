import pkg from '@whiskeysockets/baileys'
const { proto } = pkg

/**
 * Faire réagir un message avec un emoji
 * @param {object} sock - La connexion Baileys 
 * @param {object} m - Le message reçu
 * @param {string} emoji - L'emoji à mettre. Ex: "⚡"
 */
export const react = async (sock, m, emoji = "⚡") => {
    try {
        const reactionMessage = {
            react: {
                text: emoji,
                key: m.key
            }
        }
        await sock.sendMessage(m.key.remoteJid, reactionMessage)
    } catch (e) {
        console.log("Erreur react:", e)
    }
}

/**
 * Réaction auto selon config.autoreact
 * @param {object} sock 
 * @param {object} m 
 * @param {object} config - Ton config.json user
 */
export const autoReact = async (sock, m, config) => {
    if (!config?.autoreact) return
    const emoji = config.reaction || "⚡"
    await react(sock, m, emoji)
}

export default { react, autoReact }