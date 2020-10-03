import { CommonDto } from './main.model';

export class SeRolDto extends CommonDto{
    public id: number;
    public nombre: string;
    public indAdministrador: boolean;
    public indSys: boolean;
    public socioNegocio: number;
    public estado: string;
    public opciones: string[];
    public treeWebSelected: any;
    public eliminado: boolean;
}

export class SeUsuarioDto extends CommonDto{
    public id:number;
    public login:string;
    public nombre:string;
    public email:string;
    public contrasena: string;
    public rolId: number;//SeRolDto;
    public rolDescripcion: string;//SeRolDto;
    public estado:boolean;
    public confIdioma:string;
    public socioNegocioId: number;
    public socioNegocioNombre: string;

    public cambiarPassword: boolean;
    public confirmContrasena: string;
    public confirmEmail: string;
    public eliminado: boolean;
}


