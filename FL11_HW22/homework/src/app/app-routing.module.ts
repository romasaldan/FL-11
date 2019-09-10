import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'article',
    component: ArticleComponent
  },  
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full',
  },
  { 
    path: 'create',
    component: CreateNewsComponent
  },
  { 
    path: '**', 
    redirectTo: 'home' 
  },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
