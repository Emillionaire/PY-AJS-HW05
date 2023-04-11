import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from './character.js';

function start() {
    try {
        const Lenny = new Bowman('Lenny');
        const Charlie = new Swordsman('Charlie');
        const Nicola = new Magician('Nicola');
        const Azizicra = new Daemon('Azizicra');
        const Sleeper = new Undead('Sleeper');
        const Staren = new Zombie('Staren');
      
        console.log(Lenny, Charlie, Nicola, Azizicra, Sleeper, Staren);
      } catch (error) {
        console.log(error);
      }
}

start();
