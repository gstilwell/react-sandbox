class Loader {
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

        for( var key in spriteArray ) {
            this.loader.add( key, spriteArray[key] );
        }

        this.sprites = {};
        this.loader.load( this.loadSprites.bind(this) );
    }

    loadSprites(loader, resources) {
        this.sprites.hexmap = new PIXI.Sprite(resources.hexmap.texture);
        this.sprites.starfield = new PIXI.Sprite(resources.starfield.texture);
        this.sprites.nesses = [
            new PIXI.Sprite(resources.ness.texture),
            new PIXI.Sprite(resources.ness.texture),
            new PIXI.Sprite(resources.ness.texture),
            new PIXI.Sprite(resources.ness.texture),
            new PIXI.Sprite(resources.ness.texture),
        ];
    }

    getSprites() {
        return this.sprites;
    }
}