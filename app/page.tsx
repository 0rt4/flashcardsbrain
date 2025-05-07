'use client';

import {useState} from "react";
import Header from "../src/Components/Header";
import Sidebar from "../src/Components/Sidebar";
import PageCards from "../src/Components/Views/Flashcards_UI/PageCards";
import Manuals from "@/Components/Views/Manual/Manuals";
import Options from "@/Components/Views/Options/Options";


export default function Home() {
// pendiente de terminar esta función de cambio de estado de las opcione de header
  const [view, setView] = useState <"PageCards" | "Manuals" | "Options"> ("PageCards");
    

  return (
      <div className="flex flex-col h-screen">
        <div>
          <Header setView={setView}/>
        </div>

        <div className="flex flex-1 overflow-auto">
          <div className="Sidebar">
              <Sidebar />
          </div>
          
          <div className="flex flex-col flex-1 overflow-auto">
          {view === "PageCards" && <PageCards />}
          {view === "Manuals" && <Manuals />}
          {view === "Options" && <Options />}
          </div>
       </div>

      </div>

  );
}

