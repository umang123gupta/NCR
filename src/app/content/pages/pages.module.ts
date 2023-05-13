import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

const routes:Routes = [
  {
    path : '',
    component : PagesComponent,
    children: [
      {
        path :'',
        redirectTo :'home',
        pathMatch :'full'
      },
      {
        path : 'home',
        loadChildren: () => import('./home-screen/home-screen.module').then(m=>m.HomeScreenModule),
      },
      {
        path:'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m=>m.AboutUsModule),
      },
      {
        path:'services',
        loadChildren: () => import('./services/services.module').then(m=>m.ServicesModule),
      },
      {
        path:'blogs',
        loadChildren: () => import('./blogs/blogs.module').then(m=>m.BlogsModule),
      },
      {
        path:'contact-us',
        loadChildren:() => import('./contact-us/contact-us.module').then(m=>m.ContactUsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule
  ]
})
export class PagesModule { }
