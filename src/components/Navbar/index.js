import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Navbar({ title }) {
  return (
    <Container>
      <div>
        <a href="#">{title}</a>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Header Nav Bar Fixed',
};
