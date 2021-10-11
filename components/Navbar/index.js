import {Header, Logo}  from './navbarStyled'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Header>
    <div>
        <Logo><Link href="/">SIEMPRE EN CASA</Link></Logo>
        <nav>
          <ul>
            <li>
              <Link href="/cart">
               CART 
              </Link>
            </li>
          </ul>
        </nav>
    </div> 
  </Header>
  )
}