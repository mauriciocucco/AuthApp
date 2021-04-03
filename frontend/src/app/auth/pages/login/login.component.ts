import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private validatorsService: ValidatorsService,
    private router: Router
  ) {}

  login() {
    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe((resp) => {
      if (resp.ok) {
        localStorage.setItem('token', resp.token!);
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', resp.msg, 'error');
      }
    });
  }
}
