var helmet = require('helmet');
require('dotenv').config();
const express = require('express');
const BigNumber = require('bignumber.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
app.use(express.static('client'));
app.use(express.static('build/contracts'));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
  });
  
  app.get('*', (req, res) => {
    res.status(404);
    res.send('Ooops... this URL does not exist');
  });
 
  app.listen(PORT, () => {
    console.log(`TechBrij Ethereum HelloWorld App running on port ${PORT}...`);
  });
  
