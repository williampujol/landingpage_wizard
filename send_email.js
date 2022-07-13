const express = require('express')
const nodemailer = require('nodemailer');
require(dotenv).config()
const app = express()

const port = 3000

const user = process.env.EMAIL_USER
const pass = process.env.PASS

const btn = document.getElementById("send");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const name = document.getElementById("input_name").value;
    const phone = document.getElementById("input_phone").value;
    const email = document.getElementById("input_email").value;

    console.log(name, phone, email);
})

app.get('/', (req, res) => res.send('Email enviado!'))

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host:"smtp.hostinger.com",
        port: 587,
        auth: {user,pass}
    })

    transporter.sendMail({
        from: user,
        to: "william@wizardsantacruz.com",
        subject: "NOVO LEAD | LANDING PAGE WIZARD",
        text: `Olá! Você tem um novo Lead. Segue abaixo os dados para contato: ${name}, ${phone}, ${email}`,
    }).then(info=>{
        res.send(info)
    }).catch(error =>{
        res.send(error)
    })

})

app.listen(port, () => console.log(`Running on port ${port}`))