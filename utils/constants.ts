import { TbBrandThreejs } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMongoose,
  SiPostgresql,
  SiRedux,
  SiReactquery,
  SiPython
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { ISourceOptions } from "@tsparticles/engine";

export const NAV_LINKS = [
  { path: "#about", name: "About" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

export const BANNER_ADJECTIVES = [
  "Disciplined",
  "Self-Driven",
  "Adaptable",
  "Creative",
  "Detail-Oriented",
];

export const TECHNOLOGIES = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express", Icon: SiExpress },
  { name: "Mongoose", Icon: SiMongoose },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redux", Icon: SiRedux },
  { name: "Tanstack", Icon: SiReactquery },
  { name: "Three.js", Icon: TbBrandThreejs },
  { name: "Python", Icon: SiPython },
];

export const SELECTED_REPOS = ["Regal-hive", "TaskFlow-pro", "Movie-verse"];

export const PARTICLES_OPTIONS: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "#000",
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      opacity: 1,
      color: {
        value: "",
      },
    },
    enable: false,
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      attract: {
        distance: null,
        duration: null,
        easing: "ease-out-quad",
        factor: null,
        maxSpeed: 50,
        speed: null,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      particle: {
        replaceCursor: false,
        pauseOnStop: false,
        stopDelay: 0,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#4338ca",
      animation: {
        h: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
      },
    },
    effect: {
      close: true,
      fill: true,
      options: {},
      type: [],
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: false,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: {
        mode: "delete",
        value: 0,
      },
      value: 700,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.25,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: "circle",
    },
    size: {
      value: 1.3,
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          value: 3,
        },
        rate: {
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    tilt: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.9,
        opacity: 1,
        color: {
          value: "",
        },
      },
      particles: {
        enable: false,
        frequency: null,
        opacity: 1,
        color: {
          value: "",
        },
      },
    },
    wobble: {
      distance: 1.3,
      enable: false,
      speed: {
        angle: 1,
        move: 10,
      },
    },
    life: {
      count: 0,
      delay: {
        value: 0,
        sync: false,
      },
      duration: {
        value: 0,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        value: 45,
      },
      width: 1,
    },
    links: {
      blink: false,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    repulse: {
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
};
