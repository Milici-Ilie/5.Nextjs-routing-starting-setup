import Link from "next/link";
import classes from "./button.module.css";

//🍧🍧[BUTTONS & ICONS]🍧🍧 now we export this Button in the "event-item.js" file
function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }
  //📂📂[FILTERING EVENTS]📂📂now here we created something like a Ternarry Operator method, will select the "link" Button if it contains the (props.link) otherwise will return the Button from bellow === {props.children} receives the personal text
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
//🍧🍧[BUTTONS & ICONS]🍧🍧
