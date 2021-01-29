import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data = ["45 Days", "React", "nodejs", "mongo-Db"];
  data2 = ["45 DAYS","Core Java", "Spring", "Hibernate"];

  constructor(private router: Router, private dataService: DataService) {}

  // passing the data to profile page and navigating
  passData() {
    this.dataService.setData(1, this.data);
    this.router.navigateByUrl("profile/1");
  }

  pass2Data() {
    this.dataService.setData(2, this.data2);
    this.router.navigateByUrl("profile/2");
  }
}
