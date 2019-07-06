export default class Timer {
  constructor(date, name) {
    // set the countdown target date
    this.targetDate = Date.parse(date);
    // set the event name
    this.eventName = name;
  }
  // get the current date

  showTimer() {
    // define variables for appending to the DOM
    const timerDiv = document.createElement('div');
    const view = document.createElement('p');
    const body = document.getElementsByTagName('body')[0];

    // helpers to break the time into D H M S portions
    function dateBreakdown(time) {
      const millisecs = time;
      const yearsCal = time / 1000 / 60 / 60 / 24 / 365;
      const daysCal = (yearsCal % 1) * 365;
      const hoursCal = (daysCal % 1) * 24;
      const minsCal = (hoursCal % 1) * 60;
      const secondsCal = (minsCal % 1) * 60;
      const years = Math.floor(yearsCal);
      const days = Math.floor(daysCal)
      const hours = Math.floor(hoursCal);
      const mins = Math.floor(minsCal);
      const seconds = Math.floor(secondsCal);
      return `Y: ${years} D: ${days} 
      H: ${hours} M: ${mins} S: ${seconds}`;
    }
    // appending elements to the DOM
    timerDiv.append(view);
    body.append(timerDiv);
    setInterval(() => {
      const now = Date.parse(new Date());
      const timeLeft = this.targetDate - now;
      const counting = dateBreakdown(timeLeft);
      view.innerText = counting;
    }, 1000);
  }

  deleteTimer() {}
}
