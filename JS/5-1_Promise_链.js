const status = {
    pendding: 0,
    fulfilled: 1,
    rejected: 2
}

function MyPromise( fn ) {

    let self = this;
    self.value = undefined;
    self.onFulfilledArr = [ ];
    self.status = status.pendding;
    
    /**
     * 
     * 由客户端调用
     * 
     * 0、对当前状态的判断
     * 1、更改promise状态
     * 2、接受结果、重置当前状态
     * 3、执行回调
     */
    const resolve = function ( val ) {
        // 这里不能用this.status，这个this不对
        if ( self.status !== status.pendding ) return;
        self.value = val;
        self.status = status.fulfilled;
        self.onFulfilledArr.map( cb => cb( val ))
    }

    fn( resolve );
}

/**
 * 
 * 0、对当前状态的判断
 * 1、注册cb
 */
MyPromise.prototype.then = function ( cb ) {
    const self = this;
    if ( this.status ===  status.pendding ) {
        /**
         * 包装一下cb，并且返回Promise
         */
        return new MyPromise( r => {
            self.onFulfilledArr.push( val => { // 闭包
                // 把cb的执行结果，通过新promise的resolve，返回给新promise的then
                r( cb( val ));
            });
        })
    } else if ( this.status === status.fulfilled ) {
        cb( this.value );
    }
}

const p = new MyPromise( r => {
    console.log('执行异步任务');
    setTimeout(( ) => {
        r('我是一个数据')
    }, 200 );
})

/**
 * 问题：
 * 还无法链式调用
 */
p.then( data => {
    console.log(`1: ${data}`);
    return `啊？？`
}).then( data => console.log(`1-1: ${data}`))
p.then( data => console.log(`2: ${data}`))