/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const mapper = {
    a: 1,
    e: 2,
    i: 4,
    o: 8,
    u: 16,
  };

  let max = 0,
    cur = 0;
  const seen = { 0: -1 };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapper) {
      cur ^= mapper[s[i]];
    }
    if (cur in seen) {
      max = Math.max(max, i - seen[cur]);
    } else {
      seen[cur] = i;
    }
  }

  return max;}