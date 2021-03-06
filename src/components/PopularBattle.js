import React, { Component } from 'react';
import Card from './Card';


class PopularBattle extends Component {
    constructor() {
        super()
    
        this.state = {
            movies: [],
            currentBattle: 0
        }
      }

componentDidMount(){
fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
.then(res => res.json())
.then(data => {
        this.setState({
                movies : data.results
        });
})
}

    render() {
        return (
            <div>
                <h1>PopularBattle</h1>
                <div className="d-flex flex-wrap">
                {
                    this.state.movies.map(function(movie){
                        return <Card 
                        original_title={movie.original_title}
                        release_date={movie.release_date}
                        overview={movie.overview}
                        poster_path={movie.poster_path}
                        key={movie.id}
                         />
                })
                }
                 </div>
            </div>
            
        );
    }
}

export default PopularBattle;