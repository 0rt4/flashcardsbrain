'use client';

import {useState} from "react";
import Header from "../flashcardsbrain/src/Components/Header";
import Sidebar from "../flashcardsbrain/src/Components/Sidebar";
import InterfaceCards from "../flashcardsbrain/src/Components/InterfaceCards";


export default function Home() {
// pendiente de terminar esta función de cambio de estado de las opcione de header
  const [view, setView] = useState <"interfaz" | "opciones" | "Manual de Uso"> ("interfaz");
    

  return (
      <div className="flex flex-col h-screen">
        <div className="bg-red-300">
          <Header />
        </div>

        <div className="flex flex-1 overflow-auto">
          <div className="Sidebar">
              <Sidebar />
          </div>
          
          <div className="flex flex-col flex-1 overflow-auto">
            <InterfaceCards />
          </div>
       </div>

      </div>

  );
}

