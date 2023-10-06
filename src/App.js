import {BrowserRouter} from 'react-router-dom'

import {About, Hero, Navbar, Service, CatService, Feedbacks, Footer} from './components'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full'>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <CatService/>
        <Feedbacks/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
