/**
 * 
 * @description
 * 
 * 题目：
 * 使用 O(1) 
 * 
 * 输入：[ "h","e","l","l","o" ]
   输出：[ "o","l","l","e","h"] 
 */



/**
 * 
 * @description
 * 
 * 思路:
 * 双指针
 */
const solution = s => {
    let x = 0;
    let y = s.length - 1;
    while ( x < y ) {
        [ s[ x ], s[ y ]] = [ s[ y ], s[ x ]];
        x++,
        y--;
    }
    return s;
}

console.log( solution(["h","e","l","l","o"]))