import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //Register User
  register(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));

  }
  // Login User
  login(email:string, password:string): boolean {
    const storedUser = localStorage.getItem('user');
    if(!storedUser){
      return false;
    }
    const user = JSON.parse(storedUser);
    return (
    user.email === email && user.password === password
  );
    
  }

  //Save Login state
  setLoggedIn(): void {
    localStorage.setItem('isLoggedIn', 'true');
  }

  //Check Login state
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  
  //Logout User
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    // localStorage.removeItem('user');
  }
  
}
