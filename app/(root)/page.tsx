import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton signInUrl='/'/>
    </div>
  );
};

export default Home;
