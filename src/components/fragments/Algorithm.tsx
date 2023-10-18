import Card from "../elements/Card";
const Algorithm = () => {
  return (
    <section className="container mx-auto p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-12">
      <Card
        img="/image/vigenere.png"
        title="Vigenère Cipher"
        link="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher"
      >
        The Vigenère cipher is a method of encrypting alphabetic text by using a
        series of interwoven Caesar ciphers, based on the letters of a keyword.
        It employs a form of polyalphabetic substitution.
      </Card>
      <Card
        img="/image/affine.png"
        title="Affine Cipher"
        link="https://en.wikipedia.org/wiki/Affine_cipher"
      >
        The Affine cipher is a type of monoalphabetic substitution cipher, where
        each letter in an alphabet is mapped to its numeric equivalent,
        encrypted using a simple mathematical function, and converted back to a
        letter.
      </Card>
      <Card
        img="/image/lsb.png"
        title="Least Significant Bit"
        link="https://en.wikipedia.org/wiki/Bit_numbering"
      >
        The least significant bit is the part of the binary data sequence (base
        two) that has the least significant/smallest value. It is located on the
        far right of the bit sequence.
      </Card>
    </section>
  );
};

export default Algorithm;
