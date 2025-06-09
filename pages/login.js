import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [role, setRole] = useState('guest');

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="guest">Huésped</option>
        <option value="hotel">Hotel</option>
      </select>
      <form>
        <input type="email" placeholder="Correo" /><br />
        <input type="password" placeholder="Contraseña" /><br />
        <button>Entrar como {role === 'guest' ? 'Huésped' : 'Hotel'}</button>
      </form>
    </div>
  );
}