import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from '../map/create-quest-link.js';
import questArray from '../services/quest-data.js';

loadProfile();

const nav = document.getElementById('quests');
const audio = document.getElementById('audio');
const quests = api.getQuests(questArray);

audio.src = '../../assets/hp-theme.m4a';

for(let i = 0; i < quests.length; i++) {
    let quest = quests[i];
    let links = createQuestLink(quest);
    nav.appendChild(links);
}
