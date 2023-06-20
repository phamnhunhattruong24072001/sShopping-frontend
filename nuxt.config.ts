// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head : {
      title: "EShopping",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        { rel: "icon", href: "/assets/img/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" },
        { rel: "stylesheet", href: "/assets/lib/owlcarousel/assets/owl.carousel.min.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
      ],
      script: [
        { src: "https://code.jquery.com/jquery-3.4.1.min.js"  },
        { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"  },
        { src: "/assets/lib/easing/easing.min.js"  },
        { src: "/assets/lib/owlcarousel/owl.carousel.min.js"  },
        // { src: "mail/jqBootstrapValidation.min.js"  },
        { src: "/assets/js/main.js"  },
      ],
    }
  }
})
