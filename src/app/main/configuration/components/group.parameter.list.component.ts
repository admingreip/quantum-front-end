import { OnInit, Component, Inject, forwardRef } from '@angular/core';
import { GeGrupoParametroDto, RequestService, ResponseService, ResponseHeader } from 'src/app/shared/models/main.model';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';
import { ConfigurationConstants } from '../constants/configuration.constant';
import { BreadcrumbService } from '../../breadcrumb.service';
import { SelectItem, Message, ConfirmationService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'src/app/app.config';



@Component({
    selector: 'geGroupParameterListComponent',
    templateUrl: 'group.parameter.list.component.html'
})
export class GeGroupParameterListComponent implements OnInit {

    msgsPage: Message[] = [];
    filtro: GeGrupoParametroDto;
    itemsPerPage: number = 10;
    totalRows: number = 0;
    list: GeGrupoParametroDto[];
    dto: GeGrupoParametroDto;
    listSelected: GeGrupoParametroDto[];
    sitTipos: SelectItem[];
    headerResponse: ResponseHeader;

    constructor(private _commonService: CommonService,
        private _router: Router,
        private _breadcrumbService: BreadcrumbService,
        private _confirmationService: ConfirmationService,
        public translate: TranslateService) {
        this._breadcrumbService.setItems([{ label: ConfigurationConstants.configurationModule, routerLink: [ConfigurationConstants.configurationModule] }]);
    }

    ngOnInit() {
        this.filtro = new GeGrupoParametroDto();
        this.sitTipos = []; // se debe traer del servicio
        this.itemsPerPage = AppConfig.WEB_CLIENT_ITEM_PER_PAGE;
        this.filtro.nombre = null;
        this.filtro.tipo = null;
        this.initForm();
        this.msgsPage.push({ severity: AppConfig.WEB_CLIENT_MSG_SEVERITY_SUCCESS, summary: 'Mensaje', detail: 'Detalle de mensaje' });
    }

    /**
     * Metodo para iniciar la pantalla. Si es necesario trae data de la base de datos.
     */
    initForm() {
        let req: RequestService = CommonService.newInstanceRequestService();
        req.header.tipoOperacion = AppConfig.DB_TIPO_OPERATION_READ_FORM;
        //console.log(JSON.stringify(req));
        this._commonService.get(ConfigurationConstants.geGrupoParametroUrl, req).subscribe(res =>
            this.loadDataInit(res)
        );
    }

    /**
     * Metodo para iniciar la pantalla. Si es necesario trae data de la base de datos.
     */
    loadDataInit(res: any) {
        this.sitTipos = res.frmSelTipos
    }

    /**
     * Metodo para buscar y traer registros de la base de datos
     */
    search() {
        this.listSelected = [];
        let req: RequestService = CommonService.newInstanceRequestService();
        req.header.tipoOperacion = AppConfig.DB_TIPO_OPERATION_READ;
        if (this.filtro.nombre === null || this.filtro.nombre === '') {
            this.filtro.nombre = AppConfig.DB_COOMODIN_LIKE;
        }
        req.data = this.filtro
        console.log(JSON.stringify(req))
        this._commonService.get(ConfigurationConstants.geGrupoParametroUrl, req).subscribe(res =>
            this.loadDataSeach(res)
        );
    }

    /**
     * Metodo para cargar los registros de la base de datos. Lo utiliza el search()
     */
    loadDataSeach(res: any) {
        this.list = res.data;
        let header: ResponseHeader = res.header;
        this.totalRows = header.can_res;
    }

    /**
     * Metodo para navegar e ir al formulario de un nuevo registro
     */
    goFormNew() {
        this._router.navigate([ConfigurationConstants.geGrupoParametroNew]);
    }

    /**
     * Metodo para navegar e ir al formulario para clonar un registro 
     * @param id identificador del registro
     */
    goFormNewClone(id: number) {
        this._router.navigate([ConfigurationConstants.geGrupoParametroNew, id, true]);
    }

    /**
     * Metodo para navegar e ir al formulario para editar un registro 
     * @param id identificador del registro
     */
    goFormEdit(id: number) {
        this._router.navigate([ConfigurationConstants.geGrupoParametroEdit, id]);
    }

    /**
     * Metodo para navegar e ir a la vista de un registro 
     * @param id identificador del registro
     */
    goView(id: number) {
        this._router.navigate([ConfigurationConstants.geGrupoParametroView, id]);
    }

    /**
     * Metodo para eliminar un registro
     * @param id identificador del registro
     */
    goDelete(id: number) {
        this._confirmationService.confirm({
            message: this.translate.instant('msgGeConfirmDelete'),
            header: this.translate.instant('titGeConfirm'),
            accept: () => {
                let req: RequestService = CommonService.newInstanceRequestService();
                req.header.tipoOperacion = AppConfig.DB_TIPO_OPERATION_DELETE;
                let dto: GeGrupoParametroDto = new GeGrupoParametroDto();
                dto.id = id;
                req.data = dto;
                this._commonService.delete(ConfigurationConstants.geGrupoParametroUrl, req).subscribe(
                    res => { this.loadDataSeach(res) },
                    err => { },
                    () => {
                        this.search();
                    }
                )
                //console.log(req)
            },
            reject: () => { }
        });
    }

    /**
     * Metodo para cargar los registros de la base de datos. Lo utiliza el search()
     */
    loadDataDelete(res: any) {
        this.headerResponse = res.header;
        this.msgsPage = [];
        if (this.headerResponse.cod_res = AppConfig.DB_RESPONSE_OK) {
            this.msgsPage.push({ key: 'tst', severity: AppConfig.WEB_CLIENT_MSG_SEVERITY_SUCCESS, summary: this.headerResponse.des_res, detail: this.headerResponse.det_res });
        } else {
            this.msgsPage.push({ key: 'tst', severity: AppConfig.WEB_CLIENT_MSG_SEVERITY_WARN, summary: this.headerResponse.des_res, detail: this.headerResponse.det_res });
        }

    }


}