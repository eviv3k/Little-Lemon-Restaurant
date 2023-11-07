import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faClockFour, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ReserveTable() {
    const options = [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };

    return (
      <div className="container reserve">
        <h1>Reservations</h1>
        <form className="reserve-form">
          <div className="width-80">
            <div className="marign-top width-30">
              <label className="label-left weight-700">
                <input
                  className="input-radio"
                  type="radio"
                  value="Indoor seating"
                />
                Indoor seating
              </label>
            </div>
            <div className="marign-top">
              <label htmlFor="date">Date</label>
              <CustomSelect
                options={options}
                value={selectedOption}
                icon={faCalendarMinus}
                onChange={handleSelectChange}
              />
            </div>
            <div className="marign-top">
              <label htmlFor="occasion">Occasion</label>
              <CustomSelect
                options={options}
                value={selectedOption}
                icon={faChampagneGlasses}
                onChange={handleSelectChange}
              />
            </div>
          </div>
          <div className="width-80">
            <div className="marign-top width-30">
              <label className="weight-700">
                <input
                  className="input-radio"
                  type="radio"
                  value="Outdoor seating"
                />
                Outdoor seating
              </label>
            </div>
            <div className="marign-top">
              <label htmlFor="number-diners">Number of Diners</label>
              <CustomSelect
                options={options}
                value={selectedOption}
                icon={faUser}
                onChange={handleSelectChange}
              />
            </div>
            <div className="marign-top">
              <label htmlFor="time">Time</label>
              <CustomSelect
                options={options}
                value={selectedOption}
                icon={faClockFour}
                onChange={handleSelectChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
}

const CustomSelect = ({ options, icon, value, onChange}) => {
    return(
        <div className="select-container">
            <FontAwesomeIcon className="icon" icon={icon} />
            <select className="custom-select" value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ReserveTable;