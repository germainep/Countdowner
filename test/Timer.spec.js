import Timer from '../js/Timer';

let timer;
beforeEach(() =>{
  timer = new Timer('12/28/2019', 'birthday');
})

it('should have a name prop', function() {
  expect(timer.eventName).toBe('birthday');
});

it('should have a date prop', function() {
  expect(timer.targetDate).toBe(Date.parse('12/28/2019'));


});
