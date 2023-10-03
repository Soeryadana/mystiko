function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
        return x;
      }
    }
    return 1;
  }

function encryptAffine(plainText, a, b, m, base) {
    let cipherText = "";
  
    for (let i = 0; i < plainText.length; i++) {
      const charCode = plainText.charCodeAt(i) - base;
      const encryptedCharCode = (a * charCode + b) % m + base;
      cipherText += String.fromCharCode(encryptedCharCode);
    }
  
    return cipherText;
  }
  
  function decryptAffine(cipherText, aInverse, b, m, base) {
    let plainText = "";
  
    for (let i = 0; i < cipherText.length; i++) {
      const charCode = cipherText.charCodeAt(i) - base;
      const decryptedCharCode = (aInverse * (charCode - b + m)) % m + base;
      plainText += String.fromCharCode(decryptedCharCode);
    }
  
    return plainText;
  }
  
  // Example usage:
  const a = 1; // Replace with your key values
  const b = 2; // Replace with your key values
  const m = 94; // Size of the character set
  const base = 32; // Starting character code
  const plainText = "Hello, World!";
  const encryptedText = encryptAffine(plainText, a, b, m, base);
  const decryptedText = decryptAffine(encryptedText, modInverse(a, m), b, m, base);
  
  console.log("Original:", plainText);
  console.log("Encrypted:", encryptedText);
  console.log("Decrypted:", decryptedText);
  console.log("Mod Inverse:", modInverse(a, m));
  console.log("text length:", plainText.length);
  