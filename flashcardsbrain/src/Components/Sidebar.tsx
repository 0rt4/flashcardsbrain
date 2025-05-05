import React from "react";
import { PencilSquareIcon,UserGroupIcon,TrashIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
    return <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PencilSquareIcon className="w-5 h-5"/>
              <h1> Categorias</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <UserGroupIcon className="w-5 h-5"/>
              <h1> Contactos</h1>
            </div>
        </div>

        <div className="gap-4">
            <button className="button-yellow">
              <TrashIcon className="w-5 h-5 pr-1"/>
              Papelera de reciclaje
            </button>
        </div>

    </div>;
};

export default Sidebar;