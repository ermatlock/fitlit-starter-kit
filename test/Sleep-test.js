import {
  expect
} from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";
import Sleep from "../src/Sleep"

describe('sleep', () => {
  let sleep1;
  let sleepData;

  beforeEach(() => {
    sleepData = [{
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 4.1,
      "sleepQuality": 3.8
    }, {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    }, {
      "userID": 3,
      "date": "2019/06/16",
      "hoursSlept": 10.7,
      "sleepQuality": 3.4
    }, {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 2.6
    }, {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    }, {
      "userID": 3,
      "date": "2019/06/17",
      "hoursSlept": 5.3,
      "sleepQuality": 4.9
    }, {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 10.4,
      "sleepQuality": 3.1
    }, {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    }, {
      "userID": 3,
      "date": "2019/06/18",
      "hoursSlept": 9.8,
      "sleepQuality": 2.6
    }, {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 10.7,
      "sleepQuality": 1.2
    }, {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    }, {
      "userID": 3,
      "date": "2019/06/19",
      "hoursSlept": 7.2,
      "sleepQuality": 3.4
    }, {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.3,
      "sleepQuality": 1.2
    }, {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    }, {
      "userID": 3,
      "date": "2019/06/20",
      "hoursSlept": 9.4,
      "sleepQuality": 1.2
    }, {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 7.8,
      "sleepQuality": 4.2
    }, {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    }, {
      "userID": 3,
      "date": "2019/06/21",
      "hoursSlept": 8.9,
      "sleepQuality": 3.7
    }, {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 7,
      "sleepQuality": 3
    }, {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 4.8,
      "sleepQuality": 3.3
    }, {
      "userID": 3,
      "date": "2019/06/22",
      "hoursSlept": 9.8,
      "sleepQuality": 2.1
    }, {
      "userID": 1,
      "date": "2019/06/23",
      "hoursSlept": 7.8,
      "sleepQuality": 1.5
    }, {
      "userID": 2,
      "date": "2019/06/23",
      "hoursSlept": 8,
      "sleepQuality": 4.9
    }, {
      "userID": 3,
      "date": "2019/06/23",
      "hoursSlept": 4.7,
      "sleepQuality": 3.9
    }, {
      "userID": 1,
      "date": "2019/06/24",
      "hoursSlept": 8,
      "sleepQuality": 1.3
    }, {
      "userID": 2,
      "date": "2019/06/24",
      "hoursSlept": 10.8,
      "sleepQuality": 1
    }, {
      "userID": 3,
      "date": "2019/06/24",
      "hoursSlept": 9.3,
      "sleepQuality": 1.8
    }, ]

    sleep1 = new Sleep(1, sleepData)
  })

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of sleep", () => {
    expect(sleep1).to.be.an.instanceOf(Sleep);
  });

  it("should accept a User and take the id", () => {
    expect(sleep1.userId).to.equal(1);
  });

  it("should accept Sleep API data", () => {
    let userOneData = sleepData.filter((user) => user.userID === 1);
    expect(sleep1.sleepData).to.eql(userOneData);
  });

  it("should calculate average number of hours slept per day", () => {
    expect(sleep1.getAverageSleepHours()).to.equal('8.12')
  })

  it("should calculate average sleep quality of all time", () => {
    expect(sleep1.getAverageSleepQuality()).to.equal('2.43')
  })

  it("should calculate hours slept for a specific date", () => {
    expect(sleep1.getSleepHoursByDate()).to.equal(8)
  })

  it("should return sleep quality for a specific date", () => {
    expect(sleep1.getSleepQualityByDate()).to.equal(1.3)
  })

  it("should return hours slept for last 7 days", () => {
    let weeklySleep = [10.4, 10.7, 9.3, 7.8, 7, 7.8, 8]
    expect(sleep1.getWeeklyHoursSlept()).to.eql(weeklySleep)
  })

  it("should return sleep quality for last 7 days", () => {
    let weeklySleep = [3.1, 1.2, 1.2, 4.2, 3, 1.5, 1.3]
    expect(sleep1.getWeeklySleepQuality()).to.eql(weeklySleep)
  })

  it("should accept sleep data for all users for all time", () => {
    expect(sleep1.sleepDataAll).to.eql(sleepData)
  })

  it("should return average sleep quality for all users", () => {
    expect(sleep1.getAvgSleepAllUsers()).to.eql("2.88")
  })

})
