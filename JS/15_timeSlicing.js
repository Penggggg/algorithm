function block () {
    ts(function* () {
      const start = Date.now()
      while (Date.now() - start < 1000) {
        console.log(11)
        yield
      }
      console.log('done!')
    })
}
  
setTimeout( block, 5000 )
  
function ts (gen) {
    if (typeof gen === 'function') gen = gen()
    if (!gen || typeof gen.next !== 'function') return
  
    (function next () {
      const res = gen.next()
      if (res.done) return
      setTimeout(next)
    })()
}