// src/routes/doc/[filename].md.js
import fs from 'fs';
import path from 'path';

export async function get({ params }) {
  const { filename } = params;
  const filePath = path.resolve('doc', `${filename}.md`);

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');

    return {
      body: fileContents,
      headers: {
        'Content-Type': 'text/plain'
      }
    };
  } else {
    return {
      status: 404,
      body: 'Not found'
    };
  }
}