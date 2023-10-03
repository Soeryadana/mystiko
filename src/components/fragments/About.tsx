import SectionTitle from "../elements/SectionTitle";

const About = () => {
  return (
    <section className=" bg-[#effdff] ">
      <div className="container mx-auto grid grid-cols-12 p-20">
        <div className="col-span-5">
          <img src="/image/626-1.png" alt="" className="w-full" />
        </div>
        <div className="col-span-7 mt-28">
          <SectionTitle img="/image/mystiko.png" alt="mystiko">
            What is μystikό?
          </SectionTitle>
          <div className="">
            <p className="text-[#333333] text-2xl">
              μystikό is a message security service that encrypt your messages
              with cryptography and encode them to an image with steganography
              for safer communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
