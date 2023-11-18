import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
        <h2>Página no encotrada</h2>
      <Link href="/">Volver a Home</Link>
    </div>
  )
}