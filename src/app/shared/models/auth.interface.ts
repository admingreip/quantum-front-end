export interface IAuth {
    access_token: string;
    authorities: string;
    expires_in: number;
    system: string;
    menu: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    username: string;
    usuario: string;
}

export interface IAuthorities {
    authority: string;
    id: number;
    idOpcion: any;
    name: string;
}

/** @ToDo explicar que significa esta clase, para poner un nombre adecuado */
export interface IInfo {
    clave: string;
    descripcion: string;
    valor: string;
}


export interface IMenu {
    data: string;
    expandedIcon: string;
    icon: string;
    id: number;
    items: Array<IMenuItem>;
}

export interface IMenuItem {
    data: string;
    expandedIcon: string;
    icon: string;
    id: number;
    items: Array<IMenuItem>;
    label: string;
    routerLink: Array<string>;
}

