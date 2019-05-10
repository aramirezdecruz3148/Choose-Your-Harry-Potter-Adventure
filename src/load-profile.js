import api from '../src/services/api.js';
function loadProfile() {
    //calling on the DOM elements needed
    const userName = document.getElementById('name');
    const houseAvatar = document.getElementById('house');
    const injuryPoints = document.getElementById('injury');
    const spellPoints = document.getElementById('spells');
    
    const user = api.getUser();
    
    if(!user) {
        window.location = '../../';
    }
    
    userName.textContent = user.name;
    houseAvatar.src = '../../assets/houses/' + user.house + '.jpeg';
    injuryPoints.textContent = user.injury;
    spellPoints.textContent = user.spells;
}

export default loadProfile;
