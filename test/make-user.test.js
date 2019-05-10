import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');


test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();

    formData.set('name', 'Hagrid');
    formData.set('house', 'Ravenclaw');

    const expected = {
        name: 'Hagrid',
        house: 'Ravenclaw',
        spells: 0,
        injury: 50,
        complete: {}
    };
    // act
    const result = makeUser(formData);
    // assert
    assert.deepEqual(result, expected);
});