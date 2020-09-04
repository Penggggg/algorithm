
class Dep {

	constructor (  ) {
    	this.watches = [ ]; // 存放所有的watcher
  	}

  	// 添加
  	addWatcher( w ) {
    	this.watches.push( w )
  	}

	// 调用Watcher的更新
    notify( key, newVal ) {
        const watcher = this.watches.find( w => w.key === key );
        !!watcher && watcher.cb.update( newVal );
  	}
}

class Watch {

    constructor( key ) {
        this.key = key;
    }

    update( newVal ) {
	    console.log(`由【${this.key}】引发的更新，最新值: ${newVal}`)
	}
}

class Observer {

    constructor( obj ) {
        this.walk( obj )
        this.dep = new Dep( );
    }

    // 遍历对象，监听每个属性
	walk( obj ) {
        Object.keys( obj )
            .map( key => {
                this.setReactive( obj, key, obj[ key ])
            })
    }
      
    setReactive ( obj, key, val ) {
        const that = this;
        Object.defineProperty( obj, key, {
            enumerable: true,
            configurable: true,
            get: function( ) {
                that.dep.addWatcher({
                    key,
                    cb: new Watch( key )
                })
                return val;
            },
            set: function( newVal ) {
                that.dep.notify( key, newVal );
            }
        })
    }
}


const data = {
    name: 'ppp'
}
new Observer( data );


data.name; // 注册
data.name = 'ooo'; // 更新