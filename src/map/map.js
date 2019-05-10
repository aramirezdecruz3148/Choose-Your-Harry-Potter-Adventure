import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from '../map/create-quest-link.js';
import questArray from '../services/quest-data.js';
import createCompletedQuest from '../map/create-completed-quest.js';

loadProfile();

const nav = document.getElementById('quests');
const audio = document.getElementById('audio');
const quests = api.getQuests(questArray);

audio.src = '../../assets/hp-theme.m4a';

const user = api.getUser();
for(let i = 0; i < quests.length; i++) {
    let quest = quests[i];
    let dom;
    console.log(user.complete);
    if(user.complete[quest.id]) {
        dom = createCompletedQuest(quest);
    } else {
        dom = createQuestLink(quest);
    }
    nav.appendChild(dom);
}
