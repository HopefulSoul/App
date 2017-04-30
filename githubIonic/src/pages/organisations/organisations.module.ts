import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OrganisationsPage } from './organisations';

@NgModule({
  declarations: [
    OrganisationsPage,
  ],
  imports: [
    /*IonicModule.forChild(Organisations),*/
  ],
  exports: [
    OrganisationsPage
  ]
})
export class OrganisationsModule {}
