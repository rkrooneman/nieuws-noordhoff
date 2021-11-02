export default function Navigation() {
  return <nav className="navigation mx-auto px-5">
            <a className="navLink groupStart groupEnd">Noordhoff Nieuws</a>
            <span className="navGroup font-bold groupStart">Marktgroepen</span>
            <hr className="navSeparator" /><a className="navLink">Basisonderwijs</a>
            <hr className="navSeparator" /><a className="navLink">Voortgezet Onderwijs</a>
            <hr className="navSeparator" /><a className="navLink">Middelbaar Beroepsonderwijs</a>
            <hr className="navSeparator" /><a className="navLink">Hoger Onderwijs</a>
            <hr className="navSeparator" /><a className="navLink groupEnd">Professional</a>
            <hr className="navSeparator" />
            <span className="navGroup font-bold groupStart">Categorieën</span>
            <hr className="navSeparator" /><a className="navLink">Webinars</a>
            <hr className="navSeparator" /><a className="navLink">Lestips</a>
            <hr className="navSeparator" /><a className="navLink">Actualiteit</a>
            <hr className="navSeparator" /><a className="navLink groupEnd">Vernieuwing</a>
            <hr className="navSeparator" />
            <span className="navGroup font-bold groupStart">Doelgroep</span>
            <hr className="navSeparator" /><a className="navLink">Docenten</a>
            <hr className="navSeparator" /><a className="navLink">Ouders</a>
            <hr className="navSeparator" /><a className="navLink">Studenten</a>
            <hr className="navSeparator" /><a className="navLink groupEnd">Overige</a>
            <hr className="navSeparator" />
        </nav>
}