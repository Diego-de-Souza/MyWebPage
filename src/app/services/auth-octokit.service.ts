import { Injectable } from '@angular/core';
import {createTokenAuth} from '@octokit/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthOctokitService {
  private auth: any;

  constructor() {
    this.initializeAuth();
   }

   async initializeAuth(){
    this.auth = await createTokenAuth("ghp_PersonalAccessToken01245678900000000")();
    // {
    //   type: 'token',
    //   token: 'ghp_PersonalAccessToken01245678900000000',
    //   tokenType: 'oauth'
    // }
   }

   async getAuth(){
    if(!this.auth){
      await this.initializeAuth();
    }
    return this.auth;
   }
}
