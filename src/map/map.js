import api from '../services/api.js';

//calling on the DOM elements needed
const playerName = document.getElementById('name');
const houseAvatar = document.getElementById('house');
const injuryPoints = document.getElementById('injury');
const spellPoints = document.getElementById('spells');

const player = api.getUser();

if(!player) {
    window.location = '../../';
}

playerName.textContent = player.name;
houseAvatar.src = '../../assets/' + player.house + '.jpeg';
injuryPoints.textContent = player.injury;
spellPoints.textContent = player.spells;