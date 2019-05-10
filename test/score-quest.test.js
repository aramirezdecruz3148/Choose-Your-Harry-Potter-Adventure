import scoreQuest from '../src/quest/score-function.js';
const test = QUnit.test;

QUnit.module('scoreQuest');

test('creating a function to score each quest', (assert) => {
    //Arrange
    const user = {
        name: 'Jill',
        injury: 50,
        spell: 0,
        completed: {}
    };

    const choice = {
        injury: -20,
        spell: 5
    };

    const quest = {
        id: 'forest'
    };

    const expected = {
        name: 'Jill',
        injury: 30,
        spell: 5,
        completed: { 
            forest: true 
        }
    };
    //Act 
    const result = scoreQuest(user, choice, quest);
    //Assert
    assert.deepEqual(result, expected);
});