import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/User';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}`;


  constructor(private http: HttpClient) { }

  createUser(formData: User): Promise<any> { debugger
    //let user = new User();
    //user.name = formData.get('name');

    return this.http.post<any>(this.apiUrl +'users/register', formData).toPromise();   
  }


}
