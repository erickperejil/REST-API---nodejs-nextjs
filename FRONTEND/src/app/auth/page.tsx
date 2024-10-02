"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import "../globals.css";

interface FormData {
  correo: string;
  contrasena: string;
}
export default function Login() {
  const [formData, setFormData] = useState<FormData>({
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
      const response = await fetch("http://localhost:5000/user/login", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convierte el objeto en una cadena JSON
      });

      const data = await response.json();
      // Maneja la respuesta del servidor
      if (response.ok) {
        console.log("Datos enviados con éxito:", data);
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <main className="imagenfondo flex h-screen w-full flex-col bg-slate-50">
      <section className="flex h-[90%] w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="relative h-[78.4%] w-[26.7%] rounded-xl border shadow-xl"
        >
          <div id="Titulo" className="absolute top-[5.3%] h-[12.5%] w-full pl-7"
          >
            <h1 className="font-lekton text-5xl text-[#E72F63]">Login</h1>
          </div>
          <div className="absolute top-[23.3%] flex h-[10.6%] w-full justify-center ">
            <div className="absolute h-full w-[88.1%] rounded-lg">
              <input
                className="size-full text-gray-800 font-lekton shadow-lg rounded-lg pl-4"
                type="text"
                placeholder="correo@gmail.com"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="absolute top-[39.5%] flex h-[10.6%] w-full justify-center">
            <div className="absolute h-full w-[88.1%] rounded-lg">
              <input
                className="size-full text-gray-800 font-lekton shadow-lg rounded-lg pl-4"
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="contraseña"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div id="passwordForgetContainer" className="absolute top-[53.57%] h-[3%] w-full"></div>
          <div className="absolute top-[69.34%] flex h-[10.19%] w-full justify-center">
            <button
              type="submit"
              className="absolute h-full w-[56.61%] rounded-xl bg-[#E72F63]"
            ></button>
          </div>
          <div id="registerLinkContainer" className="absolute left-[25%] top-[82%] h-[6.1%] w-[50%]">
            <h1 className="textoRegistro text-base text-[#535353] font-lekton">
              ¿No tienes una cuenta?{" "}
            </h1>
            <h1 className="underline text-[#535353] decoration-slate-900 font-lekton">Regístrate aquí</h1>
          </div>
        </form>
      </section>

    </main>
  );
}
