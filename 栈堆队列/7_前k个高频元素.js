/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 输入: nums = [ 1,1,1,2,2,3 ], k = 2
   输出: [1,2]
 */


const { MaxHeap } = require('./3_实现大顶堆');
/**
 * 
 * @description
 * 
 * 思路：
 * 先遍历一遍，获取所有元素的频率
 * 然后把频率放进大顶堆，pop的过程中匹配这个频率对应的number
 * 
 * 备注：5%、6%
 */
var topKFrequent1 = function(nums, k) {
    const res = [ ];
    const frequency = [ ];
    const maxHeap = new MaxHeap( );
    nums.map( n => {
        const Index = frequency.findIndex( x => x.num === n );
        if ( Index === -1 ) {
            frequency.push({
                num: n,
                fre: 1
            })
        } else {
            frequency[ Index ].fre++; 
        }
    });
    frequency.map( f => maxHeap.push( f.fre ));
    for ( let i = 0; i < k; i++ ) {
        const fre = maxHeap.pop( );
        const Index = frequency.findIndex( f => f.fre === fre );
        res.push( frequency[ Index ].num );
        frequency.splice( Index, 1 );
    }
    return res;
};


/**
 * 
 * @description
 * 
 * 思路：
 * 跟上面一样，但数据在 47%、6%
 * 
 * 原因：
 * 没有了findIndex，而是通过对象key去索引，
 * 加快搜索速度
 */
var topKFrequent = function(nums, k) {
  const res = [ ];
  const dic = { };
  const frequency = { };
  const maxHeap = new MaxHeap( );
  nums.map( n => { // 构建number对频率的映射
      if ( frequency[ n ] === undefined ) {
          frequency[ n ] = 1;
      } else {
          frequency[ n ]++; 
      }
  });
  Object.keys( frequency ).map( n => {
      const fre = frequency[ n ];
      maxHeap.push( fre );
      if ( dic[ fre ] === undefined ) { // 构建频率对number的反映射
          dic[ fre ] = [ n ]
      } else {
          dic[ fre ].push( n )
      }
  })

  for ( let i = 0; i < k; i++ ) {
      const fre = maxHeap.pop( );
      res.push( Number( dic[ fre ][ 0 ]));
      dic[ fre ].shift( )
  }
  return res;
}

console.log( topKFrequent(
  [ 1,1,1,2,2,3 ],
  2
))