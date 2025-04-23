import "./search.css";
import { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Search() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    childern: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions(prev=>{return {
      ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }})
  }

  return (
    <div className="searchBar">
      <div className="searchItem">
        <FontAwesomeIcon icon={faBed} className="searchItemIcon" />
        <input
          type="text"
          placeholder="  Where are you going?"
          className="searchInput"
        />
      </div>
      <div className="searchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="searchItemIcon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="searchText"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} ━ ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="dateStyle"
          />
        )}
      </div>
      <div className="searchItem">
        <FontAwesomeIcon icon={faPerson} className="searchItemIcon" />
        <span onClick={()=>setOpenOptions(!openOptions)} className="searchText">{`${options.adult} adult · ${options.childern} childern · ${options.room} room`}</span>
        {openOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult: </span>
            <div className="optionCounter">
              <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
              <span className="optionCounterNumber"> {options.adult} </span>
              <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Child: </span>
            <div className="optionCounter">
              <button className="optionCounterButton" onClick={()=>handleOption("childern", "i")}>+</button>
              <span className="optionCounterNumber"> {options.childern} </span>
              <button disabled={options.childern <= 0} className="optionCounterButton" onClick={()=>handleOption("childern", "d")}>-</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room: </span>
            <div className="optionCounter">
              <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
              <span className="optionCounterNumber"> {options.room} </span>
              <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
            </div>
          </div>
        </div>}
      </div>
      <div className="searchButton">
        <button className="btn">Search</button>
      </div>
    </div>
  );
}

export default Search;
