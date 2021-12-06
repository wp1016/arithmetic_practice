const str = 'aab'
var permutation = function(s) {
  const res = new Set()
  const visit = {}
  function dfs(path) {
      if(path.length === s.length) {
        return res.add(path)
      }
      for (let i = 0; i < s.length; i++) {
          if (visit[i]) continue
          visit[i] = true
          dfs(path + s[i])
          // 形成一个全排列后进行回退
          visit[i] = false
      }
  }
  dfs('')
  return [...res]
};

console.log(permutation(str))
