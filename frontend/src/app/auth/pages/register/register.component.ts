import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
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

  register() {
    this.authService.register(this.form.value).subscribe((resp) => {
      if (resp.ok) {
        Swal.fire({
          title: '¡Hecho!',
          text: resp.msg,
          icon: 'success',
        }).then(() => this.router.navigateByUrl('/auth/login'));
      } else {
        Swal.fire('Error', resp.msg, 'error');
      }
    });
  }
}
