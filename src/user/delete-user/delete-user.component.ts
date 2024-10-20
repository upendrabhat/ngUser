import { Component } from '@angular/core';
import { ConnectService } from '../../service/connect.service';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [NgFor,NgClass,FormsModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  obj : ConnectService;
  userId: number;

  constructor(a:ConnectService){
    this.obj = a;
    this.userId = 0;
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.obj.deleteUser(id);
      console.log("id:"+id+" "+this.userId)
    }
  }
}
