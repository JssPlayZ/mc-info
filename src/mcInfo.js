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
}

module.exports = mcInfo;