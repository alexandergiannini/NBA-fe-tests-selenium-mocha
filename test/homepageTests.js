const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const safari = require('selenium-webdriver/safari');
const assert = require('assert');
// const expect = require('chai').expect();

let driver = new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).setChromeOptions().setSafariOptions().build();


describe("Navigate to NBA Login test", () => {
  it("should take me to the login page", () => {
    (async function navigateToNbaLogin() {
      try {
      await driver.navigate().to('https://www.nba.com/');
      await driver.findElement(By.xpath("//span[contains(text(),'Sign In')]")).click();
      await driver.findElement(By.xpath("//a[contains(text(),'Sign in with NBA ID')]")).click();
      await driver.wait(until.titleIs('NBA Login | NBA.com'), 5000);
      let signInText = await driver.findElement(By.className(".SignIn_title__l6maW")).getText();
      assert.strictEqual(signInText, 'Sign in with your NBA IDd');
    } finally {
      await driver.quit();
    }
  })();
  })
});

describe("Toggle Hide Scores", () => {
  it("should toggle Hide Scores to be true", () => {
    (async function toggleHideScoresToTrue() {
      try {
      await driver.navigate().to('https://www.nba.com/');
      await driver.findElement(By.xpath("//span[@data-id='nba:game-tracker:hide-scores:toggle']")).click();
      let contentHiddenText = await driver.findElement(By.xpath("//div[contains(text(),'Content is hidden to prevent spoilers.')]")).getText();
      assert.strictEqual(contentHiddenText, 'Content is hidden to prevent spoilers.');
    } finally {
      await driver.quit();
    }
  })();
  })
});

describe("Select Lakers within Team Dropdown", () => {
  it("Select Lakers within Team Dropdown", () => {
    (async function selectLakersFromTeamDropDown() {
      try {
      await driver.navigate().to('https://www.nba.com/');
      const teamsDropDown = await driver.findElement(By.xpath("//span[contains(text(),'Teams')]"))
      await driver.actions().move({ origin: teamsDropDown }).perform()
      await driver.findElement(By.xpath("//span[contains(text(),'Los Angeles Lakers')]")).click();
      await driver.wait(until.titleIs('Lakers - The official site of the NBA for the latest NBA Scores, Stats & News. | NBA.com'), 5000);
      let currentUrl = await driver.getCurrentUrl();
      assert.equal(currentUrl, "https://www.nba.com/lakers/");
    } finally {
      await driver.quit();
    }
  })();
  })
});

describe("Select Player Stats within Player Dropdown", () => {
  it("Select Player Stats within Player Dropdown", () => {
    (async function selectPlayerStatsFromPlayerDropDown() {
      try {
      await driver.navigate().to('https://www.nba.com/');
      const playerDropDown = await driver.findElement(By.xpath("//span[contains(text(),'Players')]"))
      await driver.actions().move({ origin: playerDropDown }).perform()
      await driver.findElement(By.xpath("//a[contains(text(),'Player Stats')]")).click();
      await driver.wait(until.titleIs('Season Leaders | Stats | NBA.com'), 5000);
      let currentUrl = await driver.getCurrentUrl();
      assert.equal(currentUrl, "https://www.nba.com/stats/players");
    } finally {
      await driver.quit();
    }
  })();
  })
});
