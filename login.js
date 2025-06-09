export default function Login() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Correo" /><br/>
        <input type="password" placeholder="Contraseña" /><br/>
        <button>Ingresar</button>
      </form>
    </div>
  );
}