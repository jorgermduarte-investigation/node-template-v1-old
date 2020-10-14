const yargs = require("yargs");
const path = require('path');
const exec = require('child_process').exec;

const root = process.cwd();

const argv = yargs.usage('Usage: $0 -n [string]')
    .demandOption(['n'], "Middleware Name")
    .argv;

const middlewareName = argv.n;
const command = `cp \"${root}/_stubs/middleware.stub.js\" \"${root}/_server/_middlewares/${middlewareName}.middleware.js\"`;

exec(command,
    (error, stdout, stderr) => {
        console.log(`Middleware created: ${middlewareName}.middleware.js`);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    })
