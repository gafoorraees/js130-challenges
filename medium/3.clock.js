class Clock {
  constructor(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes;
  }
  
  static at(hour, minutes = 0) {
    return new Clock(hour, minutes);
  }

  add(minutes) {
    let hoursToAdd = Math.floor(minutes / 60);
    let minutesToAdd = minutes % 60;
    let currentHour = this.hour + hoursToAdd;
    let currentMinutes = this.minutes + minutesToAdd;

    if (currentHour >= 24) {
      currentHour = currentHour % 24;
    }
    
    if (currentMinutes >= 60) {
      currentHour += 1;
      currentMinutes = currentMinutes - 60;
    }

    return new Clock(currentHour, currentMinutes);
  }

  subtract(minutes) {
    let hoursToSubtract = Math.floor(minutes / 60);
    let minutesToSubtract = minutes % 60;
    let currentHour = this.hour;
    let currentMinutes = this.minutes;

    while (hoursToSubtract > 0) {
      currentHour -= 1;
      if (currentHour < 0) {
        currentHour = 23;
      }
      
      hoursToSubtract -= 1;
    }

    while (minutesToSubtract > 0) {
      currentMinutes -= 1;
      if (currentMinutes < 0) {
        currentMinutes = 59;
        currentHour -= 1;
        if (currentHour < 0) {
          currentHour = 23;
        }
      }

      minutesToSubtract -= 1;
    }
    
    return new Clock(currentHour, currentMinutes);
  }

  toString() {
    let hours = this.hour;
    let minutes = this.minutes;

    if (this.hour < 10) {
      hours = `0${this.hour}`;
    }

    if (this.minutes < 10) {
      minutes = `0${this.minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  isEqual(anotherClock) {
    return this.hour === anotherClock.hour && this.minutes === anotherClock.minutes;
  }
}

module.exports = Clock;