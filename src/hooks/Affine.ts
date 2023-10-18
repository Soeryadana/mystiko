import { checkInverse } from "./CheckInverse";

export const useAffine = (
  vigenereCipher: string,
  a: number,
  b: number,
  option: number
): string => {
  const base: number = 32;
  const m: number = 95;
  const aInverse: number = checkInverse(a, m);
  const textLength: number = vigenereCipher.length;

  if (option === 1) {
    let cipherText = "";

    for (let i = 0; i < textLength; i++) {
      const charCode: number = Number(vigenereCipher.charCodeAt(i)) - base;
      // for some reason the b key here is type string instead of number
      let encryptedCharCode: number = (a * charCode + Number(b)) % m;

      if (encryptedCharCode < 0) {
        encryptedCharCode += m;
      }
      encryptedCharCode += base;
      cipherText += String.fromCharCode(encryptedCharCode);
    }

    return cipherText;
  } else {
    let plainText = "";

    for (let i = 0; i < textLength; i++) {
      const charCode = vigenereCipher.charCodeAt(i) - base;
      const decryptedCharCode = ((aInverse * (charCode - b + m)) % m) + base;
      plainText += String.fromCharCode(decryptedCharCode);
    }

    return plainText;
  }
};
