import slider from './utils/slider'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

import Swiper, { Navigation, Lazy } from 'swiper'
import lozad from 'lozad'


Swiper.use([Navigation, Lazy])

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

function basicSwiperOptions() {
    return {
        loop: true,
        navigation: {
            nextEl: '.slider__button'
        },
        on: {
            click: () => {
                observer.observe()
            }
        },
    }
}

window.addEventListener('DOMContentLoaded', event => {
    new Swiper('.channels-slider', {
        ...basicSwiperOptions(),
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

    new Swiper('.actors-slider', {
        ...basicSwiperOptions(),
        slidesPerView: 1,
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


const observer = lozad() // lazy loads elements with default selector as '.lozad'
observer.observe()
