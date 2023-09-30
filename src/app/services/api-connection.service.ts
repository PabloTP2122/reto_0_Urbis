import { Injectable } from '@angular/core';

//Service performs http requests
import { HttpClient } from '@angular/common/http';

// Here you can put your models from models folder as fallows
import { ExampleInterfaceModel } from '../models/model_example.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  // Go to environments/environment.development.ts and change for your API url
  private apiUrl = `${environment.API_URL}`;

  // Class constructor
  constructor(
    // Instance of HttpClient
    private http: HttpClient,
  ) { }

  // Example method to get some resource from an API
  getSomeCharacter() {
    // You have to replace ExampleInterfaceModel to own model for your API data.
    // ExampleInterfaceModel helps to get data in correct structure and avoid errors.
    console.log(`${this.apiUrl}/character/1`)
    return this.http.get<ExampleInterfaceModel>(`${this.apiUrl}/character/1`);
  }
}
