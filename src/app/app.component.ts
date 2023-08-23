import { Component, OnInit } from '@angular/core';
import { IGenresResult } from 'src/interfaces/Genres/IGenresResult';
import { IGenres } from 'src/interfaces/Genres/IGenres';
import { movieService } from 'src/services/Movie.service';
import { ITopRatedResult } from 'src/interfaces/TopRated/ITopRatedResult';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'TorresFlix';

    constructor(
        private readonly MovieService: movieService,
    ) { }

    ngOnInit(): void {
        this.ListGenres();
        this.ListTopRated();
    }

    lstGenres: IGenresResult = {genres: []};
    ListGenres() {
        this.MovieService.genres().subscribe(
            data => {
                this.lstGenres = data as IGenresResult;
            }
        );
    }

    lstTopRated: ITopRatedResult = {results: []}
    ListTopRated() {
        this.MovieService.topRated().subscribe(
            data => {
                this.lstTopRated = data as ITopRatedResult
                console.log(this.lstTopRated)
            }
        );
    }
}
