import sum, {Validator,phoneNumbersTransformer} from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

// проверка класса валидации имён
test('shoud check name validation', () => {
  const m = new Validator();
  const result = m.validateUsername('6jdj345jj');
  expect(result).toBe(false);
});

// проверка работы ФУНКЦИИ ФОРМАТИРОВАНИЯ ТЕЛЕФОННЫХ НОМЕРОВ
test('shoud check phone numbers transform', () => {
  const result = phoneNumbersTransformer('8 (927) 000-00-00');
  expect(result).toBe('89270000000');	
  });
  
   


