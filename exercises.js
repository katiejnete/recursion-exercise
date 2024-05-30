// Product of nums
function product(nums, i = 0) {
  if (i > nums.length - 1) return 1;

  return nums[i] * product(nums, i + 1);
}

// Longest word
function longest(words) {
  if (words.length > 2) {
    return words.pop().length > longest(words).length
      ? words.pop().length
      : longest(words).length;
  } else if (words.length === 2) {
    return words[0].length > words[1].length ? words[0] : words[1];
  }
}

// Every other character
function everyOther(str) {
  if (str.length === 1) return str;
  return str[0] + everyOther(str.slice(2));
}

// Is palindrome?
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, str.length - 1));
  }
}

// Find index
function findIndex(arr, str, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] !== str) {
    return findIndex(arr, str, i + 1);
  } else return i;
}

// Reverse string
function revString(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

// Gather strings
function gatherStrings(obj) {
  const out = [];

  function _gatherStrings(obj) {
    for (let value of Object.values(obj)) {
      if (typeof value === "object") {
        _gatherStrings(value);
      } else if (typeof value === "string") {
        out.push(value);
      }
    }
  }

  _gatherStrings(obj);
  return out;
}

// Binary search
function binarySearch(arr, val) {
  const mid = Math.floor(arr.length/2);
  if (arr[mid] === val) return mid;
  if (arr.length === 1 && arr[mid] !== val) return -1;
  else if (arr[mid] > val) return binarySearch(arr.slice(0,mid), val);
  else if (arr[mid] < val) return binarySearch(arr.slice(mid+1), val);
}