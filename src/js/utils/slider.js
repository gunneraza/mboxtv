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
                        <img class="swiper-lazy" data-src="${'https://image.tmdb.org/t/p/w500/'+ movie.poster_path}" alt="${movie.original_title}">
                    </div>
                </div>
            `
        })

        new Swiper(slider, {
            loop: true,
            spaceBetween: 4,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                1500: {
                    slidesPerView: 6
                },
                1200: {
                    slidesPerView: 5
                },
                768: {
                    slidesPerView: 3
                },
                576: {
                    slidesPerView: 2
                }
            },
            navigation: {
                nextEl: '.slider__button'
            }
        })
    })
}

export default slider
