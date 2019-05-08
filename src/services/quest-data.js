const shriekingShack = {
    id: 'shack',
    title: 'Sneak to the Shrieking Shack',
    image: 'shrieking-shack.jpg',
    audio: 'b',
    description: `
    b
    `,
    choices: [{
        id: 'b',
        description: 'b',
        result: `
        b
        `,
        injury: 4,
        spells: 4
    }, {
        id: 'b',
        description: 'b',
        result: ` 
        b
        `,
        injury: 4,
        spells: 4
    }, {
        id: 'b',
        description: 'b',
        result: `
        b
        `,
        injury: 6,
        spells: 6
    }]
};

const forbiddenForest = {
    id: 'forest',
    title: 'Explore the Forbidden Forest',
    image: 'forbidden-forest.jpg',
    audio: 'b',
    description: `
    b
    `,
    choices: [{
        id: 'b',
        description: 'b',
        result: `
        b
        `,
        injury: 7,
        spells: 7
    }, {
        id: 'g',
        description: 'g',
        result: ` 
        g
        `,
        injury: 7,
        spells: 7
    }, {
        id: 'g',
        description: 'g',
        result: `
        g 
        `,
        injury: 6,
        spells: 6
    }]
};

const knockturnAlley = {
    id: 'knockturn',
    title: 'Creep into Knockturn Alley',
    image: 'knockturn-alley.jpg',
    audio: 'g',
    description: `
    g
    `,
    choices: [{
        id: 'g',
        description: 'g',
        result: `
        g
        `,
        injury: 6,
        spells: 6
    }, {
        id: 'g',
        description: 'g',
        result: ` 
        g
        `,
        injury: 6,
        spells: 6
    }, {
        id: 'g',
        description: 'g',
        result: `
        g
        `,
        injury: 7,
        spells: 7
    }]
};

const questArray = [shriekingShack, forbiddenForest, knockturnAlley];

export default questArray;