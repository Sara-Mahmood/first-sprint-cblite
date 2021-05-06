import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SelectionComponent } from './selection/selection.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

const routes: Routes = [{path:'', component: LoginPageComponent},
                        {path:'signin', component: LoginPageComponent},
                        {path:'selection', component: SelectionComponent},
                        {path:'admin', component:AdminPanelComponent},
                        {path:'game', component: GameScreenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
