import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../src/character';

test('Attack parameter is correct', () => {
    const Moria = new Bowman('Moria');
    expect(Moria.attack).toBe(25);
})

test('Error throw correct', () => {
    expect(() => new Swordsman('L')).toThrow();
})

test('Level up test', () => {
    const Mann = new Magician('Mann');
    Mann.levelUp();
    expect(Mann.attack).toBe(12);
})

test('Damage take', () => {
    const Kraazag = new Daemon('Kraazag');
    Kraazag.damage(25);
    expect(Kraazag.health).toBe(85);
})