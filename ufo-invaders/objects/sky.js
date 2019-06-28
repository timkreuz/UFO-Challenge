import { EARTH_HEIGHT } from './earth.js';
export function getSky(canvas) {
    return {
        type: "rectangle", x: 0, y: 0, width: canvas.width, height: canvas.height - EARTH_HEIGHT,
        color: '#000033'
    };
}