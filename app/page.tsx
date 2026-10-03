
import Text from './components/text'

const Home = () => {
 console.log('home component rendered');
  return (
    <main>
      <div className='flex flex-col items-center justify-center h-screen'>
        <p>You are too early, you can have a coffee and wait for a year or more...</p>
        <h1 className='text-4xl font-bold mt-4'>THANK YOU FOR VISITING !!</h1>
      </div>
      <Text/>
    </main>
  )
}

export default Home
