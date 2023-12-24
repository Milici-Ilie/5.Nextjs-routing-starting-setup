import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`; //📂📂[FILTERING EVENTS]📂📂 for this "path" with 2 specific pages will reach the [...slug.js] page, if there was only 1 specific page than the "path" will trigger the "[eventId].js" file

    router.push(fullPath); //this "push" will go to a different page
  } //📂📂[FILTERING EVENTS]📂📂 so thise function will pass the arguments "year, month" to the function "props.onSearch(..., ...)" from "events-search.js" file

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
