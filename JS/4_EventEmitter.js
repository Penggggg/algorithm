function EventEmitter( ) {
    this.events = new Map( );
}

EventEmitter.prototype.addListener = function( type, fn ) {
    const handler = this.events.get( type );
    if ( !handler ) {
        this.events.set( type, [ fn ])
    } else {
        this.events.set( type, [ ...handler, fn ])
    }
}

EventEmitter.prototype.emit = function( type, ...arg ) {
    const handler = this.events.get( type );
    if ( !handler ) return;
    handler.map( handle => {
        handle.apply( this, arg )
    })
}