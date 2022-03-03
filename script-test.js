var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;
    
// create two boxes and a ground
const boxHeight = 100;
const boxWidth = 100;
let boxOffset = 80;

function generateBoxes(){
    let boxesArray = [];
    for(let i = 0; i < 20; i++ ){
        boxesArray[i] = Bodies.rectangle(boxOffset*i , 400, boxHeight, boxWidth, {
                render: {
                    sprite: {
                        texture: './img/img-' + (i + 1) +'.png',
                        xScale: 0.5,
                        yScale: 0.5
                    }
                }
            })
    }
    return boxesArray;
}
generateBoxes();