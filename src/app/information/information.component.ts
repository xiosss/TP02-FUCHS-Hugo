import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input () prenom : string = "";
  @Input () nom : string = "";
  @Input () genre : string ="";
  @Input () adresse : string = "";
  @Input () cp : string = "";
  @Input () ville : string = "";
  @Input () email : string = "";
  @Input () pseudo : string = "";
  @Input () password1 : string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
