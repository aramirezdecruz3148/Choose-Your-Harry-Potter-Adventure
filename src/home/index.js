//importing any necessary functions/utility objects
import makeUser from './make-user.js';
import api from '../services/api.js';

//referencing my DOM Elements
const userSignUp = document.getElementById('form');
const audio = document.getElementById('audio');

audio.src = '../../assets/hp-opening.m4a';

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    
    api.saveUser(user);
    window.location = './src/map/map.html';
});