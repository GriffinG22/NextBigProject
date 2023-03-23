import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'The First Meetup',
        image: 'https://images.unsplash.com/photo-1540448051910-09cfadd5df61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        address: '1234 P Wallaby Way',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'm2',
        title: 'The Second Meetup',
        image: 'https://images.unsplash.com/photo-1588328275598-aa9ff7afa1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        address: '6789 Cuzco Rd',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const HomePage = () => {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS}/>
    </Layout>
    
  )
}

export default HomePage;