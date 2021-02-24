/**
 * 如果n秒内，事件被再次触发，则重置倒计时
 * 
 * 场景：输入搜索
 */

function debounce( fn, wait ) {
    // 通过闭包，给每个防抖函数一个判断点，如果存在setTimeout的timer，则替换
    let timer = null;
    return function ( ...arg ) {
        if ( !!timer ) clearTimeout( timer )
        const ctx = this;
        timer = setTimeout(( ) => {
            fn.apply( ctx, arg );
        }, wait );
    }
}

var fn = function () {
    console.log('boom')
}
  
setInterval( debounce( fn, 500 ), 1000 )