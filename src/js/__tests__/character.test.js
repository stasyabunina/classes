import Character from '../character';

test('testing character creation', () => {
  const result = new Character('Don', 'Magician', 10, 40);

  expect(result).toEqual({
    name: 'Don',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});

test('testing characters name', () => {
  expect(() => new Character('0', 'Magician', 10, 40)).toThrow(new Error('Имя персонажа должно содержать только символы, быть не меньше 2 и не больше 10 символов!'));
});

test('testing characters type', () => {
  expect(() => new Character('Don', 'Worker', 10, 40)).toThrow(new Error('Такой тип персонажа не существует'));
});
