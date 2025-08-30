import React from "react";
import NavBar from "../../components/navbar";

const Header = () => {
  return (
    <div className="lg:container lg:mx-auto">
      <header className="lg:py-6 rounded-md lg:px-2 lg:mx-20">
        

          <div>
            <NavBar />
          </div>

      </header>
    </div>
  );
};

export default Header;
