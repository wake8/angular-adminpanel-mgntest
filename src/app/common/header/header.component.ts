import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loggedInUser = "Manager Test"
  role= "participant"

  queueSize = 46;

}
