import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';

import { SourceListService } from './../../source.list.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],

})
export class NavigationComponent implements OnInit {
  public title:string = 'My news';
  public arrayOfSources:Array<object> = [];
  @Input() public inFromParent: string;
  @Input() public searchStr:string;

  @Output() public outToParent = new EventEmitter();
  @Output() public toFilterList = new EventEmitter();
  constructor(private SourceListService:SourceListService) {
    this.arrayOfSources = [...SourceListService.sourceList];
    this.arrayOfSources.unshift({name:'all'})
  }
  ngOnInit() {
  }
  sendToParent(event):void {
    this.outToParent.emit(event.target);
    this.title = event.target.value;
  }
  startSearch():void {
    this.toFilterList.emit(this.searchStr)
  }
}
