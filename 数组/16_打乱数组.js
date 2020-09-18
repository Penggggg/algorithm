/**
 * 
 * @description
 * 
 * 题目：
   solution = new Solution([ 1,2,3 ]); // 初始化数组
   solution.shuffle( ); // 打乱数组，排列返回的概率应该相同。
   solution.reset( ) ; // 重置为[1,2,3]。
 */




/**
 * 
 * @description
 * 
 * 思路：
 * 按位逐步随机取元素
 * 
 * 如：
 * 数组一共有3位，首位就随机取3元素，第二位就随机取剩下的2元素，如此类推
 */
var Solution = function( nums ) {
    this.meta = nums;
};


Solution.prototype.shuffle = function( ) {
    const res = [ ];
    const temp = [ ...this.meta ];
    while ( temp.length ) {
        const Index = Math.floor( Math.random( ) * temp.length );
        res.push( temp.splice( Index, 1 )[ 0 ]);
    }
    return res;
};

Solution.prototype.reset = function( ) {
    return this.meta;
};

const solution = new Solution([ 1,2,3 ])
console.log( solution.shuffle( ))