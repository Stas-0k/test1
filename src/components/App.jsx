import React from 'react';
import {  lazy } from 'react';
//import ContactForm from './contact-form';
//import Filter from './filter';
//import ContactList from './contact-list';
import { Route, Routes } from 'react-router-dom';
import {Layout} from './Layout'


const HomePage = lazy(()=>import('../pages/Home'))


function App() {
 

  return (
    <div>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/> */}
    

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
