import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Bienvenido a Rentering 🛎️</h1>
      <p>Tu portal para reservar o administrar alojamientos.</p>
      <div className="buttons">
        <Link href="/login"><button>Login</button></Link>
        <Link href="/register"><button>Registrarse</button></Link>
      </div>
    </div>
  );
}