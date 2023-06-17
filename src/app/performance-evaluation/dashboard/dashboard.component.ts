import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  list = [1,21315, 45];
  tabIndex = 0;

  changeSelection(newTab: any){
    this.tabIndex = newTab.index;
  }
  getSelectedIndex(){
    return this.tabIndex;
  }

}
