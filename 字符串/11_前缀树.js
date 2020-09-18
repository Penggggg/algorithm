/**
 * 
 * @description
 * 
 * 题目：
 * 实现一个前缀树，及其关键api：insert、search、startsWith
 * 
    Trie trie = new Trie();

    trie.insert("apple");
    trie.search("apple");   // 返回 true
    trie.search("app");     // 返回 false
    trie.startsWith("app"); // 返回 true
    trie.insert("app");   
    trie.search("app");     // 返回 true
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 用map结构做一个多叉树的分发
 */
var Trie = function( ) {
    this.meta = { };
};

Trie.prototype.insert = function( word ) {
    let cur = this.meta;
    for ( let s of word ) {
        if ( cur[ s ] === undefined ) {
            cur[ s ] = { };
        }
        cur = cur[ s ]
    }
    cur.isWord = true;
    return this.meta;
};

/**
 * @description
 * 
 * 查询 = 全量匹配
 */
Trie.prototype.search = function( word ) {
    let cur = this.meta;
    for ( let s of word ) {
        if ( cur[ s ] === undefined ) {
            return false;
        }
        cur = cur[ s ]
    }
    return !!cur.isWord; // 判断是否为叶子节点或叠层单词
};


/**
 * 
 * @description
 */
Trie.prototype.startsWith = function( prefix ) {
    let cur = this.meta;
    for ( let s of prefix ) {
        if ( cur[ s ] === undefined ) { // 查询最长公共前缀
            return false
        }
        cur = cur[ s ];
    }
    return true;
};



const trie = new Trie( );
exports.Trie = Trie;

// console.log( JSON.stringify( trie.insert('ab')))
// console.log( JSON.stringify( trie.insert('abc')))
// console.log( trie.startsWith('abc'))


// console.log( JSON.stringify( trie.insert('aaa')))
// console.log( trie.search('aa'))