import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user = {
    name: '',
    email: ''
  };

  // injecting route object into this contact component
  constructor(private route: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.user.name, this.user.email);

    // inside array we need to pass the path we need to naviagte
    this.route.navigate(['/users', '1']);
  }
}
