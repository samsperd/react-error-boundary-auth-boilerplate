import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

const Home = () => {
  const authHeader = useAuthHeader()


  return (
    <div>
      <h1>Home</h1>
      <h5>{authHeader}</h5>
    </div>
  )
}

export default Home