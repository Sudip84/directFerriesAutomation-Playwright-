# **directFerriesAutomation**

## **Playwright Test Automation - Setup & Usage Guide**

### **Prerequisites**
Before running the Playwright tests, make sure you have **Node.js** installed on your machine.

- Download and install Node.js from [nodejs.org](https://nodejs.org/).
- Verify the installation by running the following commands in your terminal:x
  node -v
  npm -v

### **Installation**
Run the following commands to install the necessary dependencies:

npm install
npx playwright install

### **Run Tests Directly in the Terminal**
To execute tests in headed mode (with the browser visible), use the following command:
npm run test

### **Run Tests in a Specific Browser**
To execute tests in a specific browser, such as Chrome, Firefox, or WebKit, use one of the following commands:

For Chrome:
npm run test-chrome

For WebKit:
npx run test-webkit

### **Viewing Test Execution Videos and Report**
To open the HTML report after running the tests, execute the following command:

npm run report

This command will generate and open the test execution report. The recorded test execution videos will be attached to the HTML report.

The recorded test execution videos can also be found inside the test-results/ directory.
