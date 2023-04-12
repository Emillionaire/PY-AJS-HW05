import Character from './Character';

export default class Undead extends Character {
    constructor(name) {
      const type = 'Undead';
      const health = 100;
      const level = 1;
      const attack = 25;
      const defence = 25;
  
      super(name, type, health, level, attack, defence);
    }
  }