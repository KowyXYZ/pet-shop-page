import {BrowserRouter} from 'react-router-dom'

import {About, Hero, Navbar} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full'>
        <Navbar/>
        <Hero/>
        <About/>
      </div>
    </BrowserRouter>
  );
}

export default App;
