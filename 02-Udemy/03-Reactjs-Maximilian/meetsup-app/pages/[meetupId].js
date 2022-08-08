import { Fragment } from "react";

import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const image =
    "https://images.unsplash.com/photo-1567589602992-778bb34d417b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZG1hcmtzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60";
  return (
    <MeetupDetail
      image={image}
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
};

export default MeetupDetails;
