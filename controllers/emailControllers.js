const nodemailer = require("nodemailer")




const sendMail = (to,html,subject) => {
    
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "collinsadi20@gmail.com",
        pass:"sauxvjsakeriedqw"
    }
})
    
const mailOptions = {
    from: "collinsadi20@gmail.com",
    to: to,
    subject: subject,
    html: html
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("error", error)
    } else {
        console.log("Mail Sent")
    }
})

}

module.exports = {sendMail}
