import "../index.scss";
import Sun from '../img/sun.svg';
import Moon from '../img/moon.svg';

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check">
                <img className="sun" src={Sun}></img>

                <img className="moon"  src={Moon}></img>
            </label>
            <div className="toggle-text">
                {isChecked ? "soir" : "midi"}
            </div>

        </div>
    );
};

function DarkMode({ isChecked, handleChange }) {
    return (
      <div className="darkmode" data-theme={isChecked ? "dark" : "light"}>
        <Toggle isChecked={isChecked} handleChange={handleChange} />
      </div>
    );
  }