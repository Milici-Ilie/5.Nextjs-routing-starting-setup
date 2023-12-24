import EventItem from "./event-item";
import classes from "./event-list.module.css";
//💾💾[CONNECT REACT COMPONENTS]💾💾

function EventList(props) {
  const { items } = props;

  return (
    // 💾💾[CONNECT REACT COMPONENTS]💾💾
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
