import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
  });
  constructor(private authService: AuthService, private router: Router) { }
  errMessage;

  ngOnInit() {
  }

  onClickRegister(form) {

    console.log(form.value);
    this.authService.register(form.value).subscribe(res => {
      console.log(res);
      if (res.status === 200) {
        this.router.navigateByUrl('login');
      } else { this.errMessage = res.message; }
    });

  }
}
