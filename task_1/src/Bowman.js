import Character from './Character';

export default class Bowman extends Character {
    constructor(name) {
      const type = 'Bowman';
      const health = 100;
      const level = 1;
      const attack = 25;
      const defence = 25;
  
      super(name, type, health, level, attack, defence);
    }
  }