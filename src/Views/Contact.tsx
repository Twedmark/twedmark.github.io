import { Sections } from "./style";
import { GrDocumentDownload } from "react-icons/gr";

const Contact = () => {
  const download = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1aUKDP8VrInLcBhBv-rbmRXB8ETLtb0gx",
      "_blank"
    );
  };

  return (
    <Sections>
      <p>Vill du veta mer eller kontakta mig?</p>
      <p>Mail: Axel.Twedmark@gmail.com</p>

      <div>
        <GrDocumentDownload onClick={download} size={40} />
        <p>Mitt CV</p>
      </div>
    </Sections>
  );
};

export default Contact;
