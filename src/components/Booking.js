import React from "react";
import Form from "./Form";

class Booking extends React.Component {
  render() {
    return(
      <section className="section-booking">
        <div className="row">
            <div className="booking">
                 <h2 className="heading-secondary u-margin-bottom-medium">Start Booking now</h2>
                 <Form />
            </div>
        </div>
      </section>
    );
  }
}

export default Booking;