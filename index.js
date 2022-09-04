import express from 'express';
import bodyParser from 'body-parser'
import {execCpp} from './lib/cpp.js'
import { execPython } from './lib/python.js';

const app = express()
app.use(bodyParser.json());

app.post('/compile', async (req, res) => {
  if (!req.body.code) return res.status(400);
  let output;
  if (req.body.language === "cpp" && req.body.language === 'c') {
    output = await execCpp(req.body.code)
    return res.status(200).send({ output });
  } else if (req.body.language === 'python') {
    output = await execPython(req.body.code);
    return res.status(200).send({ output});
  }
  // fs.writeFile('new.cpp', req.body.code, () => {});
})

app.listen(8000, () => console.log("server running on 8000"))