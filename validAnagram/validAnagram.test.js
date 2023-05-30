const validAnagram = require("./validAnagram");

describe("#validAnagram", () => {

    test("it is a function",  () => {
        expect(typeof validAnagram).toBe("function");
    });

    test("it works with empty strings", () => {
        const response = validAnagram("", "");
        expect(response).toEqual(true);
    });

    test("it works with strings with same characters but different frequencies", () => {
        const response = validAnagram("aaz", "zza");
        expect(response).toEqual(false);
        
    });

    test("it works with seven-letter strings with same characters", () => {
        const response = validAnagram("anagram", "nagaram");
        expect(response).toEqual(true);
    });

    test("it works with strings of different characters", () => {
        const response = validAnagram("rat", "car");
        expect(response).toEqual(false);
    });

    test("it works with strings with same chars, but one is missing in string2", () => {
        const response = validAnagram("awesome", "awesom");
        expect(response).toEqual(false);
    });

    test("it works with six-letter strings with same characters", () => {
        const response = validAnagram("qwerty", "qeywrt");
        expect(response).toEqual(true);
    });

    test("it works with strings of same words rearranged backwards", () => {
        const response = validAnagram("texttwisttime", "timetwisttext");
        expect(response).toEqual(true);
    });
});