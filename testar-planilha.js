const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./bugtracker.json')

const doc = new GoogleSpreadsheet('1rCf4xbDbGDk6yvS0PHvFt24sCgEf_NPYXUv6Lj_CCbQ')
doc.useServiceAccountAuth(credentials, (err)=> {
    if(err) {
        console.log('Não foi possivel abrir a planilha')
    }else {
        console.log('Planilha aberta')
    }
})