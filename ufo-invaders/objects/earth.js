export const EARTH_HEIGHT = 30;
export function getEarth(canvas) {
    var earth = {
        type: "rectangle",
        x: 0, y: canvas.height - EARTH_HEIGHT, width: canvas.width, height: EARTH_HEIGHT,
        color: '#6600ff'
    };
    return earth;
}
