const shriekingShack = {
    id: 'shack',
    title: 'Sneak to the Shrieking Shack',
    map: {
        top: '75%',
        left: '34%'
    },
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
        20 injury points.
        `,
        injury: -20,
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
    map: {
        top: '52%',
        left: '70%'
    },
    image: 'forbidden-forest.jpg',
    audio: 'forest.m4a',
    description: `
    It is the late afternoon and you feel drained and overwhelmed by your class 
    schedule and homework. It has been a beautiful day, and the last reminants of 
    sun poking through the clouds calls you to take a walk outside to clear your 
    head. You are enjoying your walk along the grounds, but as you sidle up to
    the tree line of the forbidden forest, a quick movement from within the forest
    catches your eye. Step a little closer, calling out to ask if someone is there.
    You here a faint croak, "please help me..." You aren't sure what to do. You know
    the rules, you aren't supposed to go into the Forbidden Forest by yourself.
    You take a few more steps into the tree line to try and catch a glimpse of 
    who is in need of your help. Suddenly you feel a pair of strong hands lift you
    off the ground, incapacitating your arms by your sides. You begin to let out a
    scream, but the pair of arms, turns you around so you are facing your capture, 
    and the large centuar who is holding you whispers, "don't make a sound, or they 
    will come for both of us..." You don't know who "they" is and you don't know who
    this centuar is and you are frightened. You ask what he wants. He answers, "I was
    thrown out of my herd for disregarding the future the stars held for me. They want
    me dead. You must help me. You are young, and it is against a centuars's beliefs
    to kill the young. If you could stand in front of me, when they come with their
    arrows, you could prevent me from dying. Please?" One thing is for certain, you
    are no longer overwhelmed by your school work in this moment. What do you want to
    do?
    `,
    choices: [{
        id: 'castle',
        description: 'You decide to convince the centuar to return with you to the castle.',
        result: `
        You are not keen on the idea of standing in front of this centuar only to risk
        becoming a human pin-cushion. But you also don't like the idea of leaving this centuar
        alone in the forest to die by the hands of his herd. You do some quick thinking and
        pull the centaur aside behind some large shrubbery, hoping to hide you both, and by some
        time. You convince him through hushed whispers to come with you back to the castle
        because you know one of the professors must be able to help him out of this predicament. He 
        is not too sure about this plan, as he has never been to the castle and doesn't feel that he
        belongs. At the sudden sound of hooves, and voices approaching, you look him in the eye
        and whisper, "It is now or never!" He finally agrees and you both jump up and dash to the 
        tree line. You turn back just in time to see a centuar charging you both with an arrow drawn and
        ready, so you quickly point your wand and scream stupify! You see that your spell hit,
        and you turn and keep running. You both make it safely to the castle, where Dumbledore
        agrees to help relocate the centuar to a different herd. Your quick thinking has saved this
        centuar, and your well aimed spell prevented any further injury, so take 10 spell points.
        `,
        injury: 0,
        spells: 10
    }, {
        id: 'run',
        description: 'You cannot handle this, you turn on your heel and make a run for it!',
        result: ` 
        You are only a third year, you do not feel equipped to deal with this scenario
        and you don't even know very much about centuars. I mean, he could be lying to you!
        Without leaving much of a pause to give your answer, you turn and DASH back toward 
        the tree line, ignoring the centuars protests. You make it back safely to the entrance
        of the castle before you allow yourself a moment to slow down, breathe, and look
        back over your shoulder. No one has followed, you are safe. You heave a huge sigh
        of relief and head back to your house dorm. On the bright side, your brush with
        adventure has given you perspective, and your school work doesn't seem that daunting
        anymore. You crack your books and have an increibly productive night of studying that
        earns you 5 spell points!
        `,
        injury: 0,
        spells: 5
    }, {
        id: 'fight',
        description: 'You will help, but you will not just stand there, you will fight!',
        result: `
        You are feeling pity for this centuar and his plight, and it seems incredibly
        unfair that he should have to pay with his life for disregarding a fortune reading!
        You tell him that you will help, but you are not keen on the idea of passively
        standing in front of him and hoping they won't shoot you. You are gonna fight. Before 
        you have finished speaking, the sound of hooves running can be heard all around you.
        In a moment you and your new friend are surrounded by a heard of centuars with their
        bows drawn. You draw out your wand, open your mouth, and are suprised words come out, "please do not hurt 
        him, he should not have to die, and I am prepared to protect him." A centuar responds, "our fight is not with
        you, we do not want to harm you, but if you put yourself in our way, we cannot help
        if you are shot." You suddenly feel a searing pain and a crack in your chest, as the 
        centuar nearest you kicks you down to the ground, (so much for it being against a centuar's
        nature to harm the young, you think)! You have only a moment to act, and manage through
        the immense pain in your chest, to scream out the protective shield spell that
        encapsulates you and your new centuar friend. Even as the invisible shield covers you, arrows
        from the other centuars rain down around you, and they are stopped mid air by your spell. Just then, 
        Hagrid burst though the clearing, and after some arrows fired from his cross bow and
        terse words exchanged, the centuars agree to leave you both unharmed, and Hagrid agrees
        to relocate the ousted centuar to another herd. You are safe for now, but you know you have
        some broken ribs that will need tending, and they cost you 20 injury points. But on the bright
        side you cast a strong enough protective charm to save you both, so take 20 spell points!
        `,
        injury: -20,
        spells: 20
    }]
};

const knockturnAlley = {
    id: 'knockturn',
    title: 'Creep into Knockturn Alley',
    map: {
        top: '30%',
        left: '10%'
    },
    image: 'knockturn-alley.jpg',
    audio: 'knockturn',
    description: `
    g
    `,
    choices: [{
        id: 'gi',
        description: 'g',
        result: `
        g
        `,
        injury: 6,
        spells: 6
    }, {
        id: 'gf',
        description: 'g',
        result: ` 
        g
        `,
        injury: 6,
        spells: 6
    }, {
        id: 'gs',
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