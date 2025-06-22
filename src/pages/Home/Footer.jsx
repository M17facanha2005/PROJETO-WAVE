import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineBehance } from "react-icons/ai"
import { RxDiscordLogo } from "react-icons/rx"
import { FiGithub } from "react-icons/fi"

export const Footer = () => {
 return <SFooter>
  <h1>OBRIGADO</h1>
  <h2>POR CHEGAR ATÉ AQUI!</h2>
  <p>Para contratar qualquer serviço basta entrar en contato comigo pelas redes sociais abaixo ou pelo WhatsApp.</p>
  <p style={{marginTop: "25px"}}>Até logo!!!</p>
  <div className="socials">
    <div className="k">
      <div className="icon">
        <AiOutlineInstagram size={17}/>
      </div>
      WAVE
    </div>
    <div className="k">
      <div className="icon">
        <RxDiscordLogo size={16}/>
      </div>
      WAVE
    </div>
    
    <div className="k">
      <div className="icon">
        <AiOutlineWhatsApp size={18}/>
      </div>
      +55 85 98729-3174
    </div>
    
    
  </div>
 
 </SFooter>
}

const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;
  padding: 0 20px;

  & h1 {
    color:rgba(72, 99, 255, 0.62);
    font-family: "Outfit";
    font-weight: 800;
    font-size: 50px;
    z-index: 2;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  & h2 {
    color: #11071d;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 40px;
    z-index: 2;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  & p {
    font-weight: 500;
    max-width: 600px;
    font-size: 18px;
    font-family: "Manrope";
    color: #11071d;
    text-align: center;
    margin-top: 10px;

    @media (max-width: 480px) {
      font-size: 16px;
      max-width: 90%;
    }
  }

  & .socials {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;

    & .k {
      color: #1f0047;
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: "Outfit";
      user-select: text;

     .icon {
  user-select: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid black;
  display: grid;
  place-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.icon:hover {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}

.icon svg,
.icon img {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}

.icon:hover svg,
.icon:hover img {
  transform: scale(1.2);
}



  & .bg {
    opacity: 0.2;
    position: absolute;
    z-index: 0;
    height: 90%;
    left: -5%;

    @media (max-width: 768px) {
      left: -25%;
    }
  }

  & .bgr {
    opacity: 0.2;
    position: absolute;
    z-index: 0;
    height: 90%;
    right: -5%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`