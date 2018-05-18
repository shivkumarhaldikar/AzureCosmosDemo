import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CosmosdbService {

  public records: any[];
  constructor(private httpClient: HttpClient) {
  }

  getEmployees() {
     this.records = [];
     this.httpClient.get('https://my-json-server.typicode.com/shivkumarhaldikar/AzureCosmosDemo/employees').subscribe(
      (data: any[]) => {
        if (data.length) {
          data.forEach(item => {
            this.records.push(item);
          });
        }
      });
      return this.records;
  }
}
