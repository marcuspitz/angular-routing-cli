import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './404/error404.component';
import { AuthGuard } from './guard/auth.guard';
import { GuestGuard } from './guard/guest.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        canActivate: [GuestGuard],
        canLoad: [GuestGuard],
        component: LoginComponent,
    },
    {
        path: '',
        canActivateChild: [AuthGuard],        
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
        ]
    },    
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '**',
        redirectTo: '/404'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
