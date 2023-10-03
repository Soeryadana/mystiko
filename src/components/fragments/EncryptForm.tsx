import React, { useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Input/Label";
import { useVigenere } from "../../hooks/Vigenere";
import { useAffine } from "../../hooks/Affine";
import { embedText } from "../../hooks/LeastSignificantBit";

interface ValuesTypes {
  message: string;
  vigenereKey: string;
  keyA: number;
  keyB: number;
  file: string;
}

const EncryptForm = () => {
  const [data, setData] = useState<ValuesTypes>({
    message: "",
    vigenereKey: "",
    keyA: 0,
    keyB: 0,
    file: "",
  });
  const [encodedImage, setEncodedImage] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const vigenere: string = useVigenere(data.message, data.vigenereKey, 1);
  const affine: string = useAffine(vigenere, data.keyA, data.keyB, 1);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.file !== null) {
      try {
        const encodedImage = await embedText(data.file, affine);
        setEncodedImage(encodedImage);
      } catch (error) {
        console.log(error);
      }
    }
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

  return (
    <div className="h-full mb-auto w-full">
      <form onSubmit={onSubmit}>
        <div>
          <Input
            htmlFor="message"
            label="Message"
            type="text"
            name="message"
            id="message"
            value={data.message}
            onChange={(event) => handleInput(event)}
          />
        </div>
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
          <div className="">
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
          <div className="">
            <Input
              htmlFor="keyB"
              label="K2/β"
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
          <Button type="submit" className="btn btn-primary w-full text-white">
            Encrypt
          </Button>
        </div>
      </form>
      {encodedImage && (
        <>
          <div className="mt-5 flex justify-center">
            <img src={encodedImage} alt="encoded image" />
          </div>
          <p className="mt-5">Right click to download the image</p>
        </>
      )}
    </div>
  );
};

export default EncryptForm;
