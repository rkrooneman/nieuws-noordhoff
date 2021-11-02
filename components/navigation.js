import Link from 'next/link'

export default function Navigation() {
  return <nav className="navigation mx-auto px-5">
            <Link href="/">
                <a className="navLink">Noordhoff Nieuws</a>
            </Link>
        </nav>
}