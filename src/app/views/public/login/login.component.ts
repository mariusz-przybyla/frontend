import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs';
import {ToastsService} from 'src/app/modules/toasts/toasts.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loading = false;
    test!: string;

    constructor(
        private userService: UserService,
        private toastService: ToastsService
    ) {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
        });
    }

    login(): void {
        const {username, password} = this.loginForm.value;

        this.loading = true;
        this.userService.tryLogin(username, password)
            .pipe(
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe({
                error: () => {
                    this.loginForm.reset();
                    this.toastService.pushError();
                }
            })
    }
}
