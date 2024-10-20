import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectService } from '../../service/connect.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  obj : ConnectService;

  constructor(a:ConnectService){
    this.obj = a;
  }
}
