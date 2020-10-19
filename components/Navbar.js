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
            src="../gym-venue.svg"
            alt="Gym Venue Logo"
            className={styles.companyLogo}
          />
        </NavbarBrand>

        {/* NAV TOGGLER */}

        {/* See if there's a way to animate toggle icon */}

        <NavbarToggler onClick={toggle} style={{ border: "none" }}>
          <div id="close-icon" className={isOpen ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar className={styles.collapseMenu}>
          {/* NAV ITEMS */}

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
              <Link href="/contact-us" activeClassName="active">
                <NavLink className={styles.navLink}>Contact Us</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
