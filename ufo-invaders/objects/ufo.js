import {EARTH_HEIGHT} from './earth.js';
export function getUFO(canvas) {
    return {
        type: "rectangle",
        x: 100, y: canvas.height - 200, width: 40, height: 10, speedX: 2, speedY: 2, color: '#33FFE9',
        maxLeft: 0, maxRight: canvas.width, maxUp: 0, maxDown: canvas.height - EARTH_HEIGHT, timer: Date.now() + 3000

    };
}
export function updateUFO(ufo) {
    if (Date.now() > ufo.timer) {
        randomize(ufo);
        }
    if (ufo.x + ufo.width > ufo.maxRight || ufo.x < ufo.maxLeft) {
        ufo.speedX = ufo.speedX * -1;
    }
    
    if (ufo.y + ufo.height > ufo.maxDown || ufo.y < ufo.maxUp) {
        ufo.speedY = ufo.speedY * -1;
    }
    
    ufo.x = ufo.x + ufo.speedX
    ufo.y = ufo.y + ufo.speedY
}
function randomize(ufo) {
        ufo.speedX = (Math.floor(Math.random()* 90) - 45)/10;
        ufo.speedY = (Math.floor(Math.random()* 90) - 45)/10;
        ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}