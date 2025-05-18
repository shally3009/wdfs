import React from 'react';

import ServiceCard from './components/serviceCard';

const App = ()=>{
  return(
    <div>
      <h1>Service-Listing</h1>
      <ServiceCard ServiceTitle= {"Web development"} ServiceDescription= {"Service for web develpoment is done"}/>
      <ServiceCard ServiceTitle= {"Frontend development"} ServiceDescription= {"The frontend part of development"}/>
    </div>
  )
}
export default App;