import {Header, Logo, DropDownContent, DropDownLi, Dropbtn, SubA, StyledUl}  from './navbarStyled'
import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {

    const [show, setShow] = useState(false)
    const handleChange = () => {
        setShow(!show)
    }
    const cart = useSelector(state => state.products)
  return (
    <Header>
    <div>
        <Logo><Link href="/">LOGO</Link></Logo>
        <nav>
          <StyledUl>
          <DropDownLi>
            <Dropbtn onClick={handleChange}>
              DropDown
            </Dropbtn>
            {show && <DropDownContent>
              {
                cart.map(item => {
                  return <SubA key={item.id}>{item.name}</SubA>
                })  
              }
            </DropDownContent>}
          </DropDownLi>
          </StyledUl>
        </nav>
    </div> 
  </Header>
  )
}