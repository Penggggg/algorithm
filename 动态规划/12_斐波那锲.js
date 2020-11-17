/**
 * 
 * @description
 * 
 * 题目：
 * 输入 n ，求斐波那契（Fibonacci）数列的第 n 项
 * F(0) = 0,   F(1) = 1
   F(N) = F(N - 1) + F(N - 2), 其中 N > 1. 

   答案需要取模 1e9+7（1000000007）
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 已经有递推公式了，那关键就在于数据缓冲（dp数组）对计算性能的提升
 * 
 * 备注：空间要求特大
 */
var fib = function(n) {
    let i = 2, dp = [ 0, 1 ];
    if( n === 1 || !n ) return n;
    while( i <= n ) {
        dp[ i ] = dp[ i -1 ] + dp[ i - 2 ];
        i++;
    }
    return dp[ dp.length - 1 ] % 1000000007;
};

/**
 * 双变量优化存储空间
 */
var fib = function(n) {
  if(n === 1 || !n) return n
  let t1 = 0, t2 = 1
  for(let i = 1;i<n;i++){
      let t = t1
      t1 = t2
      t2 = (t + t2) % 1000000007
  }
  return t2
};

console.log( fib(45))