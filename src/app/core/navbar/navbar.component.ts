import { Component, OnInit } from '@angular/core';
import { MountService } from 'src/app/mount/service/mount.service';
import { Skiresort } from 'src/app/mount/model/skiresort.model';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  skiresorts:Skiresort[];

  constructor(private service:MountService) { }

  ngOnInit() {
    this.service.getSkiresorts().subscribe(
      data => {
        this.skiresorts = data;
      }
    )
  }

}
