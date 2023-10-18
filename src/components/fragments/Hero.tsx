import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-[url('/image/bg-sm.png')] lg:bg-[url('/image/bg-lg.png')] grid grid-cols-1  lg:grid-cols-2 h-[150%] bg-cover pt-28 pb-32"
    >
      <div className="m-6 mx-18 lg:mx-24">
        <div className="text-white">
          <h1 className="font-medium text-5xl lg:text-5xl mb-5">
            {" "}
            Secure your messages with cryptography and steganography!
          </h1>
          <p className="text-3xl mb-24">
            At μystikό, we offer an additional layer of security to your
            messages.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button
            onClick={() => navigate("/encrypt")}
            className="bg-[#5c52af] font-bold text-white text-2xl py-5 px-12 rounded-full w-full lg:w-auto"
          >
            GET STARTED
          </Button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
