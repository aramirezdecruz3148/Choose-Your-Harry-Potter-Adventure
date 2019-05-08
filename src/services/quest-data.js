const shriekingShack = {
    id: 'shack',
    title: 'Sneak to the Shrieking Shack',
    image: 'shrieking-shack.jpg',
    audio: 'shack.mp4',
    description: `
    It is late at night and your best friend dares you to sneak out of the castle and go 
    to the Shrieking Shack by yourself. Not wanting to let them see how scared you are, you 
    agree and try to shrug it off as you leave your house dorm. The walk to the Shrieking 
    Shack is long and eerily silent this time of night. It has been so silent that your ears
    perk up the second you arrive and open the door, as you are greated with several load bangs. 
    Trying to be braver than you feel, you get your wand out, and proceed inside. You hear
    an evil cackle coming from above your head and look up just in time to see Peeves 
    materialize with a bucket of water that he unceremoniously dumps on your head. You are now
    wet, cold, and angry! You look back up at Peeves and the wide grin spreaking across his
    face REALLY adds insult to injury. Your anger boils over and you have an overwhleming
    desire for revenge. What do you do?
    `,
    choices: [{
        id: 'baron',
        description: 'Impersonate the Bloody Baron...',
        result: `
        You do some quick thinking on your feet, and remember that the only person (alive or
        dead) that Peeves fears is the Bloody Baron. You act disgruntled and mutter something
        then stalk out of the shack, (in order to make Peeves think you are returning to the 
        castle). Once outside you decide to try a new spell you read about that modifies your
        voice. You point your wand at your throat, whisper the incantation, then crouch near
        one of the open shack windows. You begin to speak loudly (and as you do, it is the Bloody
        Baron's voice that comes out), "Peeves, what are you doing here? I reserved this shack
        for some business tonight. If you do not vacate IMMEDIATELY, I will be forced to use
        different tactics of persuasion!" Before the last word has left your lips, you hear a 
        scared squeak from inside the shack, and not a moment later, you see Peeves shoot out
        the front door and back along the path to the castle. You are still wet, but you are now
        feeling victorious, and you are excited that new spell worked. You earn 10 spell points.
        `,
        injury: 0,
        spells: 10
    }, {
        id: 'spell',
        description: 'Jinx Peeves!',
        result: ` 
        You are seeing RED! The first thing that pops into your head is a jinx you learned
        about from your friend. Without even thinking, you point your wand at Peeves and shout the 
        incantation. Almost immediately Peeves's tongue turns purple, flops out of his mouth, and 
        continues to swell. You are immensly pleased with yourself that Peeves is looking angry and that
        your new spell worked, take 20 spell points! BUT--Peeves is looking progressively more PERTURBED,
        he gives you one side-eyed glance before zooming out of the shack. When you arrive back at the castle
        you are greeted by Peeves and Filch at the entrance. Both are looking rather smug. Filch says, "Peeves
        tells me you were not only out of bed, but out of bounds after curfew...my, my, we are in trouble
        aren't we?" You feel your stomach drop and realize you are in DEEP trouble that will cause you to lose
        thirty injury points.
        `,
        injury: -30,
        spells: 20
    }, {
        id: 'leave',
        description: 'Be the bigger wizard, do not retaliate, and walk back to the castle.',
        result: `
        YES you are angry, YES you are wet, BUT--you take a second to breathe and realize that Peeves
        really isn't worth your time. You have been pranked and goaded by him before, and have learned 
        that he will continue to press your buttons until you get in serious trouble. Come to think of
        it, you are already out of bed after hours AND you are technically beyond the school grounds, best
        not to press your luck. You shake off some excess water, tuck your wand in your belt, turn on your
        heel and start to walk back to the castle. On your walk back you laugh and think to yourself: at
        least you have a good story to tell your friend!
        `,
        injury: 0,
        spells: 0
    }]
};

const forbiddenForest = {
    id: 'forest',
    title: 'Explore the Forbidden Forest',
    image: 'forbidden-forest.jpg',
    audio: 'forest.m4a',
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
    audio: 'knockturn',
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