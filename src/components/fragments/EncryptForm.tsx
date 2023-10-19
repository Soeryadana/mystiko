import React, { useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Input/Label";
import { useVigenere } from "../../hooks/Vigenere";
import { useAffine } from "../../hooks/Affine";
import { embedText } from "../../hooks/LeastSignificantBit";
import { checkInverse } from "../../hooks/CheckInverse";

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

    const inverse = checkInverse(data.keyA, 95);
    if (inverse === 0) {
      const modalElement = document.getElementById("my_modal_5");
      if (modalElement instanceof HTMLDialogElement) {
        modalElement.showModal();
        setEncodedImage("");
        return;
      }
    }

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

  const downloadImg = (): void => {
    const link = document.createElement("a");
    link.href = encodedImage;
    link.download = "encodedImage.png";
    link.click();
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
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">GCD of K1/α not equal to 1</h3>
          <p className="py-4">
            In order to acquire α <sup>-1</sup>, the GCD of α & <i>n</i> (in
            this case <i>n</i> = 95 based on printable ASCII) must to be equal
            to 1. <i>gcd(α, n) = 1.</i>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {encodedImage && (
        <>
          <div className="mt-5 flex justify-center">
            <img src={encodedImage} alt="encoded image" />
          </div>
          <Button
            onClick={() => downloadImg()}
            className="btn btn-primary w-full text-white mt-5"
          >
            Download
          </Button>
        </>
      )}
    </div>
  );
};

export default EncryptForm;
