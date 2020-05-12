import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','../app.component.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  doLogin()
  {
    // this.authService.login(this.email, this.password).then( () =>{
    //   this.router.navigate(['/home']);
    // }).catch(err => {
    //   alert('los datos son incorrectos o no existe el usuario');
    // })
    this.router.navigate(['/tabs/']);
  }


  loginGoogle(){
    this.authService.loginWithGoogle().then(()=>{
      this.router.navigate(['/home']);
    }).catch(err => {
      alert(err );
      console.log(err);
    })
  }

  loginFacebook(){
    this.authService.loginWithFacebook().then(()=>{
      this.router.navigate(['/home']);
    }).catch(err => {
      alert(err );
      console.log(err);
    })
  
  }

}
