import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  // Properties
  private fb = inject(FormBuilder);
  private authService = inject(AuthService)

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  //Methods
  public login(): boolean{
    const { email, password} = this.myForm.value
    this.authService.login(email, password).subscribe(
      data => {
        console.log({data});
      }
    )
    return true
  }

}
