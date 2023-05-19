import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const PharmacyComponent = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    nombre: '',
    dosis: '',
    precio: ''
  });
  const [edicionMedicamento, setEdicionMedicamento] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoMedicamento((prevMedicamento) => ({
      ...prevMedicamento,
      [name]: value
    }));
  };

  const agregarMedicamento = () => {
    setMedicamentos((prevMedicamentos) => [
      ...prevMedicamentos,
      nuevoMedicamento
    ]);
    setNuevoMedicamento({ nombre: '', dosis: '', precio: '' });
  };

  const editarMedicamento = (index) => {
    setEdicionMedicamento(index);
    setNuevoMedicamento(medicamentos[index]);
  };

  const guardarEdicion = () => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos[edicionMedicamento] = nuevoMedicamento;
      return nuevosMedicamentos;
    });
    setEdicionMedicamento(null);
    setNuevoMedicamento({ nombre: '', dosis: '', precio: '' });
  };

  const eliminarMedicamento = (index) => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos.splice(index, 1);
      return nuevosMedicamentos;
    });
  };

  return (
    <div>
            <Link to={`/editar/`}></Link>

      <h2>Dulces</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dosis</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((medicamento, index) => (
            <tr key={index}>
              <td>{medicamento.nombre}</td>
              <td>{medicamento.dosis}</td>
              <td>{medicamento.precio}</td>
              <td>
                {edicionMedicamento === index ? (
                  <button onClick={guardarEdicion}>Guardar</button>
                ) : (
                  <>
                    <button onClick={() => editarMedicamento(index)}>
                      Editar
                    </button>
                    <button onClick={() => eliminarMedicamento(index)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Agregar Medicamento</h3>
      <form>
        <input
          type="text"
          name="nombre"
          value={nuevoMedicamento.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="dosis"
          value={nuevoMedicamento.dosis}
          onChange={handleChange}
          placeholder="Dosis"
        />
        <input
          type="text"
          name="precio"
          value={nuevoMedicamento.precio}
          onChange={handleChange}
          placeholder="Precio"
        />
        <button type="button" onClick={agregarMedicamento}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default PharmacyComponent;
