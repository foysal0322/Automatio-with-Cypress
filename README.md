# Cypress Project Setup Guide


## Prerequisites

Make sure you have set/download/installed:
-   Node.js v14.0.0 or higher
-   npm v6.14.0 or higher
- Visual studio code (VSCode)
- Set environmental variable for Cypress

## Project Steup
```
mkdir Automation-with-Cypress
cd Automation-with-Cypress
```
## Installing Cypress

    
run: ``npm -i init``

`npm init` is an essential command to use when setting up a Cypress project, as it allows you to manage your project's dependencies and scripts with npm.

Now install Cypress:
 `npm install cypress --save-dev` <br>
## Start Cypress

We can open a cypress in several ways:

    npx cypress open (or) 
    node_modules/.bin/cypress open
To Run All the specs under e2e folder

    npx cypress run  (it will run in a headless mode)
    npx cypress run --headed
To Run Single spec under e2e folder

    npx cypress run –-spec cypress\e2e\MyTest.js
   To Run All the specs under e2e folder using selected browser
   

    npx cypress run --browser chrome 
    npx cypress run --browser edge 
    npx cypress run --browser edge --headed


## Generate reports

To generate a report for your Cypress test suite, you can use the Mochawesome library, which is a custom reporter for the Mocha test framework that generates HTML reports with detailed information about your test results.

To use Mochawesome, you need to install it as a devDependency in your project:

    npm install --save-dev mochawesome
   Once you have installed Mochawesome, you need to configure Cypress to use the Mochawesome reporter. You can do this by adding the following code to your Cypress configuration file (usually `cypress.json`):
   ```
   {
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
```
After running your Cypress test suite, you can generate an HTML report using the `mochawesome-merge` and `mochawesome-report-generator` packages. To do this, first install the packages as devDependencies:

    npm install --save-dev mochawesome-merge mochawesome-report-generator

Now to generate report, run:
 `cypress run --reporter mochawesome`

Once the report has been generated, you can open it in a web browser to view the detailed results of your Cypress test suite. You should find the report in `Automation-with-Cypress\mochawesome-report\mochawesome.html`
