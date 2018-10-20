import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      
      $('#toggle i').click(function () {
        $("nav ul").toggleClass("show");
      });

      var hash = location.hash;
      var target = $("section"+hash);

      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);

      
    });

  }

}
