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
    email: ['manuel@mail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  //Methods
  public login(){
    const { email, password} = this.myForm.value
    this.authService.login(email, password).subscribe({
      next: () => {
        console.log('Todo bien');
      },
      error: (err) => {
        console.log({err});
      }
    })
  }

}
