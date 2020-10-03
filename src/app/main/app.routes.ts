import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardDemoComponent } from '../demo/view/dashboarddemo.component';
import { SampleDemoComponent } from '../demo/view/sampledemo.component';
import { FormsDemoComponent } from '../demo/view/formsdemo.component';
import { DataDemoComponent } from '../demo/view/datademo.component';
import { PanelsDemoComponent } from '../demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from '../demo/view/overlaysdemo.component';
import { MenusDemoComponent } from '../demo/view/menusdemo.component';
import { MessagesDemoComponent } from '../demo/view/messagesdemo.component';
import { MiscDemoComponent } from '../demo/view/miscdemo.component';
import { EmptyDemoComponent } from '../demo/view/emptydemo.component';
import { ChartsDemoComponent } from '../demo/view/chartsdemo.component';
import { FileDemoComponent } from '../demo/view/filedemo.component';
import { UtilsDemoComponent } from '../demo/view/utilsdemo.component';
import { DocumentationComponent } from '../demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from '../pages/app.notfound.component';
import { AppErrorComponent } from '../pages/app.error.component';
import { AppAccessdeniedComponent } from '../pages/app.accessdenied.component';
import { AppLoginComponent } from '../pages/app.login.component';
import { AppHelpComponent } from '../pages/app.help.component';
import { AppInvoiceComponent } from '../pages/app.invoice.component';
import { AppWizardComponent } from '../pages/app.wizard.component';
import { GeGroupParameterListComponent } from './configuration/components/group.parameter.list.component';

export const routes: Routes = [
    {
        path: '', component: AppMainComponent,
        children: [
            { path: '', component: DashboardDemoComponent },
            { path: 'configuration/ge/grupo', component: GeGroupParameterListComponent },
            { path: 'configuracion/socio-negocio', component: SampleDemoComponent },
            { path: 'configuracion/ubigeo', component: FormsDemoComponent },
            { path: 'seguridad/usuario', component: DataDemoComponent },
            { path: 'components/panels', component: PanelsDemoComponent },
            { path: 'components/overlays', component: OverlaysDemoComponent },
            { path: 'components/menus', component: MenusDemoComponent },
            { path: 'components/messages', component: MessagesDemoComponent },
            { path: 'components/misc', component: MiscDemoComponent },
            { path: 'pages/empty', component: EmptyDemoComponent },
            { path: 'components/charts', component: ChartsDemoComponent },
            { path: 'components/file', component: FileDemoComponent },
            { path: 'utils', component: UtilsDemoComponent },
            { path: 'documentation', component: DocumentationComponent },
            { path: 'pages/help', component: AppHelpComponent },
            { path: 'pages/invoice', component: AppInvoiceComponent },
        ]
    },
    { path: 'error', component: AppErrorComponent },
    { path: 'accessdenied', component: AppAccessdeniedComponent },
    { path: '404', component: AppNotfoundComponent },
    { path: 'login', component: AppLoginComponent },
    { path: 'wizard', component: AppWizardComponent },
    { path: '**', redirectTo: '/404' },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
