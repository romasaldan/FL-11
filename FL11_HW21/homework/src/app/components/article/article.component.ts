import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  passedObject:object;
  constructor() { }
  ngOnInit():void {
    this.passedObject = history.state[0];
  }
}
