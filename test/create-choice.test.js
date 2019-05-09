const test = QUnit.test;

QUnit.module('createChoice');
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

test('test to create quest choices in radio button form', (assert) => {
    //Arrange

    const choice = {
        id: 'baron',
        description: 'This is a test description'
    };

    const expected = '<label>This is a test description<input type="radio" name="quest-option" value="baron" required="true"></label>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createChoice(choice);
    //Assert
    assert.equal(dom.outerHTML, expected);
});