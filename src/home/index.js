//importing any necessary functions/utility objects
import makeUser from './make-user.js';
import api from '../services/api.js';

//referencing my DOM Elements
const userSignUp = document.getElementById('form');

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    
    api.signUp(user);
    window.location = './src/map/map.html';
});