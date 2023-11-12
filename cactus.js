import {
    setCustomProperty,
    incrementCustomProperty,
    getCustomProperty,
}from "./updateCustomProperty";
const speed = 0.5
const cactus_interval_min = 500
const cactus_interval_max = 2000
const worldElemtns = document.querySelector("[data-world]")

let nextCatusTime
export function setUpcactus() {
    nextCatusTime = cactus_interval_min
    document.querySelectorAll("[data-cactus]").forEach(cactus => {
        cactus.remove()
    })
}
export function UpdateCactus(delta, speedScale) {
    document.querySelectorAll("[data-cactus]").forEach(cactus => {
        incrementCustomProperty(cactus, "--left", delta * speedScale * speed * -1)
        if (getCustomProperty(cactus, "--left") <= -100) {
            cactus.remove()
        }
    })
    if (nextCatusTime <= 0) {
        createCactus()
        nextCatusTime = 
        randomNumberBetween(cactus_interval_min) / speedScale
    }
    nextCatusTime -= delta
}

export function getCactusRects() {
    return[...document.querySelectorAll("[data-cactus]")].map(cactus => {
        return cactus.getBoundingClientRect()
    })
}
function createCactus() {
    const cactus = document.createElement("img")
    cactus.dataset.cactus = true
    cactus.src = "img/cactus.png"
    cactus.classList.add("cactus")
    setCustomProperty(cactus, "--left", 100)
    worldElemtns.append(cactus)
}
function RandomnumbersBetweeb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
