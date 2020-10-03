
export class CommonDto {
    id:number;
    
    fecha:Date;
    terminal:string;    
    usuario:number;
    usuario_desc:string;
    
    fecha_creacion:Date;
    terminal_creacion:string;
    usuario_creacion:number;
    usuario_creacion_desc:string;
    
    comentario:string;
    eliminado: boolean;
}

export class GeGrupoParametroDto extends CommonDto {
    public tipo: string;
    public tipo_desc: string;
    public nombre: string;
}

export class GeParametroDto extends CommonDto {
    public descripcion: string;
    public codigo: string;
    public tipoDato: string;
    public tipoDatoDesc: string;
    public valor: string;
    public descripcionCorta: string;
    public estado: boolean;
    public estadoDesc: string;
    public grupoId: number;
    public grupoDescipcion: string;
}

export class GeBitacoraDto {
    public id: number;
    public registro: number;
    public fecha: string;
    public tipMovimiento: string;
    public usuarioId: number;
    public usuarioNombre: string;
    public estado: string;
    public terminal: string;
    public activo: boolean;
    public detalle: string;
    public etapa: string;
    public tipoMovimientoDesc: string;
    public estadoDesc: string;
    public etapaDesc: string;
}

export class GeContactoDto extends CommonDto{
    public id: number;
    public nombre: string;
    public telefPrincipal: string;
    public anexoPrincipal: string;
    public telefSecundario: string;
    public anexoSecundario: string;
    public movilPrincipal: string;
    public movilSecundario: string;
    public socioNegocio: number;

    public cargo: string;
    public correoElectronico: string;
}

export class GeUbigeoDto extends CommonDto {
    public nombre: string;
    public nombreCorto: string;
    public nombreCompleto: string;
    public tipo: string;
    public codPostal: string;
    public codInei: string;
    public codSunat: string;
    public estado: boolean;
    public padreId: number;
    public padreDescripcion: string;
    public monedaId: number;
    public monedaDescripcion: string;    
}

export class SimpleItemDto {
    public label: string;
    public value: any;
    constructor(label: string, value: any) {
        this.label = label;
        this.value = value;
    }
}   

export class GeEntidadDto {
    public id: number;
    public nombre: string;
    public correlativo: number;
    public modulo: string;
    public indCargaExcel: boolean;
}

export class GeInformacionDto {

    public clave: string;
    public descripcion: string;
    public valor: string;
}

export class TreeWebModelDto{
    public label: string;
    public data: string;
    public icon: string;
    public expandedIcon: string;
    public collapsedIcon: string

}


export class RequestHeader {
    tipoOperacion:string;
}


export class RequestService {
    header:RequestHeader;
    data:any;
}

export class ResponseHeader {
    tipoOperacion:string;
    can_res:number;
    cod_res:string;
    des_res:string;
    det_res:string;
    
}

export class ResponseData {
    data:any;
}

export class ResponseService {
    header:RequestHeader;
    data:ResponseData;
}




