// https://github.com/kittykatattack/learningPixi

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

var app = new PIXI.Application({ width: 1440, height: 810, backgroundColor : 0x000000});
document.getElementById('game').appendChild(app.view);

const loader = PIXI.loader;
const sprites = {};

loader.add('ness', 'img/ness.png')
      .add('hexmap', 'img/hex2.png')
      .add('starfield', 'img/starfield.jpg');

// TODO investigate this middleware business
//loader.pre(cachingMiddleware);
//loader.use(parsingMiddleware);
loader.load((loader, resources) => {
    sprites.hexmap = new PIXI.Sprite(resources.hexmap.texture);
    sprites.starfield = new PIXI.Sprite(resources.starfield.texture);
    sprites.nesses = [
        new PIXI.Sprite(resources.ness.texture),
        new PIXI.Sprite(resources.ness.texture),
        new PIXI.Sprite(resources.ness.texture),
        new PIXI.Sprite(resources.ness.texture),
        new PIXI.Sprite(resources.ness.texture),
    ];

    console.log(sprites.starfield);

    app.stage.addChild(sprites.starfield, sprites.hexmap);

    // fit background to window
    sprites.starfield.width = app.screen.width;
    sprites.starfield.height = app.screen.height;

    sprites.hexmap.anchor.set( 0.5, 0.5 );
    sprites.hexmap.interactive = true;
    sprites.hexmap.x = app.screen.width / 2;
    sprites.hexmap.y = app.screen.height / 2;
    sprites.hexmap.on('pointerdown', placeThingy);

    sprites.nesses.forEach( (ness, index) => {
        app.stage.addChild(ness);
        ness.anchor.set( 0.5, 0.5 );
        ness.interactive = true;
        console.log(ness);
        ness.x = ness.width * 1.5 + ness.width * 1.5 * index;
        ness.y = app.stage.height - ( ness.height * 1.5 );
        ness.on('pointerdown', selectNess);
    });
});

function placeThingy(event) {
    var newPosition = event.data.getLocalPosition(this.parent);
    selected.x = newPosition.x;
    selected.y = newPosition.y;
}

let selected = null;
function selectNess(event) {
    if( selected === this ) {
        selected = null;
        this.alpha = 1;
    } else {
        if( selected ) {
            selected.alpha = 1;
        }
        selected = this;
        this.alpha = 0.75;
    }
}

//--------------------------------------------------------------
//  for click and drag behavior
//--------------------------------------------------------------
//ness
//    .on('pointerdown', onDragStart)
//    .on('pointerup', onDragEnd)
//    .on('pointerupoutside', onDragEnd)
//    .on('pointermove', onDragMove);

//function onDragStart(event) {
//    // store a reference to the data
//    // the reason for this is because of multitouch
//    // we want to track the movement of this particular touch
//    this.data = event.data;
//    this.dragging = true;
//}

//function onDragEnd() {
//    this.dragging = false;
//    // set the interaction data to null
//    this.data = null;
//}

//function onDragMove() {
//    if (this.dragging) {
//        var newPosition = this.data.getLocalPosition(this.parent);
//        this.x = newPosition.x;
//        this.y = newPosition.y;
//    }
//}
//--------------------------------------------------------------
//  end click and drag behavior
//--------------------------------------------------------------