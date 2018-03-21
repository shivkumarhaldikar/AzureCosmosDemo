import { Component, OnInit, NgModule} from '@angular/core';
import { Renderer } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent implements OnInit {
  constructor(private renderer: Renderer) { }
  ngOnInit() {
  }

  Change(e) {
    console.log(e);
  }
  Save(e) {
    console.log(e.form.value);
  }
}


