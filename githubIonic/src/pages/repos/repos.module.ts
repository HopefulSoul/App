import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ReposPage } from './repos';

@NgModule({
  declarations: [
    ReposPage,
  ],
  imports: [
    /*IonicModule.forChild(Repos),*/
  ],
  exports: [
    ReposPage
  ]
})
export class ReposModule {}
