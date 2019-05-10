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
    It is the summer holiday and you are in Diagon Alley buying your school supplies
    for the following year. After ticking off all the items on your list, your parents offer
    to take them back home, so you can have an ice cream at Florean Fortescue's and read your
    new book in the sun. Once you have settled with your ice cream, you see Lucius and Draco Malfoy 
    walk by, you cover your face with your book and listen to their conversation. "No Draco," Lucius
    spat, "you cannot cometo Knockturn Alley. Some of my side business needs to be kept
    quiet, so the Ministry does not hear of it. And you brag to anyone that will listen. So stay
    here, I will only be a moment." You peak up from your book and see Lucius's cloak disappear 
    around the corner. Curiosity gets the better of you, and you abadon your ice cream to follow him
    and see what he is up to. You follow him to Knockturn Alley, where he ducks into Borgin & Burks.
    You sneak one of the Weasley's extendible ears into a crack in the window and hunker down to listen.
    "It is very rare Lucius, and very illegal. It will be risky for me to procure, and risky means expensive."
    You guess this must be the shop owner speaking, Lucius responds, "Cost has never been a factor for
    me, you know that. But need I remind you, I am doing the Dark Lord's bidding, that should be incentive
    enough to get it, and quickly. Once I have it, I can set his plan in action, and many will perish."
    The shop owner stutters a little and responds, "of course, yes, anything to serve the Dark Lord. I
    will get it for you without delay." You pull out the extendible ear and do some quick thinking. You
    have never liked the Malfoy's, but now you know they are involved in something that could kill 
    people. You feel like you have to do something to foil Lucius's plan, you can't do nothing, knowing
    that people are in danger. What do you do?
    `,
    choices: [{
        id: 'confront',
        description: 'Confront Lucius directly.',
        result: `
        You are suddenly filled with anger! Why does Lucius get away with manipulating
        everyone for his or Voldermorts gain? You think about it and realize he is nothing
        more than a big bully. Your anger takes the place of any fear you may have of Lucius,
        so when he walks out of the shop door a second later, immediately walk over to him.
        You boldy stand in his path and say "I know what you are doing, and I am going to make 
        sure you don't get away with it." He chuckles and looks at you like a spec of dirt
        he is about to brush off his shoulder, "I don't know who you are, but you are just 
        a child. I am willing to bet that you don't really my business. But let me just 
        demonstrate a small piece of the power I wield so you stay out of my way." Before
        you have a chance to respond, he slips his wand from his robes, points it at you
        and yells, "crucio!" Your whole body is filled with pain you have never experienced.
        It feels like hours and days are passing, and the pain makes you wish you could just
        die. Finally it stops. You are left curled up on the ground unable to move or see for 
        several minutes. Once you open your eyes you see that Lucius is gone and you are alone
        on the street. You never want to feel anything like that again. You take 10 injury points
        and decide to mind your own business and try to forget what you heard.
        `,
        injury: 10,
        spells: 0
    }, {
        id: 'dumbledore',
        description: 'Take the information to Dumbledore.',
        result: ` 
        You feel compelled to act, I mean, people's lives are at stake! But you know that
        you can't handle this on your own. You decide the best course of action will be to 
        tell Dumbledore. You know he is deep into the resistance, and he is always willing
        to hear a student out. You visit Dumbledore in his office as soon as term starts and rely 
        what you overheard. He thanks you for the information, and tells you that he has
        already been watching Lucius movements pretty closely, and knows he is expecting an
        illegal object from Borgin (the shop owner), in a few days time. You ask Dumbledore
        what the object is, and what Lucius will do with it. Dumbledore chuckles at you and
        his eyes twinkle behind his spectacles. "Never you mind. The term has just begun and
        I am willing to bet that you have classes to study for. I believe you will find me 
        completely capable of handling Lucius. I admire your original curiosity that compelled
        you to listen to his conversation that day, but I must warn you that too much curiosity
        can indeed be dangerous." Then he gives you a wink and you know the meeting is over. You 
        may not have used any super cool spells to foil Lucius, but you are reassured that 
        Dumbledore will prevent his plan from coming to fruition. And you do have lots of homework
        so you decide to wipe Lucius from your mind and fill it with spells instead.
        `,
        injury: 0,
        spells: 2
    }, {
        id: 'spell',
        description: 'Obliviate Lucius!',
        result: `
        You know that a war is coming. Voldermort is again rising to power, and action needs to be
        taken. You are inspired by the little pieces of resistance you have been hearing of around 
        the country. You decide that it is time to act! You cannot let Lucius kill innocent people
        to do Voldermort's bidding. You know it may not be a responsible or legal choice, but you 
        also know that not sometimes the right choice isn't responsible or legal. You see Lucius
        walk out of the shop, and you know your moment is upon you. You aren't even sure if it will
        work, as you have never tried the spell before and it is beyond your years, but you point your
        wand at his back and say "oblivate!" He stops in his tracks and just stands still. You aren't
        sure if it worked or not so you wait a moment or two. He still does not move. You cautiously 
        call his name and he turns with a bewildered look on his face and says, "What did you call me?
        I am terribly sorry to bother you, but I don't seem to know where I am...or who I am..." You realize
        that not only did your spell work, but it was stronger than you intended, you made him forget
        his whole identity. Take 30 spell points for not only performing magic above your level, but beyond. 
        However, you also take 10 injury points because there are consequences for robbing someone of their
        entire identity. The whole Malfoy family will be affected, and really if you think about it, Voldermort
        can very easily get another death eater to complete whatever Lucius's task was. 
        `,
        injury: 10,
        spells: 30
    }]
};

const questArray = [shriekingShack, forbiddenForest, knockturnAlley];

export default questArray;