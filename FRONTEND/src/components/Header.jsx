function Header(props) {
  return (
   <header className="header">
         <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
           <img className="header__companyLogo" src={props.iconLaptop}alt="Logo proyectos molones"/>
           <h1 className="header__title">Proyectos molones</h1>
         </a>
         <img className="logoSponsor" src={props.logoAdalab} alt="Logo Adalab"/>
       </header>
  );
}

export default Header;