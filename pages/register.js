export default function Register() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Nombre" /><br/>
        <input type="email" placeholder="Correo" /><br/>
        <input type="password" placeholder="Contraseña" /><br/>
        <button>Crear cuenta</button>
      </form>
    </div>
  );
}