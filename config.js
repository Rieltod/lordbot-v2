global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/L4wHUhXDZQyIX9d8eDNV76', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6282146218274': { // put your number here
    name: 'Owner Lord Riel (Creator Botz)',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6282146218274': { // put your number here
    name: 'Riel (Creator2 Botz)',
    isDev: true,
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6282146218274': { // put your number here
    name: 'Riel (Testing Botz',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6282146218274': {
    name: 'Riel Gans',
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '13479805233': {} // ignore if you don't want anything, like name dll
}
global.mods = ['13479805233'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Copyright Riel Botz'
global.author = 'Riel Botz Best Bot\nBattry: false\nCopyright By ©Rielxzy '

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
