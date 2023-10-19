import EncryptForm from "../components/fragments/EncryptForm";

const Encrypt = () => {
  return (
    <section className="flex flex-row items-center border border-indigo-200 rounded-lg shadow-xl lg:my-16 lg:mx-60 p-5 min-h-screen lg:min-h-0">
      <EncryptForm />
    </section>
  );
};

export default Encrypt;
