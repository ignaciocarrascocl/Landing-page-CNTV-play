window.addEventListener("load",init);
let winHeight = window.innerHeight ;
let winWidth = window.innerWidth;

function init(){
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

// create a renderer
var render = Render.create({
    element: document.getElementById('matter'),
    engine: engine,
    options: {
        width: winWidth / 1.2,
        height: winHeight / 2,
        showAngleIndicator: false,
        wireframes: false,
        background: "transparent"
    }
});

    // add bodies
    var offset = 10,
        options = { 
            isStatic: true,
        };

    world.bodies = [];
    // Matter.Bodies.rectangle(x, y, width, height, [options])
    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        Bodies.rectangle(winWidth/2, -25, winWidth, 50, options),
        Bodies.rectangle(winWidth/2, winHeight/2 +25, winWidth, 50, options),
    ]);

    // Definiendo las portadas/cajas
const boxWidth = 100;
const boxHeight = 100;
let boxOffset = 0;
let boxesArray = [];

function generateBoxes(){
    let initialPosition = winWidth / 1.2 / 10;
    for(let i = 0; i < 10; i++ ){   
        boxesArray[i] = Bodies.rectangle( initialPosition * (i+1) , boxHeight, boxWidth ,boxHeight, {
                 render: {
                    sprite: {
                        texture: './img/img-' + (i + 1) +'.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                } 
            })
    }
    for(let i = 9; i < 20; i++ ){   
        boxesArray[i] = Bodies.rectangle(initialPosition * (i-8) , 250, boxWidth ,boxHeight, {
                render: {
                    sprite: {
                        texture: './img/img-' + (i + 1) +'.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
            })
    }

}

generateBoxes()

// add all of the bodies to the world
Composite.add(engine.world, boxesArray);

// add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);


// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);}