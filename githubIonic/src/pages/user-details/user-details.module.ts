import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserDetailsPage } from '../user-details/user-details';

@NgModule({
  declarations: [
    UserDetailsPage,
  ],
  imports: [
    /*IonicModule.forChild(UserDetails),*/
  ],
  exports: [
    UserDetailsPage
  ]
})
export class UserDetailsModule {}
