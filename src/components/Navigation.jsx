import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/agregar">Agregar Bebidas</Link>
        </li>
        <li>
          <Link to="/editar">Agregar Dulces</Link>
        </li>
        <li>
          <Link to="/productos"> Agregar Medicamentos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
