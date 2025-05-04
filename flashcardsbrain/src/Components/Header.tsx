import React from "react";
import Image from "next/image";

const Header = () => {
    return <div className="w-full">
        <div>
            <div className="flex h-14 items-center justify-between px-4 sm:px-6">
                <div className="flex flex-row item-center gap-4"> {/* Logo y titulo*/}
                    <Image
                        src="/Logo-Flashcardsbrain.png"
                        alt="FlashcardsBrain Logo"
                        width={60}
                        height={60}
                    />
                    <div className="flex flex-col">
                        <h1>FlashcardsBrain</h1>
                        <h2>Aprende con logica Visual</h2>
                    </div>
                </div>
                <div className="flex item-center gap-4">    {/* Botones de opciones*/}
                    <a href="">Tarjetas</a>                
                    <a href="">Manual</a>
                    {/*<a href="/login">Iniciar sesion</a>*/}
                    
                    <div className="flex items-center">     {/* Perfil de usuario*/}
                        <img src="path/to/image.jpg" />
                        <div className="flex flex-col">
                            <strong>Christopher Orta</strong>
                            <span>Desarrollador web</span>
                        </div>
                    </div>  

                </div>
            </div>
        </div>

    </div>;
};

export default Header;