/**
 *
 * @param {string} s
 */
function isValid(s) {
  const stack = []
  const map = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  for (let i = 0; i < s.length; ++i) {
    const char = s[i]
    if (map[char]) {
      stack.push(char)
      continue
    }
    const mapStack = map[stack[stack.length - 1]]
    if (mapStack === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
}

console.log('isValid', isValid('({{{[([{[()]}])]}}})'))
