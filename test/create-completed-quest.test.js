import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

test('Create completed quest element', (assert) => {
    //Arrange
    const quest = {
        id: 'shack',
        title: 'Sneak to The Shrieking Shack',
        map: {
            top: '75%',
            left: '34%'
        }
    };

    const expected = '<span class="quest completed" style="top: 75%; left: 34%;">Sneak to The Shrieking Shack</span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createCompletedQuest(quest);
    //Assert
    assert.equal(dom.outerHTML, expected);
});