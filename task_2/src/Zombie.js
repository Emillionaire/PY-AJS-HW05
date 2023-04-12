import Character from './Character';

export default class Zombie extends Character {
    constructor(name) {
      const type = 'Zombie';
      const health = 100;
      const level = 1;
      const attack = 40;
      const defence = 10;
  
      super(name, type, health, level, attack, defence);
    }
  }