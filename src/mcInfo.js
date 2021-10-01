const fetch = (...args) => import("node-fetch").then(({ default: df }) => df(...args));

class mcInfo {
    async fetchServer(serverName) {
        if (typeof serverName !== 'string') {
            throw new Error("Given parameter is not string.")
        }
        const server = await fetch("https://api.mcsrvstat.us/2/" + serverName)
        const body = await server.json()
        if (body && body.online) {
            delete body.icon
            body['favicon'] = `https://mc-api.net/v3/server/favicon/${serverName}`
            body['thumbnail'] = `http://status.mclive.eu/${serverName}/${serverName}/25565/banner.png`
            return body
        } else {
            throw new Error("Something went wrong or the server is not found/offline.")
        }
    }
    async fetchSkin(userName) {
        if (typeof userName !== 'string') {
            throw new Error("Given parameter is not a string.")
        }
        const user = await fetch("https://api.mojang.com/users/profiles/minecraft/" + userName)
        if (user.status === 200 && user.statusText === 'OK') {
            const body = await user.json()
            body['download'] = `https://minotar.net/download/${body.name}`
            body['skin'] = `https://mc-heads.net/skin/${body.id}`
            body['image'] = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${body.name}`
            body['head'] = `https://mc-heads.net/head/${body.id}`
            body['helm'] = `https://mc-heads.net/avatar/${body.id}`
            body['cape'] = `https://mc-heads.net/cape/${body.id}`
            return body
        } else {
            throw new Error("User not found or something went wrong.")
        }
    }
}

module.exports = mcInfo;