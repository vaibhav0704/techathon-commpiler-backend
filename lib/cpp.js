import { exec } from 'child_process'
import {generateFile} from '../utils/fileGenerator.js'
import fs from 'fs';

export const execCpp = async (code) => {
  await generateFile(code, 'cpp');
  await exec("g++ ./lib/new.cpp -o new", async (error, stdout, stderr) => {
    if (error) {
      console.log(error.message)
      fs.unlinkSync('./lib/new.cpp')
      // fs.unlinkSync('./new')
      return error.message
    }
    if (stderr) {
      fs.unlinkSync('./lib/new.cpp');
      // fs.unlinkSync('./new')
      return stderr
    }
    await exec("./new", async (error, stdout, stderr) => {
      if (error) {
        fs.unlinkSync('./lib/new.cpp')
        fs.unlinkSync('./new')
        return error.message
      }
      if (stderr) {
        fs.unlinkSync('./lib/new.cpp')
        fs.unlinkSync('./new')
        return stderr
      }
      fs.unlinkSync('./lib/new.cpp')
      fs.unlinkSync('./new')
      console.log(stdout)
      return stdout
    });
  });
}