import { Component } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service'
import { Post } from '../../models/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
constructor(private ApiCallService: ApiCallService)
{

}
postArray! : Post[];
  ngOnInit()
  {
    this.ApiCallService.getData().subscribe((res)=>
    {this.postArray=res;}
    )
  }
}
