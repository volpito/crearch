const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: "Un nouveau client :)", // Subject line
      html: `
      <p className='py-4 text-center'>Un nouveau message est arrivé !</p>
      <h3>A lire ci-après :</h3>
      <ul>
        <li>Nom: ${req.body.lastName}, ${req.body.firstName}</li>
        <li>Téléphone: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
        <li>Entreprise: ${req.body.company}</li>
        <li>Message: ${req.body.ask}</li>
        <li>Comment nous ont-ils connu : ${req.body.knowHow}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Il semble que le message n'ait pas été envoyé. Veuillez réessayer"
        });
      } else {
        res.send({
          success: true,
          message: 'Votre message a bien été envoyé, nous vous recontacterons dans les plus brefs délais'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Une erreur s'est produite, merci de réessayer"
    });
  }
});

app.listen(3000, () => {
  console.log('server start on port 3000');
});