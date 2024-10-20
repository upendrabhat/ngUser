import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectService } from '../../service/connect.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  obj : ConnectService;

  constructor(a:ConnectService){
    this.obj = a;
  }
}
