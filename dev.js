const fs = require('fs');
const path = require('path');

if (fs.existsSync(".env")) {
    return;
}
if (!fs.existsSync(".env.example")) {
    console.log("There is something wrong with this repo, try pulling or hard resetting")
    return;
}
try {
    fs.copyFileSync(path.join(__dirname, ".env.example"), ".env")
} catch (e) {
    console.log("Something went wrong")
}
