/* Descrizione:
Partendo dal markup dei file che vi passo nello zip, far funzionare lo slider.
Avrà sia le funzionalità di navigazione Prev-Next (con anche il cambio della thumb attiva) come fatto insieme questa mattina,
sia la possibilità di navigazione direttamente dalle thumb (ovvero se clicco su una thumb quella diventa active e vedo l’item corrispondente in grande).

Bonus (come sempre se e solo alla fine se il resto funziona e l’ho compreso):
- il mio slider funziona anche con i tasti freccia “su-giù” della tastiera (oltre che bottoni Prev-Next cioè le frecce in pagina);
- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

p.s.: l’uso delle frecce da tastiera può portare delle complicazioni legate  al focus dell’elemento a cui associate gli eventi tastiera */

const myApp = new Vue({
    el: "#app",
    data: {
        autoSlider: "",
        slideActive : 0,
        slides : [
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
        ]
    },
    created(){
        this.autoSlider = setInterval(this.next, 1000)
    },
    methods : {
        next(){
            this.slideActive ++;
            if (this.slideActive > this.slides.length - 1){
                this.slideActive = 0;
            }
        },
        prev(){
            this.slideActive --;
            if (this.slideActive < 0){
                this.slideActive = this.slides.length - 1;
            }
        },
        startAutoSlider(){
            this.autoSlider = setInterval(this.next, 1000)
        },
        stopAutoSlider(){
            clearInterval(this.autoSlider)
        }
    }
});