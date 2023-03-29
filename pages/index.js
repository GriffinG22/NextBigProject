import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//Runs on build and revalidates with revalidate key in x seconds (Faster - use when data doesn't change frequently)
export async function getStaticProps() {
  //fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://Griffin:zIhHEqqHqHhPREdM@cluster0.o8blapn.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
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
