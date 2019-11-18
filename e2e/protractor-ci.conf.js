const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox']
  },
  chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_77.0.3865.75',
  directConnect: true
};

exports.config = config;
