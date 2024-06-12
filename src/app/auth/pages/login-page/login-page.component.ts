import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  // Properties
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router)

  public myForm: FormGroup = this.fb.group({
    email: ['manuel@mail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  //Methods
  public login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        Swal.fire('Exito', '', 'success');
        this.router.navigateByUrl('/dashboard')
      },
      error: (err) => {
        Swal.fire('Error', err, 'error');
      },
    });
  }
}
