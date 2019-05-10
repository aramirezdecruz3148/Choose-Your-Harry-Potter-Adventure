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


const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

let quest = api.getQuest(questId);

questImage.src = '../../assets/quest-photos/' + quest.image;
questTitle.textContent = quest.title;
questDescription.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = createChoice(quest.choices[i]);
    choiceParent.appendChild(choice);
}

questForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(questForm);
    const choiceId = formData.get('quest-option');
    const choiceData = findById(quest.choices, choiceId);

    const user = api.getUser();
    scoreFunction(user, choiceData, quest.id);
    api.saveUser(user);

    questForm.classList.add('hidden');
    questDescription.classList.add('hidden');
    questResult.classList.remove('hidden');
    questResult.textContent = choiceData.result;
    loadProfile();
});

