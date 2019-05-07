const test = QUnit.test;

QUnit.module('api');
const api = {
    storage: localStorage,
    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    }

};
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
    api.signUp(expected);
    // Call the function you're testing and set the result to a const
    const result = api.getUser();
    //Assert
    assert.deepEqual(result, expected);
});