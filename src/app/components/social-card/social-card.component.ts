import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  socialInfo : any[] = [
    {
      "name": "github",
      "link": "https://github.com/piedraprog",
      "socialCode":"github"
    },
    {
      "name": "linkdn",
      "link": "",
      "socialCode":"linkedin"
    },
    {
      "name": "instagram",
      "link": "",
      "socialCode":"instagram"
    },
    {
      "name": "facebook",
      "link": "",
      "socialCode":"facebook"
    },
    {
      "name": "twitter",
      "link": "",
      "socialCode":"twitter"
    },
    {
      "name": "youtube",
      "link": "",
      "socialCode":"youtube"
    },
  ];
  
}