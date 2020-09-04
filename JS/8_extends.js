function Animal( ) {    
    this.eat = function name( ) {
        console.log('eat')
    }
}

function Cat( name ) {
    Animal.call( this );
    this.name = name;
}
// Cat.prototype = Object.create( Animal )

const cat = new Cat( )
cat.eat( )