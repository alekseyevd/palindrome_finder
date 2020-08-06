
class Manacher {
  constructor(str) {
    this.all = []
    this.s = str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '')
    this.preprocess()
    const p = new Array(this.t.length)
    for (let i=0; i < p.length ; i++) {
      p[i] = 0
    }

    let center = 0
    let right = 0
    for (let i = 1; i < this.t.length - 1; i++) {
      let mirror = 2*center - i

      if (right > i) {
        p[i] = Math.min(right - i, p[mirror])
      }

      while(this.t[i + (1 + p[i])] == this.t[i - (1 + p[i])]) {
        p[i]++
      }
        
      if (i + p[i] > right) {
        center = i
        right = i + p[i]
      }
    }
    this.p = p
    this.longestPalindromicSubstring()
  }

  preprocess() {
    const t = new Array(this.s.length*2 + 3)
    t[0] = '$'
    t[this.s.length*2 + 2] = '@'
    for (let i = 0; i < this.s.length; i++) {
      t[2*i + 1] = '#'
      t[2*i + 2] = this.s.charAt(i)
    }
    t[this.s.length*2 + 1] = '#'
    this.t = t
  }

  longestPalindromicSubstring() {
    let length = 0
    let center = 0
    for (let i = 1; i < this.p.length - 1; i++) {
      if (this.p[i] > length) {
        length = this.p[i]
        center = i
      }
    }
    this.max = this.s.substr((center - 1 - length) / 2, length)
  }

  longest(i) {
    let length = this.p[i + 2]
    let center = i + 2
    
    let candidate =  this.s.substr((center - 1 - length) / 2, length)
    if (candidate.length > 2 && !this.all.includes(candidate) ) 
      this.all.push(candidate)
  }

  getAll() {
    for (let i = 0; i < 2*this.s.length; i++) {
      this.longest(i)
    }
    return this.all
  }

  getMax() {
    return this.max
  }
  
}

module.exports = Manacher