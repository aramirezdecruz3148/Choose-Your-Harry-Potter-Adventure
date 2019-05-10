function createChoice(choice) {
    const label = document.createElement('label');
    label.textContent = choice.description;
    
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'quest-option';
    input.value = choice.id;
    input.setAttribute('required', true);

    label.appendChild(input);

    return label;
}
export default createChoice;