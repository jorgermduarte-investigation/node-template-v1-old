const yargs = require("yargs");
const path = require('path');
const exec = require('child_process').exec;

const root = process.cwd();

const argv = yargs.usage('Usage: $0 -n [string]')
    .demandOption(['n'], "Controller Name")
    .argv;

const controllerName = argv.n;
const command = `cp \"${root}/_stubs/controller.stub.js\" \"${root}/_server/_controllers/${controllerName}.controller.js\"`;

exec(command,
    (error, stdout, stderr) => {
        console.log(`Controller created: ${controllerName}.controller.js`);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    })
