# Pixathon — Problem Statement

## THE PROBLEM

CAPTCHAs are among the most-hated puzzles on the internet: blurry crosswalks, squiggly letters, endless "select all the bicycles".

They interrupt people, often shut out users with disabilities, and modern bots now pass many of them faster than humans do.

The idea behind them is still fascinating, though: a tiny test that only a human can enjoy or solve.

## YOUR MISSION

Design and build a playable, CAPTCHA-style challenge that a human can clear in under 30 seconds, actually enjoys, and that plays with the question of what makes us human (and what a bot would get wrong).

**Don't build real security. This is a game about the idea of a CAPTCHA.**

## MUST-HAVES

1. **Runs in the browser:** The game must be playable in a web browser.
2. **At least 3 different challenge types, or a random generator:** Implement at least three distinct CAPTCHA-style challenge types, or a random generator.
3. **Clear pass / fail feedback:** Players must receive clear feedback indicating whether they passed or failed.
4. **Under 30 seconds:** Each challenge must take less than 30 seconds to complete.
5. **Restart without reloading:** Players must be able to restart the game without refreshing the browser page.

## ACCEPTANCE CRITERIA

- The player can start and play the game in a browser.
- At least three distinct challenge types are implemented, or a random challenge generator is available.
- Each challenge has a defined objective and a way to evaluate the player's answer.
- Pass and fail states are clearly communicated.
- Individual challenges are designed to be completed in under 30 seconds.
- Restart resets the game state without a page reload.
- The experience is enjoyable and explores the difference between human intuition and machine-like reasoning.
- The game is a creative simulation, not a real security or authentication system.

## IMPLEMENTATION PRIORITY

1. Build the core playable challenge.
2. Implement the required challenge variety and answer validation.
3. Add clear instructions, feedback, and restart functionality.
4. Improve visual design, responsiveness, and enjoyment.
5. Test the game in the browser and fix critical bugs.

Keep the implementation simple, reliable, and achievable within the Pixathon hackathon time limit.
