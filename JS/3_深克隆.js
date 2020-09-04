const isObject = target => target !== null && ( typeof target === 'object' || typeof target === 'function' );

/**
 * 
 * @description
 * 简易版本，可解决循环印用
 */
const deepClone = ( target, map = new WeakMap( )) => {
    if ( map.get( target )) return target; // 解决循环引用的问题
    // 引用类型
    if ( isObject( target )) {
        map.set( target, true );
        const cloneTarget = Array.isArray( target ) ? [ ]: { };
        // 深克隆引用类型
        for ( let prop in target ) {
            if ( target.hasOwnProperty( prop )) {
                cloneTarget[ prop ] = deepClone( target[ prop ], map ); // 递归调用
            }
          }
        return cloneTarget;
    }
    return target; // 普通类型
}

const a = { val:2 };
a.target = a;

console.log( deepClone( a )) // { val: 2, target: { val: 2, target: [Circular] } }