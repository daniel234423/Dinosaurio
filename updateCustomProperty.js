export function getCustomProperty(elm, prop) {
    return parseFloat(getComputedStyle(elm).getPropertyValue(prop)) || 0
}
export function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value)
}
export function incrementCustomProperty(elem, prop, inc) {
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
}
