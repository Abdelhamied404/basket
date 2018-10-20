import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".desc .more p").click(function() {
      $(".desc p.more_desc").toggleClass("show");

      if($(".more p").text() === "[ Show More ]"){
        $(".more p").text("[ Show Less ]");
      }else{
        $(".more p").text("[ Show More ]");
      }

    });
  }

}
