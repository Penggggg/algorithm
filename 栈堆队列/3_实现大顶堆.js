class MaxHeap {

    meta = [ ];

    constructor( meta = [ ]) {
        this.meta = meta;
    }

    push( num ) {
        this.meta.push( num );
        this.up( this.meta.length - 1 );
    }

    getMax( ) { // 检索栈中的最小元素
        return this.meta[ 0 ]
    }

    top( ) { // 获取栈顶元素
        return this.meta[ 0 ]
    }

    pop( ) { // 删除栈顶的元素
        const res = this.meta[ 0 ];
        this.swap( 0, this.meta.length - 1 );
        this.meta.pop( );
        this.down( 0 );
        return res;
    }

    size( ) { // 长度
        return this.meta.length
    }

    clear( ) {
        this.meta = [ ]
    }

    parent( Index ) {
        return Math.floor(( Index - 1 ) / 2 );
    }

    left( Index ) {
        return Index * 2 + 1;
    }

    right( Index ) {
        return Index * 2 + 2;
    }

    swap( i, j ) {
        const m = this.meta;
        [ m[ i ], m[ j ]] = [ m[ j ], m[ i ]];
    }

    up( Index ) {
        const m = this.meta;
        const pIndex = this.parent( Index );
        if ( pIndex !== -1 && m[ pIndex ] <= m[ Index ]) {
            this.swap( Index, pIndex );
            this.up( pIndex )
        }
    }

    down( Index ) {
        const next = this.findMaxIndex( Index, this.left( Index ), this.right( Index ))
        if ( next !== undefined && next !== Index ) {
            this.swap( Index, next );
            this.down( next );
        }
    }

    findMaxIndex( i, j, k ) {
        let max = -Infinity;
        let index = undefined;
        const m = this.meta;
        [ i, j, k ]
            .filter( x => m[ x ] !== undefined )
            .map( x => {
                if ( m[ x ] > max ) {
                    max = m[ x ];
                    index = x;
                }
            });
        return index;
    }
}

exports.MaxHeap = MaxHeap;












