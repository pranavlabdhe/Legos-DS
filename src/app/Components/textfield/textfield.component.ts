import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  iserror = false;
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return ' You must enter a value';
    }
    return this.email.hasError('email') ? `Not a valid email` : `Assestive text`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
