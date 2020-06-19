import React, { useState, useRef, useEffect } from "react";
import window from "global";
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
} from "reactstrap";
import { Button } from "reactstrap";
import styles from "./styles/Navbar.module.scss";
import Link from "./Link";

export default function NavComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        dark
        expand="xl"
        fixed="top"
        className={styles.nav}
        style={{
          backgroundColor: `${navBackground ? "black" : "transparent"}`,
          transition: ".2s ease",
        }}
      >
        <NavbarBrand href="/">
          <img
            src="../ss-logo.png"
            alt="Sydney Sauna Logo"
            className={styles.companyLogo}
          />
        </NavbarBrand>

        {/* NAV TOGGLER */}

        {/* See if there's a way to animate toggle icon */}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className={styles.collapseMenu}>
          {/* NAV ITEMS */}

          <NavItem className={styles.navItemButton}>
            <Button size="sm" className={styles.button}>
              <a
                href="https://www.subwaysauna.com.au/"
                style={{ color: "inherit" }}
              >
                <NavLink>Melbourne</NavLink>
              </a>
            </Button>
          </NavItem>

          <Nav className="ml-auto" navbar>
            <NavItem className={styles.navItem}>
              <Link href="/" activeClassName="active">
                <NavLink className={styles.navLink}>About Us</NavLink>
              </Link>
            </NavItem>

            {/* <NavItem className={styles.navItem}>
              <Link href="/whats-on" activeClassName="active">
                <NavLink className={styles.navLink}>What's On</NavLink>
              </Link>
            </NavItem> */}

            <NavItem className={styles.navItem}>
              <Link href="/gallery" activeClassName="active">
                <NavLink className={styles.navLink}>Gallery</NavLink>
              </Link>
            </NavItem>

            <NavItem className={`${styles.navItem} `}>
              <Link href="/prices" activeClassName="active">
                <NavLink className={styles.navLink}>Prices</NavLink>
              </Link>
            </NavItem>

            {/* <NavItem className={styles.navItem}>
              <Link href="/massage" activeClassName="active">
                <NavLink className={styles.navLink}>Massage</NavLink>
              </Link>
            </NavItem> */}

            <NavItem className={`${styles.navItem} `}>
              <Link href="/amenities" activeClassName="active">
                <NavLink className={styles.navLink}>Amenities</NavLink>
              </Link>
            </NavItem>

            <NavItem className={`${styles.navItem} `}>
              <Link href="/cafe" activeClassName="active">
                <NavLink className={styles.navLink}>Café</NavLink>
              </Link>
            </NavItem>

            <NavItem className={`${styles.navItem} `}>
              <Link href="/private-rooms" activeClassName="active">
                <NavLink className={styles.navLink}>Private Rooms</NavLink>
              </Link>
            </NavItem>

            <NavItem className={`${styles.navItem} `}>
              <Link href="/contact-us" activeClassName="active">
                <NavLink className={styles.navLink}>Contact Us</NavLink>
              </Link>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar className={styles.dropdown}>
              <DropdownToggle nav className={styles.dropdownToggle}>
                <NavItem className={styles.navItem}>
                  <Link href="/amenities" activeClassName="active">
                    <a className={styles.dropdownLink}>Amenities</a>
                  </Link>
                </NavItem>
              </DropdownToggle>
              <DropdownMenu
                dark
                right
                className={styles.dropdownMenu}
                style={{
                  backgroundColor: `${
                    navBackground || window.innerWidth < 1200
                      ? "black"
                      : "transparent"
                  }`,
                  transition: ".2s ease",
                }}
              >
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
            </UncontrolledDropdown> */}

            {/* DROPDOWNS */}

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
        </Collapse>
      </Navbar>
    </div>
  );
}
