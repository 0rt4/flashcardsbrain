'use client';

import {useState} from "react";
import Header from "../flashcardsbrain/src/Components/Header";
import Sidebar from "../flashcardsbrain/src/Components/Sidebar";
import InterfaceCards from "../flashcardsbrain/src/Components/InterfaceCards";


export default function Home() {
// pendiente de terminar esta función de cambio de estado de las opcione de header
  const [view, setView] = useState <"interfaz" | "opciones"> ("interfaz");


  return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="resize-x overflow-auto min-w-[200px] max-w-[400px] p-4 bg-white">
            <Sidebar />
          </div>
          <div className="flex-1 p-4 bg-blue-300">
            <InterfaceCards />
          </div>
        </div>
      </div>

  );
}

