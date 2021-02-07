import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import axios from 'axios'

function slider(params) {
    let slider = document.querySelector(params.slider)
    let movieList = slider.querySelector(params.wrapper)
    axios.get(params.url, {
        params: {
            api_key: 'f927b11b076bee22e44f6342e850d0a5',
            language: 'en-US',
            page: 1
        }
    }).then(response => {
        let movies = response.data.results
        movies.forEach(movie => {
            movieList.innerHTML += `
                <div class="swiper-slide slider__slide">
                    <div class="slider__item">
                        <img src="${'https://image.tmdb.org/t/p/w500/'+ movie.poster_path}" alt="${movie.original_title}">
                    </div>
                </div>
            `
        })

        new Swiper(slider, {
            loop: true,
            slidesPerView: 6,
            spaceBetween: 4,
            navigation: {
                nextEl: '.slider__button'
            }
        })
    })
}

export default slider
