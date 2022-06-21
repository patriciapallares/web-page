import About from './main/About';
import Role from './main/Role';
import Tools from './main/Tools';
import Welcome from './main/Welcome';
import React from 'react';


function Main() {
  return (
    <main>
      <section className='hero'>
        <Welcome />
      </section>



      <div className='main__div'>
        <About />

        <Tools />
      </div>

      {/* <include src='./partials/main_menu.html'></include>
      <include src='./partials/main_about.html'></include>
      <include src='./partials/main_tools.html'></include>
      <include src='./partials/main_portfolio.html'></include>
      <include src='./partials/main_contact.html'></include> */}

    </main>
  );
}

export default Main;
