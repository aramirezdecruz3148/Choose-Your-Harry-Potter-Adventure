import api from '../src/services/api.js';
import questArray from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('save user and then retrieve the user, roung-trip that shit!', (assert) => {
    //Arrange
    const expected = {
        name: 'Hagrid',
        house: 'Ravenclaw',
        spells: 0,
        injury: 50

    };
    //Act 
    api.saveUser(expected);
    // Call the function you're testing and set the result to a const
    const result = api.getUser();
    //Assert
    assert.deepEqual(result, expected);
});

test('test to get questArray using api', (assert) => {
    //Arrange
    const expected = questArray;
        
    //Act 
    const result = api.getQuests(questArray);
    
    //Assert
    assert.deepEqual(result, expected);
});

test('test to get specifc quest by id', (assert) => {
    //Arrange
    const expectedQuest = questArray[1];
        
    //Act 
    const foundQuest = api.getQuest(expectedQuest.id);
    //Assert
    assert.deepEqual(foundQuest, expectedQuest);
});
