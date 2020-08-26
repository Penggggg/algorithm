/**
 * 
 * @description
 * 
 * 题目：
 * 写一个快速排序
 * 
 * 思路：
   跟【归并】的处理方向相反，
   拆之前，先”粗处理“一下顺序。
   选择一个点point，然后遍历数组。
   大于point、小于point的分开2个数组（拆）

   递推公式：
   kp( p, r ) = [
        ...kp( p, m ),
        m,
        kp( m + 1, r )
   ]
   终止条件：
   p >= r
 */


const kp = arr => {
    if ( !arr.length || arr.length === 1 ) return arr;
    const sArr = [ ];
    const bArr = [ ];
    const point = arr[ arr.length - 1 ]; // 对比点默认为数组最后一个元素
    while ( arr.length > 1 ) { // 拆
        const n = arr.shift( );
        if ( n >= point ) {
            bArr.push( n )
        } else {
            sArr.push( n )
        }
    }
    return [
        ...kp( sArr ),
        point,
        ...kp( bArr )
    ]
}

console.log( kp([ 3, 30, 34, 5, 9 ]))