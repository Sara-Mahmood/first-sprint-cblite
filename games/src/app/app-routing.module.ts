import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamecardComponent } from './gamecard/gamecard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [{path:'', component: GamecardComponent},
                        {path:'selection', component: SelectionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
