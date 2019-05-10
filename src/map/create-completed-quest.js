function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('complete');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    span.textContent = quest.title;

    return span;
}

export default createCompletedQuest;