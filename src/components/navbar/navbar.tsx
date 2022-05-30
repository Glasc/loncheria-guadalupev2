import styles from './navbar.module.scss'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import Link from 'next/link'

interface NavbarLinkProps {
  path: string
  children: any
}

interface MenuOptionsProps {
  isNavbarOpen: boolean
  handleNavbarToggle: () => void
}

interface NavbarProps {}

const NavbarLink = ({ path, children }: NavbarLinkProps) => {
  return (
    <li>
      <Link href={path}>
        <a>{children}</a>
      </Link>
    </li>
  )
}
const MenuOptions = ({
  isNavbarOpen,
  handleNavbarToggle,
}: MenuOptionsProps) => {
  if (isNavbarOpen) {
    return (
      <>
        <HiX size='2rem' onClick={() => handleNavbarToggle()} />
        <ul className={styles.list}>
          <NavbarLink path='/menu'>Menu</NavbarLink>
        </ul>
      </>
    )
  }
  return <HiOutlineMenu size='2rem' onClick={() => handleNavbarToggle()} />
}

const Navbar = ({}: NavbarProps) => {
  const [isNavbarOpen, setisNavbarOpen] = useState(false)

  const handleNavbarToggle = () => {
    setisNavbarOpen(!isNavbarOpen)
  }

  return (
    <div
      className={`backgroundDarker--${isNavbarOpen ? 'active' : 'inactive'}`}>
      <nav className={`${styles.nav}`}>
        <h1 className={styles.logo}>Kol Sebastián</h1>
        <MenuOptions
          isNavbarOpen={isNavbarOpen}
          handleNavbarToggle={handleNavbarToggle}
        />
      </nav>
    </div>
  )
}

export default Navbar
