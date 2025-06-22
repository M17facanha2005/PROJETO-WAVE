import { PiRadioButtonFill } from "react-icons/pi";

export const Experience = () => {
  return (
    <div className="experience" id="section">
      <h1 className="title">Experiência</h1>
      <div className="content">
        <div className="wrapper">
          <div className="dot-container">
            <PiRadioButtonFill className="dot-icon" />
          </div>
          <div className="bar" />
          <div className="dot-container">
            <PiRadioButtonFill className="dot-icon" />
          </div>
          <div className="bar" />
        </div>
        <div className="val">
          <span>
            <h1>Nexus Group</h1>
            <p>Trabalhei como desenvolvedor na agência de servidores de FiveM "Nexus Group" (15/07/2024)</p>
          </span>
          <span>
            <h1>TDR_BOTS</h1>
            <p>Trabalhei como desenvolvedor web discord "TDR_BOTS" (12/09/2024)</p>
          </span>
        </div>
      </div>
    </div>
  );
};