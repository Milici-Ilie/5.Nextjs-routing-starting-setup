import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";
//📂📂[FILTERING EVENTS]📂📂 those are Drop downs elements for the Year and for the Months

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef(); //those "useRef()" will be selected in the specific place, the <select> ... </select> from bellow👇

  function submitHandler(event) {
    event.preventDefault(); //to prevent reloading the page when we click the Button filter

    const selectedYear = yearInputRef.current.value; //always call the "current" to take the latest info's
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth); //📂📂[FILTERING EVENTS]📂📂"onSearch" is just a given name === NOW we want to pass those variables in the "index.js" file from "PAGES/EVENTS" folders === NOTE that the "selectedYear" and "selectedMonth" are arguments, so we can pass another values in here from another function placed in another file, there for will trigger the variables from here, check the "index.js" file to see those arguments
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">Octomber</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
