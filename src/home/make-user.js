function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        house: formData.get('house'),
        spells: 0,
        injury: 50,
        complete: {}
    };
    return user;
}
export default makeUser;