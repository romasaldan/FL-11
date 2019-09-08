import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ArticleComponent } from './components/article/article.component';
import { from } from 'rxjs';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';

import { FormsModule } from '@angular/forms';
import { SearchPipe }  from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNewsComponent,
    ArticleComponent,
    NavigationComponent,
    ContentComponent,
    SearchPipe,
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
