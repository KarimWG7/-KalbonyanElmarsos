import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1567589602992-778bb34d417b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZG1hcmtzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    address: "Some address 5, 123456 some place ",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1502091094786-a83d1eaa36e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxhbmRtYXJrc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    address: "Some address 5, 123456 some place ",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1523540499309-18d7a30ddf76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhbmRtYXJrc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    address: "Some address 5, 123456 some place ",
    description: "This is a third meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {

//   const req = context.req
//   const res = context.res

//   return {
//    // fetch data from an API
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 60,
  };
}

export default HomePage;
