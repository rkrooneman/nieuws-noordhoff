export default function Navigation() {
  return <nav className="navigation mx-auto px-5 md:none lg:block">
            <a className="navLink groupStart groupEnd" href="/"><img className="navLogo" src="https://images.ctfassets.net/huogrpkfou0w/7CY7o7KCg3JTy6ZuLyj0Ij/38cd70bf0eaf35f9f7511e3f9f4ffca9/Noordhoff_logo_horizontaal-SVG_v6.svg" /></a>
            <span className="navGroup text-x1 font-bold groupStart">Marktgroepen</span>
            <hr className="navSeparator" /><a className="navLink">Basisonderwijs</a>
            <hr className="navSeparator" /><a className="navLink">Voortgezet Onderwijs</a>
            <hr className="navSeparator" /><a className="navLink">Middelbaar Beroepsonderwijs</a>
            <hr className="navSeparator" /><a className="navLink">Hoger Onderwijs</a>
            <hr className="navSeparator" /><a className="navLink groupEnd">Professional</a>
            <hr className="navSeparator" />
            <span className="navGroup text-x1 font-bold groupStart">Categorieën</span>
            <hr className="navSeparator" /><a className="navLink">Webinars</a>
            <hr className="navSeparator" /><a className="navLink">Lestips</a>
            <hr className="navSeparator" /><a className="navLink">Actualiteit</a>
            <hr className="navSeparator" /><a className="navLink groupEnd">Vernieuwing</a>
            <hr className="navSeparator" />
            <span className="navGroup text-x1 font-bold groupStart">Doelgroep</span>
            <hr className="navSeparator" /><a className="navLink">Docenten</a>
            <hr className="navSeparator" /><a className="navLink">Ouders</a>
            <hr className="navSeparator" /><a className="navLink">Studenten</a>
            <hr className="navSeparator" /><a className="navLink groupEnd">Overige</a>
            <hr className="navSeparator" />
        </nav>
}