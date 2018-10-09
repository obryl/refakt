import {Component, OnInit} from '@angular/core';
import {AngularFireFunctions} from 'angularfire2/functions';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {debounceTime, take} from 'rxjs/operators';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  emailErr;
  phoneErr;
  requiredErr;
  wrongSubmit;
  sendSuccess;
  loading;
  sendErr;

  constructor(private firefunc: AngularFireFunctions) {
  }

  contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern(emailRegex), Validators.required]),
      phone: new FormControl('', [Validators.minLength(10), Validators.required]),
      message: new FormControl('', Validators.required)
    }
  );

  sendMail = this.firefunc.httpsCallable('mailSend');

  ngOnInit() {
    this.sendSuccess = false;
    this.loading = false;
    this.sendErr = false;
    this.contactForm.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      () => {
        this.wrongSubmit = false;
        const inputs = this.contactForm.controls;
        this.emailErr = inputs.email.hasError('pattern') && !inputs.email.pristine;
        this.phoneErr = inputs.phone.hasError('minlength') && !inputs.phone.pristine;
        this.requiredErr = inputs.email.hasError('required') || inputs.name.hasError('required') ||
          inputs.phone.hasError('required') || inputs.message.hasError('required');

      }
    );
  }

  calcTime(offset) {
    const d = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));
    return 'Повідомлення надіслане в ' + nd.toLocaleString('uk-UA', options);
  }

  resetForm() {
    setTimeout(() => {
        this.sendSuccess = false;
        this.loading = false;
        this.sendErr = false;
        this.contactForm.reset();
      }, 1000
    );
  }

  send() {
    this.wrongSubmit = this.requiredErr;

    if (!this.contactForm.invalid) {
      this.loading = true;
      this.contactForm.value.date = this.calcTime('+3');
      this.sendMail(this.contactForm.value).pipe(
        take(1)
      ).subscribe(() => {
        this.sendSuccess = true;
        this.loading = false;
      }, () => {
        this.loading = false;
        this.sendErr = true;
      });
    } else {
      this.wrongSubmit = this.requiredErr;
    }
  }
}
