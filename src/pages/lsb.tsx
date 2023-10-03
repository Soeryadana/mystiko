import React, { useState } from 'react';
import { createCanvas, loadImage, ImageData } from 'canvas';

const Steganography: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [hiddenText, setHiddenText] = useState<string>('');
  const [outputImageSrc, setOutputImageSrc] = useState<string>('');

  const embedText = async () => {
    try {
      const image = await loadImage(imageSrc);
      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const textBinary = textToBinary(hiddenText);

      if (textBinary.length > imageData.data.length * 3) {
        throw new Error('Text too long to embed in the image.');
      }

      let textIndex = 0;

      for (let i = 0; i < imageData.data.length; i += 4) {
        if (textIndex < textBinary.length) {
          // Embed text into the least significant bit of each color channel
          imageData.data[i] = setLSB(imageData.data[i], textBinary[textIndex++]);
          imageData.data[i + 1] = setLSB(imageData.data[i + 1], textBinary[textIndex++]);
          imageData.data[i + 2] = setLSB(imageData.data[i + 2], textBinary[textIndex++]);
        } else {
          break;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      const outputImageSrc = canvas.toDataURL();
      setOutputImageSrc(outputImageSrc);
    } catch (error) {
      console.error(error);
    }
  };

  const extractText = async () => {
    try {
      const image = await loadImage(imageSrc);
      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let extractedText = '';

      for (let i = 0; i < imageData.data.length; i += 4) {
        const rLSB = getLSB(imageData.data[i]);
        const gLSB = getLSB(imageData.data[i + 1]);
        const bLSB = getLSB(imageData.data[i + 2]);

        extractedText += rLSB + gLSB + bLSB;

        // Assuming 8 bits per color channel, so 3 LSBs make a character
        if (extractedText.length >= 8) {
          const charCode = parseInt(extractedText.slice(0, 8), 2);
          extractedText = extractedText.slice(8);
          if (charCode === 0) {
            // Null terminator, stop extracting
            break;
          }
          const char = String.fromCharCode(charCode);
          setHiddenText((prevText) => prevText + char);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const textToBinary = (text: string): string => {
    let binary = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      binary += charCode.toString(2).padStart(8, '0');
    }
    // Add a null terminator to indicate the end of the hidden text
    binary += '00000000';
    return binary;
  };

  const setLSB = (value: number, bit: string): number => {
    return (value & 0xfe) | parseInt(bit, 2);
  };

  const getLSB = (value: number): string => {
    return (value & 1).toString();
  };

  return (
    <div>
      <h2>LSB Steganography</h2>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageSrc(URL.createObjectURL(e.target.files[0]))}
        />
      </div>
      <div>
        <textarea
          rows={4}
          placeholder="Enter text to hide"
          value={hiddenText}
          onChange={(e) => setHiddenText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={embedText}>Embed Text</button>
        <button onClick={extractText}>Extract Text</button>
      </div>
      <div>
        {outputImageSrc && (
          <div>
            <h3>Output Image:</h3>
            <img src={outputImageSrc} alt="Output" />
          </div>
        )}
      </div>
      <div>
        <h3>Extracted Text:</h3>
        <p>{hiddenText}</p>
      </div>
    </div>
  );
};

export default Steganography;
