import { Component, Input } from '@angular/core';
import { SourceService } from './source.service'
import {SourceListService} from './source.list.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SourceService,SourceListService]
})
export class AppComponent {
  public title = 'My News'
  receiveFromHomePage(data) {
  }
}
