import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],


})
export class ContentComponent implements OnInit {
  @Input() choosenObject;
  @Output() public passingData = new EventEmitter();
  constructor() {

  }
  ngOnInit() {
    
  }
  passData():void {
    this.passingData.emit(this.choosenObject)
  }
}
