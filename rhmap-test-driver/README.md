# RHMAP Test Driver
This is a test-runner written in nodeJS that sends GET requests to a Cloud App endpoint, which internally uses $fh.push, in order to send a notification through the entire RHMAP system

#### Usage
Having NPM and nodeJS installed, first download all dependencies:
```
$ npm install
```
Then start the test-runner passing your application ID and the CSV's path as arguments:
```
$ node app/index.js <appId> <path/to/devices.csv>
```
