import { Component } from '@angular/core';
import { ConnectService } from '../../service/connect.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-get-all-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-all-user.component.html',
  styleUrl: './get-all-user.component.css'
})
export class GetAllUserComponent {
  obj : ConnectService;

  constructor(a:ConnectService){
    this.obj = a;
  }
  
  ngOnInit(){
    this.obj.getAllUser();
  }
}
