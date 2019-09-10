import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, NgModel, FormGroup,ReactiveFormsModule,FormControl} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  public newItem:object ={};
  constructor() { }
  ngOnInit() {
  }
  saved(name:string,description:string,content:string,date:string,author:string,url:string):void{
    this.newItem = {
      name,
      description,
      content,
      date,
      author,
      url
    }
    console.log('saved')
    console.log(this.newItem)
  }
}
