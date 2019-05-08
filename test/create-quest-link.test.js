const test = QUnit.test;

QUnit.module('createQuestLink');
function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');
    
    const searchParams = new URLSearchParams;
    searchParams.set('id', quest.id);
    link.href = '../quest/quest.html?' + searchParams.toString();

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}

test('Makes html link to quest page', (assert) => {
    //Arrange
    const quest = {
        id: 'shack',
        title: 'Sneak to The Shrieking Shack',
        map: {
            top: '75%',
            left: '34%'
        }
    };

    const expected = '<a class="quest" href="../quest/quest.html?id=shack" style="top: 75%; left: 34%;">Sneak to The Shrieking Shack</a>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);
    //Assert
    assert.equal(dom.outerHTML, expected);
});