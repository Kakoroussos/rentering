import { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState('guest');

  return (
    <div className="container">
      <h2>Crear Cuenta</h2>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="guest">Huésped</option>
        <option value="hotel">Hotel</option>
      </select>
      <form>
        <input type="text" placeholder="Nombre" /><br />
        <input type="email" placeholder="Correo" /><br />
        <input type="password" placeholder="Contraseña" /><br />
        <button>Registrar como {role === 'guest' ? 'Huésped' : 'Hotel'}</button>
      </form>
    </div>
  );
}