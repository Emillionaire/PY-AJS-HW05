class Character {
  constructor(name, type, health, level, attack, defence) {
    const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Parameter "name" should be in range: 2-10 symbol');
    }
    // if (characterTypes.indexOf(type) === -1) {
    //   throw new Error(`Parameter "type" should be one of: ${characterTypes}`);
    // }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health == 0) {
      throw new Error('Character dead, level not encreased')
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100)
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    const type = 'Bowman';
    const health = 100;
    const level = 1;
    const attack = 25;
    const defence = 25;

    super(name, type, health, level, attack, defence);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    const type = 'Swordsman';
    const health = 100;
    const level = 1;
    const attack = 40;
    const defence = 10;

    super(name, type, health, level, attack, defence);
  }
}

export class Magician extends Character {
  constructor(name) {
    const type = 'Magician';
    const health = 100;
    const level = 1;
    const attack = 10;
    const defence = 40;

    super(name, type, health, level, attack, defence);
  }
}

export class Undead extends Character {
  constructor(name) {
    const type = 'Undead';
    const health = 100;
    const level = 1;
    const attack = 25;
    const defence = 25;

    super(name, type, health, level, attack, defence);
  }
}

export class Zombie extends Character {
  constructor(name) {
    const type = 'Zombie';
    const health = 100;
    const level = 1;
    const attack = 40;
    const defence = 10;

    super(name, type, health, level, attack, defence);
  }
}

export class Daemon extends Character {
  constructor(name) {
    const type = 'Daemon';
    const health = 100;
    const level = 1;
    const attack = 10;
    const defence = 40;

    super(name, type, health, level, attack, defence);
  }
}
