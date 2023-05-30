
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    const str1Freq = createFrequencyCounter(str1);
    const str2Freq = createFrequencyCounter(str2);
    console.log(str1Freq, str2Freq);
    for(let key in str1Freq){
        if(!str2Freq.keys)return false;
        if((str1Freq.keys !== str2Freq.keys) && (str1Freq.values !== str2Freq.values)){
            return false;
        }
    }
    return true;    
}

const createFrequencyCounter = (arr) => {
    const freqCounter = {};
    for(let el of arr) {
        freqCounter[el] = freqCounter[el] + 1 || 1;
    }
    return freqCounter;
}

validAnagram("aaz", "zza");

module.exports = validAnagram;