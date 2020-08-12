const isObject = target => target !== null && ( typeof target === 'object' || typeof target === 'function' );

const deepClone = ( target, map = new WeakMap( )) => {
    if ( map.get( target )) return target;

    // 引用类型
    if ( isObject( target )) {
        map.set( target, true );
        const cloneTarget = Array.isArray( target ) ? [ ]: { };
        // 深克隆引用类型
        for ( let prop in target ) {
            if (target.hasOwnProperty( prop )) {
                cloneTarget[ prop ] = deepClone( target[ prop ], map );
            }
          }
          return cloneTarget;
    // 普通类型
    } else {
        
        return target;
    }
}

const a = { val:2 };
a.target = a;

console.log( deepClone( a )) // { val: 2, target: { val: 2, target: [Circular] } }