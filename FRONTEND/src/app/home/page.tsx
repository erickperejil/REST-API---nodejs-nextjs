'use client'
import {useEffect, useState } from "react";

export interface User {
    id: number; 
    nombre: string;
    correo: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const pasteles = [
    '#D50032', // Rojo intenso
    '#F57F20', // Naranja vibrante
    '#FFEB3B', // Amarillo brillante
    '#4CAF50', // Verde brillante
    '#2196F3', // Azul fuerte
    '#9C27B0', // Púrpura vibrante
    '#FF4081', // Rosa fucsia
    '#3D5AFE', // Azul intenso
    '#00C853', // Verde neón
    '#FF6F20'  // Naranja quemado
  ];



  useEffect(() => {
    async function fetchGets() {
       const res = await fetch("http://localhost:5000/user");
       const data = await res.json();
      setUsers(data);
    }
    fetchGets();
  }, []);

  if (!users) return <div>Loading...</div>;

  return (
    <div className="h-screen w-full flex-col overflow-hidden bg-slate-200">
      <div className="grid grid-cols-5 grid-rows-4 gap-4 border-2 border-gray-500 p-4">
        {users.map((user) => (
          <div key={user.id} className="flex h-0 w-full items-center justify-center pb-[100%] font-bold text-white relative"
          style={{backgroundColor: pasteles[Math.floor(Math.random() * pasteles.length)]}}>
            <h1 className="font-lekton text-9xl absolute top-1/4">{user.nombre.charAt(0)}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
