import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface user{
  userId?: number,
  userPassword?: string,
  userName?: string
}

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  _http : HttpClient;
  userData : user[] = [];
  
  constructor(http:HttpClient) {
    this._http = http;
  }

  getAllUser(){
    this._http.get<user[]>("https://localhost:7055/api/Users").subscribe((data)=>{
      this.userData = data;
    })
  }

  deleteUser(form:any){
    if(confirm(`Are you sure you want to delete user ${form.value.id}?`)){
      this._http.delete("https://localhost:7055/api/Users/"+form.value.id).subscribe(data=>{});
      alert(`user ${form.value.id} deleted successfully`);
    }
  }

  searchUserData : user = {};
  searchUser(form:any){
    this._http.get<user>("https://localhost:7055/api/Users/"+form.value.userId).subscribe((data)=>{
      this.searchUserData = data;
    });
  }

  addUserData :user = {};
  addUser(form:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token_here' // Include token if needed
    });
    this.addUserData = form.value;
    console.log(this.addUserData);
    this._http.post("https://localhost:7055/api/Users/",JSON.stringify(this.addUserData),{ headers }).subscribe(response => {
      console.log(response);
      alert(form.value.userId + " added successfully");
    });
  }

    updateUserData :user ={};
    updateUser(form:any){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here' // Include token if needed
      });
      this.updateUserData = form.value;
      console.log(this.updateUserData);
      this._http.put("https://localhost:7055/api/Users/"+this.updateUserData.userId,JSON.stringify(this.updateUserData),{ headers }).subscribe(response => {
        console.log(response);
        alert(form.value.userId + " updated successfully");
      });
    }

}
