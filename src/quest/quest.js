import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';
import loadProfile from '../load-profile.js';
import scoreFunction from '../quest/score-function.js';
import findById from '../find-by-id.js';

loadProfile();

const choiceParent = document.getElementById('choices');
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-img');
const questDescription = document.getElementById('description');
const questForm = document.getElementById('quest-form');
const questResult = document.getElementById('result');
let user = api.getUser();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

let quest = api.getQuest(questId);

questImage.src = '../../assets/quest-photos/' + quest.image;
questTitle.textContent = quest.title;
questDescription.textContent = quest.description;


questForm.addEventListener('submit', event => {
    event.preventDefault;
    const formData = new FormData(questForm); 
    const choiceId = formData.get('quest-option');
    const choiceData = findById(quest.choices, choiceId);
    questResult.textContent = choiceData.result;
    
    user = scoreFunction(user, choiceData, quest);
    api.saveUser(user);
    loadProfile();

});
