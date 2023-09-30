import { Component, OnInit } from '@angular/core';
import { ExampleInterfaceModel } from 'src/app/models/model_example.model';

// Service to get API data
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-example-api-get',
  templateUrl: './example-api-get.component.html',
  styleUrls: ['./example-api-get.component.scss']
})
export class ExampleApiGetComponent implements OnInit {

  // Save API info in ExampleInterfaceModel format.
  public apiData: ExampleInterfaceModel = {
    name: '',
    status: '',
  };

  constructor(
    private apiService: ApiConnectionService,
  ) {

  }



  // ngOnInit method -> Run when app starts
  ngOnInit(): void {

    //Getting API data
    this.apiService.getSomeCharacter()
      .subscribe(
        {
          next: (api_info) => {
            console.log('Info from API: ', api_info);
            // Saving API data in local variable apiData
            this.apiData = api_info;
            // Now you can access to structured data as you define in your model
            console.log('name: ', this.apiData.name);
            console.log('name: ', this.apiData.status);
          }
        }
      );



  }

}
