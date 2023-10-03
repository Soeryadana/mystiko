import React, { useState } from "react";
import { useAffine } from "../../hooks/Affine";
import { useVigenere } from "../../hooks/Vigenere";
import { extractText } from "../../hooks/LeastSignificantBit";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Input/Label";

interface ValuesTypes {
  vigenereKey: string;
  keyA: number;
  keyB: number;
  file: string;
}

const DecryptForm = () => {
  const [data, setData] = useState<ValuesTypes>({
    vigenereKey: "",
    keyA: 0,
    keyB: 0,
    file: "",
  });
  const [extractedText, setExtractedText] = useState<string>("");
  const [decoded, setDecoded] = useState<boolean>(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const uploadConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!event.target.files) return;

    const reader = new FileReader();
    const file = event.target.files[0];
    const imageSrc = URL.createObjectURL(file);
    reader.onload = () => {
      setData({
        ...data,
        file: imageSrc,
      });
    };
    reader.readAsDataURL(file);
  };
  const decryptAffine = useAffine(extractedText, data.keyA, data.keyB, 0);
  const decryptVigenere = useVigenere(decryptAffine, data.vigenereKey, 0);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.file !== null) {
      try {
        const decodeText = await extractText(data.file);
        setExtractedText(decodeText);
        setDecoded(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-full mb-auto w-full">
      <form onSubmit={onSubmit}>
        <div>
          <Input
            htmlFor="vigenereKey"
            label="Vigenere Key"
            type="text"
            name="vigenereKey"
            id="vigenereKey"
            value={data.vigenereKey}
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="affineKey">Affine Keys</Label>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div>
            <Input
              htmlFor="keyA"
              label="K1/α"
              type="number"
              name="keyA"
              id="keyA"
              value={data.keyA === 0 ? "" : data.keyA}
              onChange={(event) => handleInput(event)}
            />
          </div>
          <div>
            <Input
              htmlFor="keyB"
              label="K1/β"
              type="number"
              name="keyB"
              id="keyB"
              value={data.keyB === 0 ? "" : data.keyB}
              onChange={(event) => handleInput(event)}
            />
          </div>
        </div>
        <div>
          <Input
            htmlFor="image"
            label="Choose your image"
            type="file"
            name="image"
            id="image"
            onChange={(event) => uploadConfig(event)}
          />
        </div>
        <div>
          <Button type="submit" className="btn btn-primary w-full mb-3 text-white">
            Decrypt
          </Button>
        </div>
        {decoded && (
          <>
            <div>
              <Input
                htmlFor="affineCiphertext"
                label="Affine Ciphertext"
                type="text"
                name="affineCiphertext"
                id="affineCiphertext"
                value={extractedText}
                disable={true}
              />
            </div>
            <div>
              <Input
                htmlFor="vigenereCipherText"
                label="Vigenere Ciphertext"
                type="text"
                name="vigenereCipherText"
                id="vigenereCipherText"
                value={decryptAffine}
                disable={true}
              />
            </div>
            <div>
              <Input
                htmlFor="message"
                label="Message"
                type="text"
                name="message"
                id="message"
                value={decryptVigenere}
                disable={true}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default DecryptForm;
