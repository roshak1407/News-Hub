import { useState } from 'react';
import Navbar from './Components/Navbar';
import Newsboard from './Components/Newsboard';

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");

  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <Newsboard category={category} country={country} />
    </div>
  );
};

export default App;
