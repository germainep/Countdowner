// Using a class to instantiate multiple timers if needed
export default class Timer {
  constructor(date, name) {
    // set the countdown target date
    this.targetDate = Date.parse(date);
    // set the event name
    this.eventName = name;
    // get the current date

    this.showTimer = function() {
      // define variables for appending to the DOM
      const timerDiv = window.document.createElement('div');
      const view = window.document.createElement('p');
      const body = window.document.getElementsByTagName('body');

      // helpers to break the time into D H M S portions
      const dateBreakdown = function(time) {
        const seconds = Math.floor(time / 1000);
        let mins = Math.floor(seconds / 60);
        let hours = Math.floor(mins / 60);
        const days = Math.floor(hours / 24);

        hours -= days * 24;
        mins -= hours / 60;

        return `D: ${days} H: ${hours} M: ${mins} S: ${seconds}`;
      };
      // appending elements to the DOM
      timerDiv.append(view);
      body[0].append(timerDiv);
      setInterval(() => {
        const now = Date.parse(new Date());
        const timeLeft = this.targetDate - now;
        view.innerText = dateBreakdown(timeLeft);
      }, 1000);
    };
  }
}
