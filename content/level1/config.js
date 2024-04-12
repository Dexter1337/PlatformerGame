export const level1Config = {
  gravity: 700,
  playerSpeed: 400,
  jumpForce: 650,
  nbLives: 3,
  playerStartPosX: 1500,
  playerStartPosY: 100,
  fishPositions: [
    
    () => vec2(4100, 600),
    () => vec2(4220, 800),
    () => vec2(5200, 800),
    () => vec2(5300, 800),
  ],
  fishAmplitudes: [300, 500, 400, 500, 900, 800],
  fishType: 1,
  spiderPositions: [
    () => vec2(2300, 0),
    () => vec2(2220, 0),
    () => vec2(3200, 0),
    () => vec2(3400, 0),
    () => vec2(5500, 0),
    () => vec2(5900, 0)
  ],
  spiderAmplitudes: [600, 150, 400, 150, 300, 200],
  spiderSpeeds: [2, 1, 3, 2, 2, 2],
  spiderType: 1,
}
