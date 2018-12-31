import React from 'react';
import { addFlag, addScenes } from 'web-text-adventure';

addFlag("money", 100);

addScenes({
    // Start. Level 1.
    start: {
        prompt: () => <div>
            <p>You wake up in a room. <b>What do you do?</b></p>
            <p class="credit">Contributed by: dave.</p>
        </div>,
        options: [
            { text: "Go outstide", to: "outside" },
            { text: "Make some breakfast.", to: "breakfast" },
            { text: "Check the time", to: "checkTime" }
        ]
    },

    // Go outside. Level 2.
    outside: {
        prompt: () => <div>
            <p>You walk outside from sleeping. You spot multiple different animals such as lizards, spiders, and humans. <b>What do you do?</b></p>
            <p class="credit">Contributed by: Hunter Parcells.</p>
        </div>,
        options: [
            { text: "Touch the lizard.", to: "lizardTouch" },
            { text: "Touch the spider.", to: "spiderTouch" },
            { text: "Touch the human.", to: "humanTouch" }
        ]
    },

    // Eat breakfast. Level 2.
    breakfast: {
        prompt: () => <div>
            <p>You walk downstairs to make some breakfast.What do you make?</p>
            <p class="credit">Contributed by: Colyderp.</p>
        </div>,
        options: [
            { text: "Pancakes.", to: "pancakes" },
            { text: "Waffles.", to: "waffles" },
            { text: "Hashbrowns.", to: "hashbrowns" },
            { text: "Omlette.", to: "omelette" }
        ]
    },

    // Check time. Level 2.
    checkTime: {
        prompt: () => <div>
            <p>You look at your clock to check the time and realize...</p>
            <p class="credit">Contributed by: Anonymous.</p>
        </div>,
        options: [
            { text: "...you are still sleepy and need more rest.", to: "start" },
            { text: "...you're hungry and want to eat something.", to: "breakfast" },
            { text: "...you have plans to go outside and go on an adventure.", to: "" }
        ]
    },

    // Pancakes. Level 3.
    pancakes: {
        prompt: () => <div>
            <p>You want to make pancakes, but you have a few types to choose from.</p>
            <p class="credit">Contributed by: dave.</p>
        </div>,
        options: [
            { text: "Regular.", to: "regularPancakes" },
            { text: "McDonalds™ brand.", to: "mcdPancakes" },
            { text: "Chocolate.", to: "chocolatePancakes" },
            { text: "Peanut butter.", to: "pbPancakes" }
        ]
    },

    // Peanut butter pancakes. Level 4.
    pbPancakes: {
        prompt: () => <div>
            <p>Turns out you are allergic to peanut butter. Now you have to play a hospital and ambulance bill of <b>$4313</b>. Do you pay it?</p>
            <p class="credit">Contributed by: Hunter Parcells.</p>
        </div>,
        options: [
            { text: "Yes (-$4313)", to: "yesPayBill" },
            { text: "No", to: "noPayBill" }
        ]
    },

    // Don't pay hospital bill. Level 5.
    noPayBill: {
        prompt: () => <div>
            <p>You decide not to pay the bill and...</p>
            <p class="credit">Contributed by: <a href="https://filipkin.com/">Filip96</a>.</p>
        </div>,
        options: [
            { text: "Run for it.", to: "runFromHospital" },
            { text: "Take out a loan.", to: "" },
            { text: "Jump out a window.", to: "dead" },
        ]
    },

    // Dead. Level 0.
    dead: {
        prompt: () => <div>
            <p>Uh oh how unfortunate. <b>You died.</b> Luckily this is a game where you can just play again. <s>You can also see credits here so thats nifty.</s></p>
            <p class="credit">Contributed by: Hunter Parcells.</p>
            
            <h1>Credits</h1>
            <h3>Head Team</h3>
                <li>Hunter Parcells</li>
                <li>dave</li>
            <h3>Contributers</h3>
            <ul>
                <li>Hunter Parcells</li>
                <li>dave</li>
                <li><a href="https://filipkin.com/">Filip96</a></li>
                <li>Colyderp</li>
            </ul>
        </div>,
        options: [
            { text: () => <div><h1><b><u>Play Again</u></b></h1></div>, to: "start" }
        ]
    }
});
