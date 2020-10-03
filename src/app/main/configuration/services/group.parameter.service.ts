import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormGroup } from '@angular/forms';
import { GeGrupoParametroDto, RequestService } from 'src/app/shared/models/main.model';
import { ConfigurationConstants } from '../constants/configuration.constant';
import { removeSummaryDuplicates } from '@angular/compiler';

@Injectable()
export class GroupParameterService {
    
    constructor(private _commonService: CommonService) {

    }

    addValuesControls(anyForm: FormGroup, dto: GeGrupoParametroDto) {
        anyForm.controls["tipo"].setValue(dto.tipo);
        anyForm.controls["nombre"].setValue(dto.nombre);
        CommonService.setFormGroupByGenericParameters(anyForm, dto);
    }

}