/**
 * 练习手写源码
 */

var a = 1;
function foo() {
  console.log(a);
  var a = 2;
  console.log(this.a);
  this.a = 3;
}
foo(); 
let f = new foo(); 

// foo(); // undefined 1
// let f = new foo(); // undefined undefined

function request (url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, Math.floor(Math.random() * 200 + 100))
  })
}

function handleFetchQueue (urls, maxNum) {
  const ret = []
  const urlCount = urls.length
  const requestQueue = []
  let i = 0

  const handleRequest = url => {
    const req = request(url).then(res => {
      ret.push(res)
    }).catch(e => {
      ret.push(e)
    }).finally(() => {
      const len = ret.length
      if (len < urlCount) {
        requestQueue.shift()
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        console.log('完成全部请求', ret);
      }
    })

    requestQueue.push(req)
    if (requestQueue.length <= maxNum) {
      handleRequest(urls[++i])
    }
  }

  handleRequest(urls[i])

}

handleFetchQueue(new Array(4).fill(0).map((item, index) => {
  return index
}),3)

let p = new Promise((resolve, reject) => {
  resolve()
})
// p.then((res) => {
//   throw new Error('123')
// }).catch(err => {
//   console.log('error');
// })

Promise.resolve(new Error('123')).catch(console.log)