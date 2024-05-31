import { Component } from '@angular/core';
import { faTint, IconDefinition  ,faLayerGroup , faCog ,faBell , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrl: './sidbar.component.scss'
})
export class SidbarComponent {
  faTint:IconDefinition=faTint;
  faLayerGroup:IconDefinition=faLayerGroup;
  faCog:IconDefinition=faCog;
  faBell:IconDefinition=faBell;
  faSignOutAlt:IconDefinition=faSignOutAlt;
}
