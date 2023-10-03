import SectionTitle from "../elements/SectionTitle";

const Places = () => {
  return (
    <section className=" ">
      <div className="container mx-auto  grid grid-cols-12  px-20">
        <div className="col-span-7 mt-28">
          <SectionTitle img="/image/everywhere.png" alt="mystiko">
            Anywhere Anytime
          </SectionTitle>
          <div>
            <h3 className="mt-2.5 mb-10 text-[22px] text-[#484848] font-medium">Encrypt and Encode your messages anywhere anytime</h3>
            <p className="text-[#333333] text-2xl">
              With μystikό web app based you can easily encrypt and encode your
              messages to any jpeg images from any devices through a browser.
              Stegano image will be downloaded to your local storage and can be
              send imidiately.
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <img
            src="/image/4901198-removebg-preview.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Places;
