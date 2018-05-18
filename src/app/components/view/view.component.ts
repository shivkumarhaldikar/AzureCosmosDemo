import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';
import { CosmosdbService } from '../../services/cosmosdb.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  records: any;
  constructor(public serviceClient: CosmosdbService) { }

  ngOnInit() {
   this.records =  this.serviceClient.getEmployees();
  }

  UpdateEmployee(record) {
    console.log(record);
  }

}
