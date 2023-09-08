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
