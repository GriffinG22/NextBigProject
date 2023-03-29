import { MongoClient } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1540448051910-09cfadd5df61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is outr first meetup"
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Griffin:zIhHEqqHqHhPREdM@cluster0.o8blapn.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

//getStaticProps requires an export of getStaticPaths
export async function getStaticProps(context) {
  //fetch single meetup data
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1540448051910-09cfadd5df61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is outr first meetup",
      },
    },
  };
}

export default MeetupDetailPage;
