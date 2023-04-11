import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../src/character';

test('Attack parameter is correct', () => {
    const Moria = new Bowman('Moria');
    expect(Moria.attack).toBe(25);
})

test('Error throw correct', () => {
    expect(() => new Swordsman('L')).toThrow();
})