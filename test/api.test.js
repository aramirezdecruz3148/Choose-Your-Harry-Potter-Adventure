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
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(result, expected);
});