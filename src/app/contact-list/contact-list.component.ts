import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const token = window.localStorage.getItem('auto_token');
    if (!token) {
      this.router.navigate(['/signin']);
    }
  }

}
