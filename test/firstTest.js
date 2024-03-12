const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const safari = require('selenium-webdriver/safari');
const assert = require('assert');

let driver = new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).setChromeOptions().setSafariOptions().build();

(async function navigateToNbaLogin() {
  try {
    await driver.navigate().to('https://www.nba.com/');
    await driver.findElement(By.xpath("//span[contains(text(),'Sign In')]")).click();
    await driver.findElement(By.xpath("//a[contains(text(),'Sign in with NBA ID')]")).click();
    await driver.wait(until.titleIs('NBA Login | NBA.com'), 5000);
  } finally {
    await driver.quit();
  }
})();