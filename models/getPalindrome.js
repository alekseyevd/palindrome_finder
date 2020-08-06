const PFinder = require('./Pfinder')
const Manacher = require('./Manacher')

module.exports = (str, algo) => { 
  let max, all
  switch (algo) {
    case "pmfinder":
      const palindrome = new PFinder()
      max = palindrome.findMax(str)
      all = palindrome.findAll(str) 
      break;

    case "manacher": {
      const palindrome = new Manacher(str)
      max = palindrome.getMax() || 'no palindromes found'
      all = palindrome.getAll()
      break;
    }

    default:
      throw new Error('unknown method')
  }

  return {
    max: max || 'no palindromes found',
    all
  }
}