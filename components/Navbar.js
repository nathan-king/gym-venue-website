import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Button } from 'reactstrap'; 
import styles from './styles/Navbar.module.scss'
import Link from './Link'

export default function NavComponent (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="xl" fixed="top" className={styles.nav}>

        <NavbarBrand href="/">
          <img src="../ss-logo.png" alt="Sydney Sauna Logo" className={styles.companyLogo}/>
        </NavbarBrand>

        {/* NAV TOGGLER */}

        {/* See if there's a way to animate toggle icon */}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className={styles.collapseMenu}>

            {/* NAV ITEMS */}

          <Nav className="mr-auto" navbar>
            <NavItem className={styles.navItem}>
              <Link href="/" activeClassName="active">
                <NavLink className={styles.navLink}>About Us</NavLink>
              </Link>
            </NavItem>

            <NavItem className={styles.navItem}>
              <Link href="/whats-on" activeClassName="active">
                <NavLink className={styles.navLink}>What's On</NavLink>
              </Link>
            </NavItem>

            <NavItem className={styles.navItem}>
              <Link href="/gallery" activeClassName="active">
                <NavLink className={styles.navLink}>Gallery</NavLink>
              </Link>
            </NavItem>

            <NavItem className={styles.navItem}>
              <Link href="/massage" activeClassName="active">
                <NavLink className={styles.navLink}>Massage</NavLink>
              </Link>
            </NavItem>

            {/* DROPDOWNS */}

            <UncontrolledDropdown nav inNavbar className={styles.dropdown}>
              <DropdownToggle nav className={styles.dropdownToggle}>
              <NavItem className={styles.navItem}>
              <Link activeClassName="active">
                <a className={styles.dropdownLink}>Amenities</a>
                </Link>
              </NavItem>
              </DropdownToggle>
              <DropdownMenu dark className={styles.dropdownMenu}>
                <DropdownItem divider  className={styles.dropdownDivider}/>
                <DropdownItem className={styles.dropdownItem}>
                  <Link href="/cafe" activeClassName="active">
                      <a className={styles.dropdownLink}>Café</a>
                  </Link>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem}>
                  <Link href="/private-rooms" activeClassName="active">
                    <a className={styles.dropdownLink}>Private Rooms</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <UncontrolledDropdown nav inNavbar className={styles.dropdown}>
              <DropdownToggle nav>
              <NavItem className={styles.navItem}>
              <Link activeClassName="active">
                <a className={styles.dropdownLink}>Contact Us</a>
                </Link>
              </NavItem>
              </DropdownToggle>
              <DropdownMenu dark className={styles.dropdownMenu}>
                <DropdownItem divider  className={styles.dropdownDivider}/>
                <DropdownItem className={styles.dropdownItem}>
                  <Link href="/map" activeClassName="active">
                    <a className={styles.dropdownLink}>Map</a>
                  </Link>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem}>
                  <Link href="/lost-and-found" activeClassName="active">
                    <a className={styles.dropdownLink}>Lost & Found</a>
                  </Link>
                </DropdownItem>
                <DropdownItem className={styles.dropdownItem}>
                  <Link href="/careers" activeClassName="active">
                    <a className={styles.dropdownLink}>Careers</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            


            {/* DROPDOWN */}

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

          {/* NAV RIGHT */}
          </Nav>
          <NavItem className={styles.navItemButton}>
            <Button size="sm" className={styles.button}>
              <Link href="#" activeClassName="active">
                <NavLink>Melbourne</NavLink>
              </Link>
            </Button>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}