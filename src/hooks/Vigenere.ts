export const useVigenere = (
  plaintext: string,
  vigenereKey: string,
  option: number
): string => {
  const key: string = vigenereKey.toLowerCase();
  const base: number = 32;
  const totalCharacters: number = 95;
  const keyLength: number = key.length;
  let keyIndex: number = 0;
  const textLength: number = plaintext.length;

  if (option === 1) {
    let cipherText = "";

    for (let i = 0; i < textLength; i++) {
      const charCode: number = plaintext.charCodeAt(i) - base;
      const keyCharCode: number = key.charCodeAt(keyIndex) - base;

      const encryptedCharCode: number =
        ((keyCharCode + charCode) % totalCharacters) + base;

      cipherText += String.fromCharCode(encryptedCharCode);
      keyIndex = (keyIndex + 1) % keyLength;
    }

    return cipherText;
  } else {
    let plainText = "";

    for (let i = 0; i < textLength; i++) {
      const charCode: number = plaintext.charCodeAt(i) - base;
      const keyCharCode: number = key.charCodeAt(keyIndex) - base;

      let decryptedCharCode: number =
        ((charCode - keyCharCode) % totalCharacters);

      if (decryptedCharCode < 0) {
        decryptedCharCode += totalCharacters;
      }

      decryptedCharCode += base;

      plainText += String.fromCharCode(decryptedCharCode);
      keyIndex = (keyIndex + 1) % keyLength;
    }

    return plainText;
  }
};
