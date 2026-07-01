import fs from 'fs'
import path from 'path'

const CONFIG_PATH = path.resolve('./config.json')

/**
 * Charge tout le config.json
 * @returns {object}
 */
export const loadConfig = () => {
    try {
        const raw = fs.readFileSync(CONFIG_PATH, 'utf-8')
        return JSON.parse(raw)
    } catch (e) {
        console.log("Erreur loadConfig:", e)
        return {}
    }
}

/**
 * Sauvegarde le config.json
 * @param {object} data 
 */
export const saveConfig = (data) => {
    try {
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 4))
        return true
    } catch (e) {
        console.log("Erreur saveConfig:", e)
        return false
    }
}

/**
 * Récupère la config d’un user par son numéro
 * @param {string} number - Ex: "24383389567"
 * @returns {object}
 */
export const getUserConfig = (number) => {
    const config = loadConfig()
    return config.users?.[number] || null
}

/**
 * Modifie une valeur dans la config d’un user et sauvegarde
 * @param {string} number - Ex: "24383389567"
 * @param {string} key - Ex: "autoreact"
 * @param {any} value - Ex: true
 * @returns {boolean}
 */
export const setUserConfig = (number, key, value) => {
    const config = loadConfig()
    if (!config.users?.[number]) return false

    config.users[number][key] = value
    return saveConfig(config)
}

/**
 * Toggle true/false d’une option
 * @param {string} number 
 * @param {string} key 
 */
export const toggleConfig = (number, key) => {
    const userCfg = getUserConfig(number)
    if (!userCfg || typeof userCfg[key]!== 'boolean') return null
    
    const newVal =!userCfg[key]
    setUserConfig(number, key, newVal)
    return newVal
}

export default { loadConfig, saveConfig, getUserConfig, setUserConfig, toggleConfig }