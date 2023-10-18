import SectionTitle from "../elements/SectionTitle";

const About = () => {
  return (
    <section className=" bg-[#effdff] ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 p-20">
        <div className="col-span-5 flex justify-center">
          <img src="/image/626-1.png" alt="" className="w-full md:w-[70%] lg:w-full" />
        </div>
        <div className="col-span-7 mt-5 lg:mt-28">
          <SectionTitle img="/image/mystiko.png" alt="mystiko">
            What is μystikό?
          </SectionTitle>
          <div className="">
            <p className="text-[#333333] text-2xl text-justify">
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
