class PixiApp {
    // spriteArray is an associative array:
    //  {
    //      'sprite1' : '/path/to/sprite/1',
    //      'sprite2' : '/path/to/sprite/2',
    //      'sprite3' : '/path/to/sprite/3'
    //  }
    //
    //  each sprite will be loaded upon creation
    constructor(spriteArray) {
        this.loader = PIXI.loader;
    }
}