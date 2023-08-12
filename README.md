# theodinproject--battleship
<a name="readme-top"></a>
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#about-this">About This</a>
            <ul>
                <li><a href="#what">What</li>
                <li><a href="#why">Why</li>
                <li><a href="#how">How</li>
            </ul>
        </li>
        <li><a href="#roadmap">Roadmap</li>
        <li><a href="#acknowledgements">Acknowledgements</li>
    </ol>
</details>

## About This
The Odin Project Battleship Assignment

### What

Battleship Game

### Why

Test Test Driven Development.
Rely on Jest not DOM methods or console.log() during development.

### How
* Tech
    * HTML
    * Javascript
    * Jest

## Roadmap
- [x] Begin your app by creating the Ship factory function.
    - [x] Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
    - [x] Ships should have a hit() function that increases the number of ‘hits’ in your ship.
    - [x] isSunk() should be a function that calculates it based on their length and the number of ‘hits’.
- [x] Create Gameboard factory.
    - [x] Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
    - [x] Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    - [x] Gameboards should keep track of missed attacks so they can display them properly.
    - [x] Gameboards should be able to report whether or not all of their ships have been sunk.
- [X] Create Player.
    - [X] Players can take turns playing the game by attacking the enemy Gameboard.
    - [X] The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
- [ ] Create the main game loop and a module for DOM interaction.
    - [X] At this point it is appropriate to begin crafting your User Interface.
    - [X] The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
    - [ ] We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
        - [ ] You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
    - [ ] The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
    - [ ] Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.
- [ ] Finish it up
    - [ ] There are several options available for letting users place their ships. You can let them type coordinates for each ship, or investigate implementing drag and drop.
    - [ ] You can polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.
    - [ ] Optionally, create a 2 player option that lets users take turns by passing the device back and forth. If you’re going to go this route, make sure the game is playable on a mobile screen and implement a ‘pass device’ screen so that players don’t see each others boards!

## Acknowledgements
* [The Odin Project](https://www.theodinproject.com/)
<p align="right">(<a href="#readme-top">back to top </a>)</p>