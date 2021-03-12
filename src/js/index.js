import slider from './utils/slider'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

import Swiper, {Navigation} from "swiper";


Swiper.use(Navigation)

slider({
    url: 'https://api.themoviedb.org/3/movie/popular',
    wrapper: '.slider__wrapper',
    slider: '.movie-slider'
})

slider({
    url: 'https://api.themoviedb.org/3/tv/popular',
    wrapper: '.slider__wrapper',
    slider: '.tv-slider'
})

window.addEventListener('DOMContentLoaded', event => {
    const chanelSlider = new Swiper('.channels-slider', {
        loop: true,
        navigation: {
            nextEl: '.slider__button'
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },

            768: {
                slidesPerView: 4
            },

            1024: {
                slidesPerView: 5
            }
        }
    })

    const actorsSlider = new Swiper('.actors-slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.slider__button'
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },

            768: {
                slidesPerView: 3
            },

            1024: {
                slidesPerView: 4
            },

            1200: {
                slidesPerView: 5
            }
        }
    })
})
