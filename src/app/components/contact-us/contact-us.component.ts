import { Component } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contact:Contact=new Contact();
  onSubmit()
  {
    alert(this.contact.name+" Submitted");
  }
}
