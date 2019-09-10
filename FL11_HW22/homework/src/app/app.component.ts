import { Component, Input } from '@angular/core';
import {SourceListService} from './source.list.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SourceListService]
})
export class AppComponent {

}
