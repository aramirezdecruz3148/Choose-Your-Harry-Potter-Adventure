import findById from '../src/find-by-id.js';
const test = QUnit.test;

QUnit.module('findById');

test('multiple items in array, it returns the right one by id', (assert) => {
    //Arrange
    const items = [{
        id: 'thing 1',
        name: 'thingyName1'
    },
    {
        id: 'thing 2',
        name: 'thingyName2'
    }];
    // Set up your parameters and expectations

    const expected = {
        id: 'thing 2',
        name: 'thingyName2'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(items, 'thing 2');
    //Assert
    assert.deepEqual(result, expected);
});