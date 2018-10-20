import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      (function ($) {
          ($(".owl-carousel.news") as any).owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 3000
          });
      })(jQuery);
    });

  }

}
