import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-suraksha-champ',
  templateUrl: './suraksha-champ.component.html',
  styleUrls: ['./suraksha-champ.component.scss']
})
export class SurakshaChampComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return ' You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: '2 Wheeler Insurance'},
    {value: 'pizza-1', viewValue: 'Hospicash'},
    {value: 'tacos-2', viewValue: 'GPA Insurance'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
