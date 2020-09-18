/**
 * 
 * @description
 * 
 *  题目：
    输入: [1,[4,[6]]]
    输出: [1,4,6]
    解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 扁平化数组
 */
class NestedIterator {

    constructor( nestedList ) {
        this.meta = nestedList.toString( ).split(',').map( x => Number( x ));
    }

    hasNext( ) {
        return !!this.meta.length;
    }

    next( ) {
        return this.meta.shift( );
    }
}

// const test = new NestedIterator([1,[4,[6]]])
const test = new NestedIterator([[1,1],2,[1,1]])
// console.log( test.next( ));
// console.log( test.next( ));
// console.log( test.hasNext( ));
// console.log( test.next( ));
// console.log( test.hasNext( ));