import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-500 flex-col">
      <div className="w-full h-10">
      <Link href="/auth">Login</Link>
      </div>
      <div className="w-full h-10">
      <Link href="/register">Register</Link>
      </div>
      <div className="w-full h-10">
      <Link href="/home">Home</Link>
      </div>
      
      
      
      <h1 style={{fontFamily:"var(--lekton)"}}>Proyecto malote en lekton</h1>
    </div>
    
    
  );
}
