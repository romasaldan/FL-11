import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { SourceService } from './../../source.service';
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
  public arrayOfFilteredNews = [];
  public choosenType:string = "";
  public searchStr:string  = ""
  constructor(private SourceService:SourceService,private SourceListService:SourceListService) {
    this.arrayOfNews = SourceService.news;
    this.arrayOfSources.push('all')
    this.arrayOfSources = [...SourceListService.sourceList];
  }
  ngOnInit():void {
    this.arrayOfFilteredNews = [...this.arrayOfNews]; 
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
