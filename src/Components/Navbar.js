import React from "react";

function Navbar({unique, filter}){

    return(

        <>
         <nav className="navbar bg-warning justify-content-center rounded mx-2">
        <div className="btn-group">
          {unique.map((curElem) => {
            return (
              <button
                className="btn-group__item" onClick={(()=>{filter(curElem)})}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
        
        </>
    )
}


export {Navbar};