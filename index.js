const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to my simple Node.js app!');
  });

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully!', data });
  });

  app.post('/api/data/:data1', (req, res) => {
    const data = req.body;
    const data1 = req.params.data1
    console.log('Received data:', data1);
    res.json({ message: 'Data received successfully!', data1 });
  });

app.listen(5000,()=>{
    console.log('App Started at port 5000')
})
