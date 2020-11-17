/**
 * 
 * @description
 * 
 * 题目：
 * 
 * 实现一个栈
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 用一个特殊栈，代表当前的栈中的min值，思路类似于dp
 * 
 * 备注：71%、27%
 */
class MinStack {

    dp = [ ];
    stack = [ ];

    min( ) { 
        return this.dp[ this.dp.length - 1 ];
    }

    top( ) { 
        return this.stack[ this.stack.length - 1 ];
    }

    pop( ) { 
        this.dp.pop( );
        return this.stack.pop( );
    }

    push( val ) { 
        const { dp } = this;
        this.stack.push( val );
        if ( !this.dp.length ) return this.dp.push( val );
        this.dp.push( Math.min(
            val,
            this.dp[ this.dp.length - 1 ]
        ))
    }

}