/**
 * Style des messages DigiX Bot
 * Auteur: Digital Crew 243
 */

const BOT_NAME = "Marlon Bot"
const FOOTER = "🫡Marlon🫡"

/**
 * Encadre un texte dans un style "futuriste"
 * @param {string} title - Titre du menu/commande
 * @param {string} body - Corps du message
 * @param {string} prefix - Préfixe du bot, ex: "."
 * @returns {string}
 */
export const boxMessage = (title, body, prefix = ".") => {
    return `
╭───〔 *${BOT_NAME}* 〕───╮
│ 📌 *${title}*
│
${body.split('\n').map(line => `│ ${line}`).join('\n')}
│
│ ⌨️ Préfixe : ${prefix}
╰───────────────╯

${FOOTER}`
}

/**
 * Message d'erreur stylé
 * @param {string} text 
 * @returns {string}
 */
export const errorMsg = (text) => {
    return `
❌ *ERREUR* ❌
${text}

${FOOTER}`
}

/**
 * Message de succès stylé
 * @param {string} text 
 * @returns {string}
 */
export const successMsg = (text) => {
    return `
✅ *SUCCÈS* ✅
${text}

${FOOTER}`
}

/**
 * Message d'attente / chargement
 * @param {string} text 
 * @returns {string}
 */
export const waitMsg = (text = "Traitement en cours...") => {
    return `
⏳ *${BOT_NAME}*
${text}

${FOOTER}`
}

/**
 * Footer seul, à coller à la fin
 * @returns {string}
 */
export const footer = () => FOOTER

export default { boxMessage, errorMsg, successMsg, waitMsg, footer }