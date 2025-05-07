import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function FlashcardForm() {
    return <div className="bg-white shadow-md rounded-lg p-6">
            <h1>Crear una nueva tarjeta</h1>
            <div>
              <div className="mb-4">
                <label className="FLashcardbrainInsert-Title" htmlFor="titulo">
                  Título
                </label>
                <input 
                  className="FLashcardbrainInsert-Input" 
                  id="titulo" 
                  type="text" 
                  placeholder="Añade un título"
                />
              </div>
              <div className="mb-6">
                <label className="FLashcardbrainInsert-Title" htmlFor="descripcion">
                  Descripción
                </label>
                <textarea 
                  className="FLashcardbrainInsert-Input resize-y min-h-[96px] max-h-[240px] overflow-auto" 
                  id="descripcion" 
                  placeholder="Añade una descripción"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  className="button-Blue" 
                  type="button"
                >
                  <PlusIcon className="w-6 h-6 pr-1"/>
                  Añadir Tarjeta
                </button>
              </div>
            </div>
          </div>
}