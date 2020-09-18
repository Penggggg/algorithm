const { Trie } = require('./11_前缀树');

/**
 * 
 * @description
 * 
 * 题目：
 * 
 * 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

   单词必须按照字母顺序，通过相邻的单元格构成单词，
   相邻：水平相邻、垂直相邻的单元格

   输入: 
    ["oath","pea","eat","rain"]

    [
        ['o','a','a','n'],
        ['e','t','a','e'],
        ['i','h','k','r'],
        ['i','f','l','v']
    ]

    输出: ["eat","oath"]
 */

var findWords = function( board, words ) {
    let res = [ ];
    const trie = new Trie( );
    const rows = board.length;
    const cols = board[ 0 ].length;
    const directions = [ // dfs过程， 在二维网络里尝试的4个方向：上下左右
        [ -1, 0 ], 
        [ 1, 0 ],
        [ 0, -1 ],
        [ 0, 1 ]
    ]
    for ( let i = 0; i < words.length; i++ ) { // 初始化前缀树
        trie.insert( words[ i ]);
    }

    const dfs = ( i, j, pre ) => {
        const temp = board[ i ][ j ];
        const cur = pre + board[ i ][ j ];
        if ( trie.search( cur ) && !res.includes( cur )) { // 去重，因为有可能顺序不一样，但是找到一样的结果
            res.push( cur );
        }
        if ( !trie.startsWith( cur )) return; // 剪枝过程
        board[ i ][ j ] = '#'; // 走过的路不能回去
        for ( let d = 0; d < directions.length; d++ ) { // 实际上不是4个方向，因为不能从刚过来的方向进行返回
            const _row = i + directions[ d ][ 0 ];
            const _col = j + directions[ d ][ 1 ];
            if ( _row >= 0 && _row < rows && _col >= 0 && _col < cols && board[ _row ][ _col ] !== '#') { // 边界情况
                dfs( _row, _col, cur );
            }
        }
        board[ i ][ j ] = temp; // 还原
    }

    for ( i = 0; i < rows; i++ ) { // 从board[0][0]开始
        for ( j = 0; j < cols; j++ ) {
            dfs( i, j, '' );
        }
    }
    return res;
};

console.log( findWords(
    [
        ['o','a','a','n'],
        ['e','t','a','e'],
        ['i','h','k','r'],
        ['i','f','l','v']
    ],
    ["oath","pea","eat","rain"]
))