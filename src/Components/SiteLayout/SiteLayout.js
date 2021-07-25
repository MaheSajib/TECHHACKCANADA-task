import React from 'react';
import Footer from '../Home/Footer/Footer';
import HeaderMenu from '../Home/HeaderMenu/HeaderMenu';

const SiteLayout = ({children}) => {
    return (
        <>
          <HeaderMenu></HeaderMenu>
          {children}
          <Footer></Footer>  
        </>
    );
};

export default SiteLayout;