/**
 * 
 * @description
 * 
 *  题目：
 * 
 *  给定一个字符串 s，将s分割成一些子串，使每个子串都是回文串

    输入: "aab"
    输出:
    [
        ["aa","b"],
        ["a","a","b"]
    ]

    回溯步骤：
    a + (ab) -> a + ( a + b )
    (aa) + b -> ( a + a ) + b
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 回溯。核心是尝试，不行就回退
 * 
 * 注意：
 * 这里不能用同一个paths变量
 */
const partition = s => {
    const res = [ ];
    if ( !s ) return [ ];
    const dfs = ( str, paths ) => {
        if ( !str && !!paths.length ) {
            res.push([ ...paths ]);
        };
        for( let i = 1; i <= str.length; i++ ) {
            const cur = str.slice( 0, i );
            const isOk = judge( cur );
            if ( isOk ) {
                dfs( str.slice( i ), [ ...paths, cur ]);
            }
        }
    }
    dfs( s, [ ]);
    return res;
}


function judge( s ) {
    if ( s.length )
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase( ); // 预先处理
    let x = 0;
    let y = s.length - 1;
    while( x < y ) {
        if ( s[ x ] !== s[ y ]) return false;
        x++;
        y--;
    }
    return true;
}

console.log( partition('aaa'))
