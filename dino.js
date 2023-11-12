import {
    setCustomProperty,
    incrementCustomProperty,
    getCustomProperty,
}from "./updateCustomProperty";

const dinoELements = document.querySelector("[data-dino]")
const jump_Speed = 0.45
const Gravity = 0.0015
const Dino_frame_conunt = 2
const frame_time = 100

let isJumping
let dinoFrame 
let currentFrameTime
let yVelocity

export function setUpDino() {
    isJumping = false
    dino = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(dinoELements, "--bottom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
}
export function UpdateDino(delta, speedScale) {
    handleRun(delta, speedScale)
    handleJump(delta)
}

export function getDinoRect() {
    return dinoELements.getBoundingClientRect()
}

export function setDinoLoser() {
    dinoELements.src = "img/dino-lose.png"
    currentFrameTime -= frame_time
}
function handleRun(delta, speedScale) {
    if (isJumping) {
        dinoELements.src = `ìmg/dino-stationary.png`
        return
    }
    if (currentFrameTime >= frame_time) {
        dinoFrame = (dinoFrame +1) % Dino_frame_conunt
        dinoELements.src = `img/dino-run-${dinoFrame}.png`
        currentFrameTime -= frame_time
    }
    currentFrameTime += delta * speedScale
}

function handleJump(delta) {
    if (!isJumping) return

    incrementCustomProperty(dinoELements, "--bottom", yVelocity * delta)

    if (getCustomProperty(dinoELements, "--bottom") <= 0) {
        setCustomProperty(dinoELements, "--bottom", 0)
        isJumping = false
    }
    yVelocity -= Gravity * delta

}
function onJump(e) {
    if (e.code !== "Space" || isJumping) return
        yVelocity = jump_Speed
        isJumping = true
}