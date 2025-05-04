import React from "react";

const Sidebar = () => {
    return <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-4">
            <div>Categorias (+)</div>
            <div>Contactos Guardados (+) </div>
        </div>

        <div>
            <div>Papelera de reciclaje</div>
        </div>

    </div>;
};

export default Sidebar;