import {
    Curtains,
    Plane
} from './node_modules/curtainsjs/src/index.mjs';

window.addEventListener("load", () => {
    // set up our WebGL context and append the canvas to our wrapper
    const curtains = new Curtains({
        container: "canvas",
        pixelRatio: Math.min(1.5, window.devicePixelRatio) // limit pixel ratio for performance
    });

    // get our plane element
    const planeElements = document.getElementsByClassName("plane");

    // set our initial parameters (basic uniforms)
    const params = {
        vertexShaderID: "plane-vs", // our vertex shader ID
        fragmentShaderID: "plane-fs", // our framgent shader ID
        uniforms: {
            time: {
                name: "uTime", // uniform name that will be passed to our shaders
                type: "1f", // this means our uniform is a float
                value: 0,
            },
        }
    };

    const plane = new Plane(curtains, planeElements[0], params);

    // set up our basic methods
    plane.onRender(() => { // fired at each requestAnimationFrame call
        plane.uniforms.time.value++; // update our time uniform value
    });

});