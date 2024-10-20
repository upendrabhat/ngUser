import { Component } from '@angular/core';
import { ConnectService } from '../../service/connect.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent {
  obj : ConnectService;

  constructor(a:ConnectService){
    this.obj = a;
    this.obj.getAllUser();
  }
}
