
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'portfolio', component: PortfolioComponent }
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }