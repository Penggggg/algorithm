/**
 * 高频触发的事件，但只在每n秒内执行一次。
 * 如果n秒内事件再次被触发，则重新计算当前循环的倒计时
 * 
 * 场景：输入搜索
 */

function debounce( fn, wait ) {
    // 通过闭包，给每个防抖函数一个判断点，如果存在setTimeout的timer，则替换
    let timer = null;
    return function ( ...arg ) {
        if ( !!timer ) {
            cleatTimeout( timer )
        }
        const ctx = this;
        timer = setTimeout(( ) => {
            fn.apply( ctx, arg );
        }, timeout );
    }
}

var fn = function () {
    console.log('boom')
}
  
setInterval( debounce( fn, 500 ), 1000 )