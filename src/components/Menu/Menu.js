import React from "react";
import PropTypes from 'prop-types';
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us" />
        Projects
      </a>
      <a href="/">
        <span role="img" aria-label="price" />
        About
        </a>
      <a href="/">
        <span role="img" aria-label="contact" />
        Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default Menu; 