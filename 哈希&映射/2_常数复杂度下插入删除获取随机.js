/**
 * 
 * @description
 * 
 *  题目：
 *  设计一个支持在平均时间复杂度 O(1) 下，执行以下操作的数据结构。
 * 
    insert(val)：当元素 val 不存在时，向集合中插入该项。
    remove(val)：元素 val 存在时，从集合中移除该项。
    getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 插入和删除使用普通的map结构
 * 同时维护一个set，用于getRandom
 */
class RandomizedSet {

    constructor( ) {
        this.set = new Set( );
    }

    insert( val ) {
        if ( this.set.has( val )) return false;
        this.set.add( val );
        return true;
    }

    remove( val ) {
        if ( !this.set.has( val )) return false;
        this.set.delete( val );
        return true;
    }

    getRandom( ) {
        const arr = Array.from( this.set );
        return arr[ Math.floor( Math.random( ) * arr.length )]
    }
}