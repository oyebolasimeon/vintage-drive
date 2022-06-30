import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/Preloader/spinner.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor(public loaderService: SpinnerService) { }

  ngOnInit(): void {
  }

}
