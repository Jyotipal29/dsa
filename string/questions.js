//1.longest substring without repeating charactesr

const substring = (str) => {
    const newStr = new Set(str)


    return Array.from(newStr).length;


}

console.log(substring("pwwkew"))