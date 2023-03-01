import React from "react";
import PropTypes from 'prop-types';
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/playground">
        <span role="img" aria-label="projects" />
        Projects
      </a>
      <a href="https://billythemoose.github.io/" target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="about" />
        About
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default Menu; 