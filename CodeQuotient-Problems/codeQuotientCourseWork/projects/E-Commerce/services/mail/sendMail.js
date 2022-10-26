const Mailjet = require('node-mailjet')

const mailjet = new Mailjet({
    apiKey:"4d463fd8a351c9d75182fa6425be91c1",//public
    apiSecret:"44a7ad01cb70bd26ad26194a67f533d1"//private
})

module.exports.sendMail = async function (email, subject, innerHTML) {
    return await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
        {
            From: {
            Email: "shivangv123@outlook.com",
            Name: 'Me',
            },
            To:email,
            Subject: subject,
            HTMLPart:innerHTML,
        },
        ],
    })
}