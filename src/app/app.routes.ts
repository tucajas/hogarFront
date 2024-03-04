import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { GastoDetailComponent } from './pages/gasto-detail/gasto-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Component } from '@angular/core';

export const routes: Routes = [

    {path:'',component: HomeComponent},
    {path:'gastos',component: GastosComponent},
    {path:'gastos/:id',component: GastoDetailComponent},
    {path:'contact',component:ContactComponent},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
