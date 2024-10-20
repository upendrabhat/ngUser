import { Routes } from '@angular/router';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { DeleteUserComponent } from '../user/delete-user/delete-user.component';
import { GetAllUserComponent } from '../user/get-all-user/get-all-user.component';
import { SearchUserComponent } from '../user/search-user/search-user.component';
import { UpdateUserComponent } from '../user/update-user/update-user.component';
import { UserHomeComponent } from '../user/user-home/user-home.component';


export const routes: Routes = [
    {path:"home", component:HomePageComponent},
    {path:"userhome", component:UserHomeComponent, children:[
        {path:"addUser", component:AddUserComponent},
        {path:"deleteUser", component:DeleteUserComponent},
        {path:"getAllUser", component:GetAllUserComponent},
        {path:"searchUser", component:SearchUserComponent},
        {path:"updateUser", component:UpdateUserComponent},
    ]},
];
