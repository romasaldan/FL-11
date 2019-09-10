import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


import { SourceListService } from './../../source.list.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() outToParent;
  @Input() toFilterList;
  @Output() public outToGrandParent = new EventEmitter();
  public arrayOfSources = [];
  public arrayOfNews = [];
  public arrayOfFilteredNews= [];
  public choosenType:string = "";
  public searchStr:string  = ""
  
  todos: AngularFireList<any>;
  keysTodos = [];
  countTodos: number = 0;
 
  constructor(private db: AngularFireDatabase,private SourceListService:SourceListService) {
    this.arrayOfSources = [...SourceListService.sourceList];
    this.arrayOfSources.unshift('all')
  }
  ngOnInit() {
    let p = new Promise((resolve,reject)=>{
      this.db.list('/news').snapshotChanges().subscribe(el=>{
        const arr:Array<Object>= [];
        for (let i = 0; i < el.length; i++) {
          arr.push(el[i].payload.val())  
        }
        resolve(arr)
      })
    }).then(((data:Array<object>)=>{
      this.arrayOfFilteredNews = [...data];
      this.arrayOfNews=[...data] 
    }))
  }
  getString(event):void {
    this.searchStr = event;
  }
  receiveFromChild(evnt):void{
    this.choosenType = evnt.value.toLowerCase();
    this.arrayOfFilteredNews = [];
    if (this.choosenType === 'all') {
      this.arrayOfFilteredNews = [...this.arrayOfNews]; 
    } else {
      for (let i:number = 0; i < this.arrayOfNews.length; i++) {
        if (this.choosenType === this.arrayOfNews[i].category) {
         this.arrayOfFilteredNews.push(this.arrayOfNews[i])
        }
      }    
    }
  }
}
