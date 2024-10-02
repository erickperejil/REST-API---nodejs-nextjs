"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import "../globals.css";

interface FormData {
  nombre: string;
  correo: string;
  contrasena: string;
}
export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    correo: "",
    contrasena: "",
  });

  // Maneja los cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Datos enviados:', formData);
    // Aqui se hace la transaccion beebboop

    try {
      // Realiza una petición POST con los datos del formulario
      const response = await fetch("http://localhost:5000/user/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convierte el objeto en una cadena JSON
      });
      const data = await response.json();

      // Maneja la respuesta del servidor
      if (response.ok) {
        console.log("Datos enviados con éxito:", data);
        handleRegister();
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const [isRegistered, setIsRegistered] = useState(false);

  // Función para simular el registro de un usuario
  const handleRegister = () => {
    // Aquí iría la lógica de registro
    setIsRegistered(true);

    // Opcional: ocultar el mensaje después de unos segundos
    setTimeout(() => {
      setIsRegistered(false);
    }, 3000); // Ocultar después de 3 segundos
  };

  return (
    <main className="imagenfondo flex h-screen w-full flex-col bg-slate-50  overflow-hidden relative">
      <section className="flex h-[90%] w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="relative h-[78.4%] w-[26.7%] rounded-xl border shadow-xl"
        >
          <div
            id="Titulo"
            className="absolute top-[5.3%] h-[12.5%] w-full pl-7"
          >
            <h1 className="font-lekton text-5xl text-[#E72F63]">Registro</h1>
          </div>
          <div className="absolute top-[23.3%] flex h-[10.6%] w-full justify-center">
            <div className="absolute h-full w-[88.1%] rounded-lg">
              <input
                className="size-full rounded-lg pl-4 font-lekton text-gray-800 shadow-lg"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="absolute top-[39.5%] flex h-[10.6%] w-full justify-center">
            <div className="absolute h-full w-[88.1%] rounded-lg">
              <input
                className="size-full rounded-lg pl-4 font-lekton text-gray-800 shadow-lg"
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@gmail.com"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="absolute top-[55.5%] flex h-[10.6%] w-full justify-center">
            <div className="absolute h-full w-[88.1%] rounded-lg">
              <input
                className="size-full rounded-lg pl-4 font-lekton text-gray-800 shadow-lg"
                type="text"
                id="contrasena"
                name="contrasena"
                placeholder="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div
            id="passwordForgetContainer"
            className="absolute top-[53.57%] h-[3%] w-full"
          ></div>
          <div className="absolute top-[72.34%] flex h-[10.19%] w-full justify-center">
            <button
              type="submit"
              className="absolute h-full w-[56.61%] rounded-xl bg-[#E72F63]"
            ></button>
          </div>
          <div
            id="registerLinkContainer"
            className="absolute left-[25%] top-[85%] h-[6.1%] w-[50%]"
          >
            <h1 className="textoRegistro font-lekton text-base text-[#535353]">
              ¿Ya tienes una cuenta?{" "}
            </h1>
            <h1 className="font-lekton text-[#535353] underline decoration-slate-900">
              Inicia Sesion aqui
            </h1>
          </div>
        </form>
      <div className="w-4/5 h-14 bg-slate-100 border-2 border-green-400 absolute rounded-2xl flex justify-center items-center"
      style={{
        bottom: isRegistered ? '35px' : '-60px', // Cambia el valor de 80px según sea necesario
        transition: 'bottom 0.3s ease, opacity 0.3s ease',
      }}>
        <h1 className="font-lekton text-green-600 text-x">Usuario registrado con exito</h1>
      </div>
      </section>
    </main>
  );
}
