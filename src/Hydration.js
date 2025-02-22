import User from "./User";

class Hydration {
  constructor(id, apiData) {
    this.userId = id;
    this.hydrationData = apiData.filter(
      (person) => person.userID === this.userId
    );
  }

  getAllWaterAvg() {
    let totalOz = this.hydrationData.reduce((total, currDay) => {
      total += currDay.numOunces;
      return total;
    }, 0);
    let average = totalOz / this.hydrationData.length;
    return Math.round(average);
  }

  findOzByLast() {
    let position = this.hydrationData.length - 1;

    return this.hydrationData[position].numOunces;
  }

  getWeeksWater() {
    const index = this.hydrationData.length - 7;
    const weeklyData = this.hydrationData.slice(index, index + 7);
    const oneWeekOz = weeklyData.map((day) => day.numOunces);
    return oneWeekOz;
  }
}

export default Hydration;
