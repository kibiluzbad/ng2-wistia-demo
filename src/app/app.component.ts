import { Component } from '@angular/core';
import {WistiaPlayerComponent} from 'ng2-wistia/ng2-wistia';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [WistiaPlayerComponent]
})
export class AppComponent {
  title: string = 'teste';
  options: Object = {
    url: ''
  };
}
