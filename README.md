[![downloadsBadge](https://img.shields.io/npm/dt/mc-info.js?style=for-the-badge)](https://npmjs.com/mc-info.js) [![versionBadge](https://img.shields.io/npm/v/mc-info.js?style=for-the-badge)](https://npmjs.com/mc-info.js)

# A helpful package for fetching info about Minecraft server

# Example code
```javascript
const { mcInfo } = require('mc-info.js');
const mcinfo = new mcInfo();

async function getServer() {
    const server = await mcinfo.fetchServer("mc.hypixel.net");
    console.log(server);
}

getServer();

/*                         Info you get in JSON format
 {
   ip: '172.65.238.120',
   port: 25565,
   debug: {
     ping: true,
     query: false,
     srv: false,
     querymismatch: false,
     ipinsrv: false,
     cnameinsrv: false,
     animatedmotd: false,
     cachetime: 1632504539,
     apiversion: 2
   },
   motd: {
     raw: [
       '             §aHypixel Network  §c[1.8-1.17]',
       '            §d§lMURDER MYSTERY UPDATE'
     ],
     clean: [
       '             Hypixel Network  [1.8-1.17]',
       '            MURDER MYSTERY UPDATE'
     ],
     html: [
       '             <span style="color: #55FF55">Hypixel Network  </span><span style="color: #FF5555">[1.8-1.17]</span>',
       '            <span style="color: #FF55FF"><span style="font-weight: bold;">MURDER MYSTERY UPDATE</span></span>'
     ]
   },
   players: { online: 79823, max: 200000 },
   version: 'Requires MC 1.8 / 1.17',
   online: true,
   protocol: 47,
   hostname: 'mc.hypixel.net',
   favicon: 'https://mc-api.net/v3/server/favicon/mc.hypixel.net',
   thumbnail: 'http://status.mclive.eu/mc.hypixel.net/mc.hypixel.net/25565/banner.png'
*/
```
```javascript
async function getSkin() {
    const user = await mcinfo.fetchSkin("Dream");
    console.log(user);
}

getSkin();

/*              Skin
{
  name: 'Dream',
  id: 'ec70bcaf702f4bb8b48d276fa52a780c',
  download: 'https://minotar.net/download/Dream',
  skin: 'https://mc-heads.net/skin/ec70bcaf702f4bb8b48d276fa52a780c',
  image: 'https://minecraftskinstealer.com/api/v1/skin/render/fullbody/Dream',
  head: 'https://mc-heads.net/head/ec70bcaf702f4bb8b48d276fa52a780c',
  helm: 'https://mc-heads.net/avatar/ec70bcaf702f4bb8b48d276fa52a780c',
  cape: 'https://mc-heads.net/cape/ec70bcaf702f4bb8b48d276fa52a780c'
}
*/
```
![fullbody](https://user-images.githubusercontent.com/67428461/135573744-b1742db7-ce96-44b5-9a7e-241c63adefef.png)
