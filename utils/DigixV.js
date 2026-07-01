/**
 * DigiX Bot - Informations Version
 * Fichier: utils/Digixv.js
 */

export const DIGIX_VERSION = "v1.0.0"
export const BOT_NAME = "DigiX Bot"
export const DEVELOPER = "Digital Crew 243"
export const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/" // mets ton lien ici
export const GITHUB = "https://github.com/" // mets ton lien ici

export const CHANGLOG = `
🆕 *Nouveautés v1.0.0*
1. Système Premium + Sudo
2. Anti-link auto
3. Réaction auto ⚡
4. Mode Privé/Public
5. Sticker, AI, Menu stylé
`

/**
 * Renvoie le message info complet du bot
 * @param {string} prefix - Le préfixe du bot
 * @returns {string}
 */
export const getBotInfo = (prefix = ".") => {
    return `
╭───〔 *${BOT_NAME}* 〕───╮
│ 🤖 Version : ${DIGIX_VERSION}
│ 👑 Dev : ${DEVELOPER}
│ ⌨️ Préfixe : ${prefix}
│ 📢 Channel : ${WHATSAPP_CHANNEL}
╰───────────────╯

${CHANGLOG}
`
}

export default { 
    DIGIX_VERSION, 
    BOT_NAME, 
    DEVELOPER, 
    getBotInfo, 
    CHANGLOG 
}