import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { checkIfIsLoggedOnGuard } from './guards/check-if-is-logged-on.guard';
import { checkIfIsLogoutGuard } from './guards/check-if-is-logout.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [checkIfIsLoggedOnGuard],
    },
    {
        path: 'tasks',
        component: TasksComponent,
        canActivate: [checkIfIsLogoutGuard],
    },
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full',
    },
];
