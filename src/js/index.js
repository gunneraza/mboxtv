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
        slidesPerView: 5,

    })
})
