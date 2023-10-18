const Biodata = () => {
  return (
    <section className="mx-12 lg:mx-32 mb-10 p-10 lg:p-20 bg-[#493e9c] rounded-xl text-white grid grid-cols-1 lg:grid-cols-10 ">
      <div className="col-span-4 flex justify-center mb-10 lg:mb-0">
        <img src="/image/logo unmul.png" alt="" className="w-[70%] md:w-[40%] lg:w-[70%]" />
      </div>
      <div className="col-span-6 text-sm md:text-2xl">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td className="pb-2">Name</td>
              <td className="pb-2">: I Dewa Gede Bagus Suryadana.</td>
            </tr>
            <tr>
              <td className="pb-2">NIM</td>
              <td className="pb-2">: 1815015099.</td>
            </tr>
            <tr>
              <td className="pb-2">Field of Study</td>
              <td className="pb-2">: Informatika.</td>
            </tr>
            <tr>
              <td className="pb-2">Favourite Things</td>
              <td className="pb-2">: You 🙌🥰.</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <p className="text-justify mt-2">
          This system was developed to fulfill the requirements for completing
          studies at the Faculty of Engineering, Mulawarman University.
        </p>
      </div>
    </section>
  );
};

export default Biodata;
