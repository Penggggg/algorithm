/**
 * 
 * 在规定时间单位内，只能有一次触发事件的回调函数执行
 * 如果在同一个单位时间内某事件被触发多次，只有一次能生效。
 * 
 * 好比公交车，固定10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到我就要发车走人！
 * 
 * 场景：定时触发、scroll回调事件的节流
 */


function throttle( fn, interval ) {
    // 通过闭包，给每个节流函数一个判断点，如果OK的话，才创建setTimeout
    let isOK = true;
    return function( ...arg ) {
        const ctx = this;
        if ( !isOK ) return;

        isOK = false;
        setTimeout(( ) => {
            // apply跟call都是立马执行的
            fn.apply( ctx, arg );
            isOK = true;
        }, interval );
    }
}

let fn = ( )=>{
    console.log('boom')
}
  
setInterval( throttle( fn, 1000 ), 10 )