import React from "react";
import Image from "next/image";

const Header = ({ setView }) => {
  return (
    <div className="w-full p-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <Image
          src="/Logo-Flashcardsbrain.png"
          alt="FlashcardsBrain Logo"
          width={60}
          height={60}
        />

        <div className="flex flex-col">
          <h1>FlashcardsBrain</h1>
          <h2>Aprende con lógica Visual</h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => setView("PageCards")}>
            Tarjetas
          </button>
          <button
            className="px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => setView("Manuals")}>
            Manual
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-indigo-800 text-white rounded-lg px-3 py-2">
          <img src="path/to/image.jpg" />
          <div className="flex flex-col ml-2">
            <span>Christopher Orta</span>
            <span className="text-xs text-indigo-200">Desarrollador web</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
