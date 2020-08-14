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
     * 由客户端调用resolve
     * 
     * 0、对当前状态的判断
     * 1、重置当前状态
     * 2、接受结果
     * 3、执行回调
     */
    const resolve = function ( val ) {
        // 这里不能用this.status，这个this不对
        if ( self.status !== status.pendding ) return;
        self.value = val;
        self.status = status.fulfilled;
        self.onFulfilledArr.map( cb => cb( val ))
    }

    /** 立马执行这个异步函数 */
    fn( resolve );
}

/**
 * 
 * 0、对当前状态的判断
 * 1、注册cb
 */
MyPromise.prototype.then = function ( cb ) {
    if ( this.status ===  status.pendding ) {
        this.onFulfilledArr.push( cb );
    } else if ( this.status === status.fulfilled ) {
        cb( this.value );
    }
    // 有问题的链式调用
    return this;
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
}).then( data => console.log(`1-1: 这里数据错乱了${data}`))
p.then( data => console.log(`2: ${data}`))