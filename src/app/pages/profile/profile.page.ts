import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data;

  constructor(private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(test => {
      if(test && test.resolveData){
        this.data = this.route.snapshot.data['resolveData']
      }
    })
  }


  ngOnInit() {
    if(this.route.snapshot.data['resolveData'])
    {
      this.data = this.route.snapshot.data['resolveData']
    }
  }

}
