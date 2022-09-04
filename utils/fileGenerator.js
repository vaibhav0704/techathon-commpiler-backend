import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

export const generateFile = async (code, ext) => {
  const pathToFile = path.join(path.dirname(__filename).split('/utils')[0], '/lib');
  await fs.writeFile(`${pathToFile}/new.${ext}`, code, (err) => {
    if (err) {
      return res.status(400);
    }
  });
}
