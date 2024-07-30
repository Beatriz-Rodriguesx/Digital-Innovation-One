import Hero from './classes/Hero.js';

const mago = new Hero('Gandalf', 2019, 'mago');
const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
const monge = new Hero('Kenshin', 30, 'monge');
const ninja = new Hero('Naruto', 17, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
