const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const app = new Vue({
    el: '#app',
    data: {
        slides,
        slideIndex: 0,
        hover: false,
    },
    methods: {
        prevImage() {
            if (this.slideIndex > 0) {
                this.slideIndex--;
            } else {
                this.slideIndex = slides.length - 1;
            }
        },

        nextImage() {
            if (this.slideIndex < this.slides.length - 1) {
                this.slideIndex++;
            } else {
                this.slideIndex = 0;
            }
        },

        activeCheck(item) {
            const check = this.slides.findIndex(
                (slide) => slide.title === item.title);
            if (check === this.slideIndex) {
                return "thumb active";
            } else {
                return "thumb";
            }
        },

        autoPlay() {

            let clock = setInterval(() => {

                if (this.slideIndex >= 0 && this.slideIndex < slides.length - 1) {
                    this.slideIndex++;

                } else {
                    this.slideIndex = 0;
                }
                clearInterval(clock);
            }, 1000);
        },

        stopAutoPlay() {

        },

        showImage(slide) {
            for (let i = 0; i < this.slides.length; i++) {
                if (this.slides[i].title === slide.title) {
                    let photo = i;
                    console.log(photo);
                    this.slideIndex = photo;
                }
            }
        }
    }
});

