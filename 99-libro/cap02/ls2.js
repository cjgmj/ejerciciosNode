const fs = require("fs").promises;

async function listFiles() {
  try {
    let dir = ".";
    if (process.argv[2]) dir = process.argv[2];

    const files = await fs.readdir(dir);

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.log(err);
  }
}

listFiles();
