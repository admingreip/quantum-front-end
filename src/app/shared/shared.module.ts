import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonService } from './services/common.service';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  providers: [CommonService]
})
export class SharedModule { 

}
