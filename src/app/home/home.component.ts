import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      (function ($) {
          ($(".owl-carousel.posts") as any).owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: true,
          });
          $( ".owl-prev").html('<i class="fas fa-angle-left"></i>');
          $( ".owl-next").html('<i class="fas fa-angle-right"></i>');
      })(jQuery);
    });
  }

}
