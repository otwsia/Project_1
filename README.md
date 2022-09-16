# Squid Game Unofficial Red Light Green Light Game

**1. Project description**

    This game is a simulation of the red light green light game from the Netflix TV series Squid Game.
    The objective of the game is to cross the finish line within a predetermined time period (1min in our simulation).

    During the game, players can only move on green and remain still on red.
    The colour state can be recognized by the 3 following aspects:

    - State of the doll at the finish line
      The doll has its back facing the player on green and head turned forward on red.
    - Audio queue
      The doll sings on green and scans for movement on red.
    - Glow of the game window
      The game window will also glows the associated colour.

    In this simulation, there are only 3 players; 1 controllable character and 2 AI.
    To move, the character the spacebar on the keyboard will have to be held down.
    Conversely, to stop moving, the spacebar should be released.

    Should the player move on red or exceed the alotted time on the wall clock, they will lose the game.
    This is signified by the shooting of the wall mounted turrets and the player sprite turning into a tombstone.

    However, should the player cross the finish line in time, they will enter a winning sequence.

    무궁화 꽃 이 피었 습니다!

**2. Technologies used**

    This project utilizes HTML, CSS and Javascript to bring the game to life.

**3. How to use**

    The game can be played at the GitHub Pages url link in the project's repository.

**4. Approach taken**

    The project was broken down into 3 phases: completion of the Minimum Viable Product(MVP) and 2 stretch goals.

**Minimum Viable Product(MVP)**

    The MVP of the project was to complete a barebones version of the game.
    This entailed an interface with minimal aesthetic design but working game controls and logic.
    The game at this phase included the following components:

    - Game window
      A game window that is split in half.
      > The top displays the game notifications and timer.
      > The bottom containd the player, finish line and doll.
    - Game notification bar
      A notification bar that displayd differnent phrases at various points of the game.
      > Countdown sequence upon game initialization
      > Game instructions during play
      > Congratulations upon win
      > Game over upon loss
    - Game timer
      A timer that counts down from 60 to 0 seconds.
    - Playable character
      A playable character capable of moving to the finish line based on player input.
      However, character movement will be restricted upon win/loss.
    - Doll
      A doll that turns back and forth randomly to signify the different states of the game.

**Stretch goal 1: Turrets and AI**

    The first stretch goal was to include the turrets which would fire upon game loss and 2 other AI.
    Progess here included:

    - Turrets
      Turrets that would fire upon game loss were included.
      Firing is distinguished by the red auro at the end of the turrets.
    - AI
      2 other AIs were included with similar movement animations as the playable character.
      However, these AIs were coded to lose at random points of the game.
    - Playable character
      The playable character was updated with a 8-bit sprite capable of animated movement.
      The sprite changes to a tombstone upon loss.
      The player also has an indicator above their head to distinguish them from the AI.
      The indicator changes to a skull upon loss and a crown upon win.

**Stretch goal 2: Sound and Aesthetics**

    The second stretch goal was to include sound that syncs with existing game functions and enhance aesthetics.
    Progress here included:

    - Sound
      Sound was included for the following game functions:
      > Game initialization countdown
      > Doll singing (random playback speed in-sync with doll movement)
      > Doll scanning (random playback speed in-sync with doll movement)
      > Turret firing
      > Game over
      > Win sequence
    - Game title
      A game title with unique styling was added above the game window.
    - Page background
      A page background was added around the game window.
    - Start screen
      A start screen was added to hide the game window before initialization.
    - Buttons
      The following buttons were included:
      > Start button on start screen
      > Restart button in game window (reverts to start screen)
      > Mute button in game window
    - Game window glow
      A glow was included around the game window to reflect the colour state of the game.

**5. Unsolved problems**

    There seems to be a bug with the game title alignment on the Safari web browser that is not apparent on Chrome.
    Player speed also seems to be faster on keyboards with higher actuation detection rates.
    More testing will be required to troubleshoot these issues.

**6. Other potential features**

    - Character selection menu
        Include menu for character selection and retool player sprites to reflect choice.
    - Retooling restart button
        Upon click to revert to countdown sequence instead of start menu
    - Include other game modes
        Recreate the other games from the TV series and include them as playable game modes
