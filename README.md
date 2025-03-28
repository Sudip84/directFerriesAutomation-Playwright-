# directFerriesAutomation

Playwright Test Automation - Setup & Usage Guide

Prerequisites:
Before running the Playwright tests, make sure you have Node.js installed on your machine.

Download and install Node.js from nodejs.org.

Verify installation by running:
node -v
npm -v

Installation:
Run the following command to install the necessary dependencies:

npm install
npx playwright install


Run Tests Directly in the Terminal
To execute tests in headed mode (without opening the browser):

npm run test
This command will run all test cases in the configured browser and run parallelly.

Run Tests in a Specific Browser
To execute tests in a specific browser like Chrome, Firefox, or WebKit:

npm run test-chrome
npx run test-webkit

Viewing Test Execution Videos and Report:
To open html report : 
run command :  npm run report
The recorded test execution videos also attach with html report

The recorded test execution videos can be found inside the test-results/ directory.

