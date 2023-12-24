import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter(); //💱💱[EXTRACTING DATA]💱💱
  const filderData = router.query.slug;
  // console.log(filderData);//this will display an Array with 2 values, {year} and {month}

  if (!filderData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filderData[0];
  const filteredMonth = filderData[1]; //💱💱[EXTRACTING DATA]💱💱 those 2 variables will take the values from the Array

  const numYear = +filteredYear;
  const numMonth = +filteredMonth; //💱💱[EXTRACTING DATA]💱💱 those 2 will convert from "strings" to numbers, because the function will extract those values as "Strings" out of the URL so adding the "+" symbol will transform those values in to numbers

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2035 ||
    numYear < 2023 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
        {/* 💱💱[EXTRACTING DATA]💱💱 this Button will choose the "link" Button thanks to "link='/events' and will bring the user back to the "events" page when pressed". NOTE also that the "className='center'" is a global style */}
      </>
    );
  } //💱💱[EXTRACTING DATA]💱💱 this "if" will check if there are some invalid values, the most important are those "isNaN" bcs those will check if in the URL was inserted something else than a Number, let's say some letter "abccc", if so than will return the <p>...</p> or some Error if you want to customize one

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth }); //💱💱[EXTRACTING DATA]💱💱 we are passing the converted numbers to the function from our "dummy BACKEND" file

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>
            No events found for the chosen filter! Please try another dates.
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
        {/* 💱💱[EXTRACTING DATA]💱💱 this Button will choose the "link" Button thanks to "link='/events' and will bring the user back to the "events" page when pressed". NOTE also that the "className='center'" is a global style */}
      </>
    );
  } //💱💱[EXTRACTING DATA]💱💱 this will check if there are no events

  const date = new Date(numYear, numMonth - 1); // -1 because is 0 based as default

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
