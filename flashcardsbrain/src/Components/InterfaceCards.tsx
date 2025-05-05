import React from "react";

export default function InterfaceCards() {
    return <div className="flex flex-1 flex-col p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Zona de tarjetas</h1>
              <div className="bg-white shadow-md rounded-lg p-6 mb-8 min-h-[50px] flex items-center justify-center">
                  <p className="text-gray-500 italic">No hay tarjetas para mostrar. Crea una nueva tarjeta para comenzar.</p>
              </div>
             </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Crear una nueva tarjeta</h2>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
                  Título
                </label>
                <input 
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  id="titulo" 
                  type="text" 
                  placeholder="Añade un título"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                  Descripción
                </label>
                <textarea 
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32" 
                  id="descripcion" 
                  placeholder="Añade una descripción"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center" 
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Añadir Tarjeta
                </button>
              </div>
            </div>
          </div>

    </div>;
}