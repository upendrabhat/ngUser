import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface user{
  userId: number,
  userPassword: string,
  userName: string
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
      console.log(data);
      console.log(this.userData);
    })
  }

  deleteUser(form:any){
    if(confirm(`Are you sure you want to delete user ${form.value.id}?`)){
      this._http.delete("https://localhost:7055/api/Users/"+form.value.id).subscribe(data=>{});
      alert(`user ${form.value.id} deleted successfully`);
    }
  }
}
