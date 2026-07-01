import fs from 'fs'
import path from 'path'

/**
 * Récupère la liste des créateurs depuis db.json
 * @returns {string[]} Array de numéros
 */
const getCreatorList = () => {
    try {
        const dbPath = path.resolve('./db.json')
        const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
        return db.premiumUser?.c || []
    } catch (e) {
        console.log("Erreur lecture db.json:", e)
        return []
    }
}

/**
 * Vérifie si un numéro est dans la liste creator
 * @param {string} jid - Ex: 24383389567@s.whatsapp.net
 * @returns {boolean}
 */
export const isCreator = (jid) => {
    const num = jid.replace(/@s.whatsapp.net/g, '')
    const creatorList = getCreatorList()
    return creatorList.includes(num)
}

/**
 * Middleware pour protéger les commandes owner uniquement
 * @param {object} sock 
 * @param {object} m 
 * @param {function} next - Fonction à exécuter si c'est le créateur
 * @returns 
 */
export const onlyCreator = async (sock, m, next) => {
    if (!isCreator(m.key.participant || m.key.remoteJid)) {
        return await sock.sendMessage(m.key.remoteJid, { 
            text: `❌ Commande réservée au Créateur du bot.` 
        }, { quoted: m })
    }
    return await next()
}

export default { isCreator, onlyCreator }