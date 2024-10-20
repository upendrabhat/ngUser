import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatOption, MatSelectModule} from '@angular/material/select';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterModule, MatFormField,MatOption],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
