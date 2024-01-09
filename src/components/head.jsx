

const Head = () => {

    var sidmenu=document.getElementById("sidemenu");

    function closemenu(){
        sidmenu.style.right="-200px";
    }
    function openmenu(){
        sidmenu.style.right="0";
    }


  return (
    <div id="header">
    <div className="container">
         <nav>
          <ul id="sidemenu">
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#service">Services</a></li>
           <li><a href="#portfolio">Portfolio</a></li>
           <li><a href="#contact">Contact</a></li>
           <i className="fa-solid fa-xmark" onClick={closemenu}></i>
        </ul>
        <i className="fa-solid fa-bars" onClick={openmenu}></i>
        </nav>
        <i className="fa-solid fa-code nav-fa-code"></i>
        <div className="header-text">
            <p>Open to <span>work</span></p>
            <h1>Hi I'm <span>Suhan</span></h1>
        </div>
    </div>
    </div>
  )
}

export default Head
