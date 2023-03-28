import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The First Meetup",
    image:
      "https://images.unsplash.com/photo-1540448051910-09cfadd5df61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "1234 P Wallaby Way",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "m2",
    title: "The Second Meetup",
    image:
      "https://images.unsplash.com/photo-1588328275598-aa9ff7afa1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    address: "6789 Cuzco Rd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//Runs on build and revalidates with revalidate key in x seconds (Faster - use when data doesn't change frequently)
export async function getStaticProps() {
  //fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

//Constantly updated on the server side with every request - longer wait times (Use when data is changing frequently or you need the request)
/* export async function getServerSideProps(context) {
  const { req, res } = context;
  //fetch from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export default HomePage;
