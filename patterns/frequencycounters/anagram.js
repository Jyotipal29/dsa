// valid anagram

// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const lookup = {};

//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let letter = str2[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// };

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = charCount[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!charCount[t[i]]) {
      return false;
    } else {
      charCount[t[i]]--;
    }
  }
  return true;
};

console.log(isAnagram("aacc", "ccac"));
