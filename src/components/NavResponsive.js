import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <NavBackground>
      <StyledNav>
        <Link id="logo" to="/" onClick={closeMenu}>
          ECK Filmworks
        </Link>

        {/* Desktop Navigation */}
        <DesktopMenu>
          <li>
            <Link to="/">1. About Us</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "45%" : "10%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "45%" : "10%" }}
              className="line"
            ></motion.div>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "45%" : "10%" }}
              className="line"
            ></motion.div>
          </li>
        </DesktopMenu>

        {/* Mobile Menu Toggle */}
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </StyledNav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <li>
              <Link to="/" onClick={closeMenu}>
                About Us
              </Link>
              {pathname === "/" && <ActiveIndicator />}
            </li>
            <li>
              <Link to="/work" onClick={closeMenu}>
                Our Work
              </Link>
              {pathname === "/work" && <ActiveIndicator />}
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
              {pathname === "/contact" && <ActiveIndicator />}
            </li>
          </MobileMenu>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </NavBackground>
  );
};

const NavBackground = styled.div`
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 85%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    z-index: 12;
  }

  @media (max-width: 768px) {
    width: 90%;

    #logo {
      font-size: 1.5rem;
    }
  }
`;

const DesktopMenu = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding-left: 10rem;
    position: relative;

    @media (max-width: 1200px) {
      padding-left: 5rem;
    }
  }

  .line {
    height: 0.2rem;
    background: #23d997;
    position: absolute;
    bottom: -50%;
    left: 60%;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 12;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 968px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.ul)`
  display: none;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: #1b1b1b;
    padding: 8rem 2rem 2rem;
    list-style: none;
    z-index: 11;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);

    li {
      margin-bottom: 2rem;
      position: relative;

      a {
        font-size: 1.5rem;
        color: white;
        transition: color 0.3s ease;

        &:hover {
        }
      }
    }
  }
`;

const ActiveIndicator = styled.div`
  width: 50px;
  height: 3px;
  margin-top: 0.5rem;
`;

const Overlay = styled(motion.div)`
  display: none;

  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
  }
`;

export default Nav;
