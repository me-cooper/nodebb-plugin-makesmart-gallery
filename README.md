# nodebb-plugin-makesmart-gallery
### How to use

Preview: https://www.youtube.com/watch?v=CakfERMz4bY

Just add `[[gallery]]` on top of your image-collection, followed by the images which should be displayed in the slider:

```console
[[gallery]]
![fun](https://media.tenor.com/images/11fc14bb1b8dc3efbf7aa496432601d4/tenor.gif)
![dance](https://media.tenor.com/images/82f7d090429ddc3e5ae33d7244d369c2/tenor.gif)
![happy](https://media.tenor.com/images/a12ac6302bccc01652b7f4b33a034777/tenor.gif)
```

This simple syntax creates a slim and nice image-gallery:


---

It uses [Swiper](https://swiperjs.com/) as slider. You can look trough the examples to customize your slider if you want. To change behaviour edit `static/lib/main.js`.

```javascript
require(["swiper"], function (Swiper) {
  var swiper = new Swiper(".makesmart-image-gallery", {
    autoHeight: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
```

---

So far I dont know, how to use npm so this plugin is currently only available via GitHub.

1. Clone the repo with 
`git clone https://github.com/me-cooper/nodebb-plugin-makesmart-gallery`
2. Open the folder via console and link the folder
`sudo npm link`
3. Go into your nodebb installation folder and type 
`npm link nodebb-plugin-makesmart-gallery`
4. Activate the plugin via cli `./nodebb activate makesmart-gallery` or via ACP


It's my first plugin but I hope you enjoy it. :)

---

*To-Do:*

- Display Image-Slider in the composer preview as well

