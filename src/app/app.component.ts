import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { usersDataService } from './usersData.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'child-parent';
  dataToChild= 10;
  dataFromChild: any;
  twoWaydata: any;
  users:any;

   updateChild() 
   {
    this.dataToChild = Math.floor(Math.random() * 10)
    this.twoWaydata="Hritvik"
   }

   handleChildEvent(data: number) {
    this.dataFromChild = data;
  }

  constructor(private userData:usersDataService)
  {
    userData.users().subscribe((data)=>{
      // console.warn("data",data);
      this.users=data;
    })
  }
}
    
  




