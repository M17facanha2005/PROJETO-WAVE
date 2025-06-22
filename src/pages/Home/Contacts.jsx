import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TbGps } from "react-icons/tb";

export const Contacts = () => {
  return <div className="contacts" id="section">
    <h1 className="title">Contato</h1>
    <div className="content">
      <div className="val">
        <BsWhatsapp size={40}/>
        <p>+55 85 99435-8301</p>
      </div>
      <div className="val">
        <FiMail size={40}/>
        <p>contatowave@gmail.com</p>
      </div>
      <div className="val">
        <TbGps size={40}/>
        <p>Fortaleza, CE, Brasil</p>
      </div>
    </div>
  </div>
}