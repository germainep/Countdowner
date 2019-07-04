import Timer from '../js/main';

jest.mock('../js/main');

beforeEach(() => {
  Timer.mockClear();
});

test('should call the Timer class', function () {
  const timer = new Timer('12/28/2019', 'birthday');
  expect(Timer).toHaveBeenCalledTimes(1);
});
