import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../can-deactivate.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements CanComponentDeactivate {
  user = {
    name: '',
    email: ''
  };

  saved = false;

  // injecting route object into this contact component
  constructor(private route: Router) { }

  onSubmit() {
    console.log(this.user.name, this.user.email);
    this.saved = true;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if ((this.user.name.length > 0 || this.user.email.length > 0) && !this.saved) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }

}
