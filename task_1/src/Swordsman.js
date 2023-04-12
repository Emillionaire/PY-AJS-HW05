import Character from './Character';

export default class Swordsman extends Character {
    constructor(name) {
      const type = 'Swordsman';
      const health = 100;
      const level = 1;
      const attack = 40;
      const defence = 10;
  
      super(name, type, health, level, attack, defence);
    }
  }