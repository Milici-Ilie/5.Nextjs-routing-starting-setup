import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

//🧨🧨[DYNAMIC ROUTE]🧨🧨

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId; //🧨🧨[DYNAMIC ROUTE]🧨🧨 this will autto take the id from our URL, thanks to "query" wich is given out of the box by {useRouter}
  const event = getEventById(eventId); //🧨🧨[DYNAMIC ROUTE]🧨🧨 now our function "getEventById" from our "dummy BACKEND"will take as a prop the variable "eventId" and will return the ID need it for every page

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>;
      </ErrorAlert>
    );
  } //if "event" variable will find no "id" in the "dummy Backend" than will return this Error "p"

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      {/* 🧨🧨[DYNAMIC ROUTE]🧨🧨 with {event.description} we acces the variable from about wich is connected with to "dummy Backend", this is how we will acces the "description" from there */}
    </Fragment>
  );
}

export default EventDetailPage;
