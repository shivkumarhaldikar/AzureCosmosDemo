import { Component, OnInit, NgModule, ViewChild, AfterViewInit} from '@angular/core';
import { Renderer, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent implements OnInit, AfterViewInit {

    @ViewChild('fname') fname: ElementRef;
    @ViewChild('lname') lname: ElementRef;
    @ViewChild('eid') eid: ElementRef;
    @ViewChild('cnum') cnum: ElementRef;

   constructor(
    private httpClient: HttpClient,
    private renderer: Renderer,
    private route: ActivatedRoute,
    private ref: ElementRef
  ) {
  }

  ngOnInit() {
    }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      if (params.fname) {
        this.renderer.setElementProperty(this.fname.nativeElement, 'value', params.fname);
        (this.fname.nativeElement as HTMLElement).focus();
        this.renderer.setElementProperty(this.lname.nativeElement, 'value', params.lname);
        (this.lname.nativeElement as HTMLElement).focus();
        this.renderer.setElementProperty(this.eid.nativeElement, 'value', params.eid);
        (this.eid.nativeElement as HTMLElement).focus();
        this.renderer.setElementProperty(this.cnum.nativeElement, 'value', params.cnum);
        (this.cnum.nativeElement as HTMLElement).focus();
   } else {
     this.renderer.setElementProperty(this.fname.nativeElement, 'value', '');
     (this.fname.nativeElement as HTMLElement).blur();
     this.renderer.setElementProperty(this.lname.nativeElement, 'value', '');
     (this.lname.nativeElement as HTMLElement).blur();
     this.renderer.setElementProperty(this.eid.nativeElement, 'value', '');
     (this.eid.nativeElement as HTMLElement).blur();
     this.renderer.setElementProperty(this.cnum.nativeElement, 'value', '');
     (this.cnum.nativeElement as HTMLElement).blur();
   }
  });
  }

  Save(e) {
    this.httpClient.post(
      'https://my-json-server.typicode.com/shivkumarhaldikar/AzureCosmosDemo/employees/',
      e.form.value
    ).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }
}


