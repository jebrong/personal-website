export const projects = [
  {
    id: 1,
    title: "Noterra",
    site: "https://noterra-app.onrender.com/",
    git: "https://github.com/jebrong/mern-productivity-app",
    tags: [
      "mern",
      "react",
      "node",
      "express",
      "mongoDB",
      "cloudinary",
      "JWT",
      "javascript",
      "html",
      "css",
    ],
    intro: [
      <div className="proj-item-subtext" key="a">
        <span className="proj-item-subtext">
          Noterra is a application built with the
        </span>
        <span className=" proj-item-subtext colored-span ">MERN stack.</span>
        <span className="proj-item-subtext">
          It is a responsive website with authorization using
        </span>
        <span className=" proj-item-subtext colored-span ">
          JWT and cookies.
        </span>
      </div>,
    ],
    desc: [
      <div className="" key="b">
        <span className="">
          Noterra is an application built with the MERN stack. It is a
          responsive website with authorization using JWT and cookies. The
          application's database is built using MongoDB, which is accessed and
          managed through the back-end logic of NodeJS with Express. Users
          interact with the front-end React components of the app to easily
          view, create, modify, and remove data from the database. Also with the
          use of third-party React libraries such as Framer Motion, users
          interact with the interface with beautiful animations making it more
          appealing.
        </span>

        <span className="proj-item-subtext"></span>
      </div>,
    ],
    img: [
      "/images/noterra/1.png",
      "/images/noterra/2.png",
      "/images/noterra/3.png",
      "/images/noterra/4.png",
      "/images/noterra/5.png",
      "/images/noterra/6.png",
      "/images/noterra/7.png",
      "/images/noterra/8.png",
      "/images/noterra/9.png",
    ],
  },
  {
    id: 2,
    title: "Furnitur",
    site: "https://furnitur-store.netlify.app/",
    git: "https://github.com/jebrong/e-commerce-react-tailwind",
    tags: ["react", "tailwind", "redux", "auth0", "javascript", "html", "css"],
    intro: [
      <div className="proj-item-subtext" key="a">
        <span className="proj-item-subtext">
          Furnitur is a website built using
        </span>
        <span className=" proj-item-subtext colored-span ">
          React, Tailwind with Auth0
        </span>
        <span className="proj-item-subtext">
          and offers sorting functionalities to its users. Users can easily sort
          through a list of items.
        </span>
      </div>,
    ],
    desc: [
      <div className="" key="c">
        <span className="">
          Furnitur is a website built using React as the frontend framework and
          offers sorting functionalities to its users. Users can easily sort
          through a list of items based on various criteria such as price, or
          alphabetical order. The user interface is designed to be intuitive and
          user-friendly, making it easy for users to navigate and find what they
          need. The website also uses responsive design, ensuring that it works
          perfectly on any device, including desktops, mobile phones, and
          tablets. With its powerful sorting capabilities, this website makes it
          easy for users to find the information they need quickly and
          effortlessly.
        </span>
        <span className="proj-item-subtext"></span>
      </div>,
    ],
    img: [
      "/images/furnitur/1.png",
      "/images/furnitur/2.png",
      "/images/furnitur/3.png",
      "/images/furnitur/4.png",
      "/images/furnitur/5.png",
      "/images/furnitur/6.png",
      "/images/furnitur/7.png",
      "/images/furnitur/8.png",
      "/images/furnitur/9.png",
      "/images/furnitur/10.png",
      "/images/furnitur/11.png",
      "/images/furnitur/12.png",
    ],
  },
  {
    id: 3,
    title: "Arch.Studio",
    site: "https://archstud.netlify.app/",
    git: "https://github.com/jebrong/landing-website-arch-stud",
    tags: [
      "react",
      "typescript",
      "react-bootstrap",
      "bootstrap",
      "redux",
      "javascript",
      "html",
      "css",
    ],

    intro: [
      <div className="proj-item-subtext" key="a">
        <span className="proj-item-subtext">
          This landing website is created using React and employs simple
        </span>
        <span className=" proj-item-subtext colored-span ">TypeScript </span>
        <span className="proj-item-subtext">
          features to enhance the user experience. This website also uses{" "}
        </span>
        ,<span className=" proj-item-subtext colored-span "> Bootstrap </span>
        <span className="proj-item-subtext">
          to style and make it responsive.
        </span>
      </div>,
    ],
    desc: [
      <div className="" key="a">
        <span className="">
          This landing website is created using React and employs simple
          TypeScript features to enhance the user experience. The homepage
          features an eye-catching hero section that draws the user's attention
          and encourages them to continue exploring the site. The navigation
          menu is user-friendly and easily accessible, allowing the user to
          browse through different sections of the site seamlessly. The landing
          website also utilizes simple TypeScript features to add interactive
          elements to the site, such as form validation and dynamic content
          rendering. With a clean and modern design, this landing website
          provides an excellent introduction to its business or service while
          ensuring a smooth and enjoyable user experience.
        </span>
        <span className="proj-item-subtext"></span>
      </div>,
    ],
    img: [
      "/images/arch/1.png",
      "/images/arch/2.png",
      "/images/arch/3.png",
      "/images/arch/4.png",
      "/images/arch/5.png",
    ],
  },
];
