import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      (function ($) {
          ($(".owl-carousel.pics") as any).owlCarousel({
            loop: true,
            items: 1,
            dots: false,
          });
          
      })(jQuery);

      $(".panel #close").click(function () {
        $("section#gallery").hide();
      });
      $("nav ul li#gallery_open p").click(function () {
        $("section#gallery").show();
      });
      

    });
  }

}
