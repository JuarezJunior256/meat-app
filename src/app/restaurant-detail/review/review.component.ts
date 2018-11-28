import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from '../../restaurants/restaurant/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.reviews = this.restaurantService
                       .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
