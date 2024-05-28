const app = Vue.createApp({
  data() {
    return {
        url: 'http://www.thenetninja.co.uk',
      showBooks: true,
    //   title: "The Final Empire",
    //   author: "Brandon Sanderson",
    //   age: 45,
    //   x: 0,
    //   y: 0
    books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/jpeg1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/jpeg2.jpg', isFav: false},
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/jpeg3.jpg', isFav: true},
    ]
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data)
      }
    },
    handleMouseMove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    }
  },
});

app.mount("#app");
