import React from "react";
import Image from "next/image";

const Header = () => {
    return <div className="w-full">
        <div>
              <div className="flex h-14 items-center justify-between px-4 sm:px-6">
                <div className="flex flex-row item-center gap-4">
                    <Image
                        src="/Logo-Flashcardsbrain.png"
                        alt="FlashcardsBrain Logo"
                        width={60}
                        height={60}
                    />
                    <div className="flex flex-col">
                        <h1 className="font-[var(--font-title)] text-2xl font-bold">FlashcardsBrain</h1>
                        <h2 className="font-[var(--font-title)] text-1">Aprende con logica Visual</h2>
                    </div>
                </div>
                <div className="flex item-center gap-4">Opciones Manual nombre</div>
            </div>
        </div>

    </div>;
};

export default Header;