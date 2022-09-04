import { exec } from 'child_process'
import {generateFile} from '../utils/fileGenerator.js'
import fs from 'fs';

export const execPython = async (code) => {
  await generateFile(code, 'py');
  exec('python ./lib/new.py', async (error, stdout, stderr) => {
    if (error) {
      await fs.unlink('./lib/new.py');
      return error.message;
    }
    if (stderr) {
      await fs.unlink('./lib/new.py');
      return stderr;
    }
    await fs.unlink('./lib/new.py', (err) => {

    });
    return stdout;
  })
}