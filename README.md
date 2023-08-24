# games__ai
<a name="readme-top"></a>
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#goals">Goals</a>
            <ul>
                <li><a href="#about">About</li>
                <li><a href="#preview">Preview</li>
            </ul>
        </li>
        <li><a href="#design">Design</li>
          <ul>
            <li><a href="#requirements">Tools</li>
            <li><a href="#tools">Tools</li>
            <li><a href="#roadmap">Roadmap</li>
          </ul>
        </li>
        <li><a href="#usage">Usage</a>
            <ul>
                <li><a href="#install">Install</li>
                <li><a href="#run">Run</li>
            </ul>
        </li>
        <li><a href="#acknowledgements">Acknowledgements</li>
    </ol>
</details>

## Goals
### About
play against a computer
### Preview
michael-chung-mc.github.io/games__ai/
## Design
TDD
### Requirements
### Tools
    * HTML
    * CSS
    * Javascript
    * Jest
### Roadmap
- [x] rock paper scissors
- [x] tictactoe
- [ ] Battleship
    - [x] Ship factory function.
        - [x] length, health, sunk
        - [x] hit() = health-=1
        - [x] isSunk()
    - [x] Gameboard
        - [x]ship placement
        - [x] receiveAttack(coordinates) either hits a ship or misses the shot
        - [x] keep track of missed attacks so they can display them properly
        - [x] report whether or not all of their ships have been sunk
    - [X] Player.
        - [X] can take turns playing the game by attacking opposing Gameboard
        - [X] simple ai makes random plays but avoids hitting the same spot twice
    - [X] User Interface = DOM interaction
    - [ ] Create the main game loop
        - [X] The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
        - [ ] We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
            - [ ] You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
        - [ ] The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
        - [ ] Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.
    - [ ] Finish it up
        - [ ] There are several options available for letting users place their ships. You can let them type coordinates for each ship, or investigate implementing drag and drop.
        - [ ] You can polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.
        - [ ] Optionally, create a 2 player option that lets users take turns by passing the device back and forth. If you’re going to go this route, make sure the game is playable on a mobile screen and implement a ‘pass device’ screen so that players don’t see each others boards!
- [ ] style root index.html
## Usage
### Install
### Run
## Acknowledgements
* [The Odin Project](https://www.theodinproject.com/)
* [Full Stack Open](https://www.fullstackopen.com/)
* [ViteJs](https://vitejs.dev)
<p align="right">(<a href="#readme-top">back to top </a>)</p>
