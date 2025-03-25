import bcrypt from "bcryptjs";


export function saltAndHashPassword(password: any) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)
  return hash;
}

export const slideInfo = [
  {
    image: '/hedgehog.png',
    imageAlt: "Hedgehog landing page",
    h2: 'Hedgehog Finances App',
    p: `Real time stock tracking app built with Next.js and Tailwind, using MongDB,Prisma ORM , Next-auth and cron-job.org. This project was developed with 4 other colleagues as part of our graduation project for Northcoders.com Javascript Bootcamp. `,
    p1: 'Check out the live app here:',
    link1URL: 'https://hedgehog-finances-nine.vercel.app/',
    link1Text: 'Hedgehog App',
    p2: 'See the Github repo here:',
    link2URL: 'https://github.com/patrickfoulger1/hedgehog-finances',
    link2Text: 'Hedgehog Repo'
  },
  {
    image: '/nnc-news.png',
    imageAlt: 'NNC News dashboard page',
    h2: 'NNC News',
    p: 'Articles platform app developed using NodeJS, ExpressJS for backend and React on the front end.',
    p1: 'See live version here:',
    link1URL: 'https://nnc-andi.netlify.app/',
    link1Text: 'NNC News',
    p2: 'See the Github repo here:',
    link2URL: "https://github.com/aeriallistique/nc-news-react?tab=readme-ov-file",
    link2Text: 'Github repo'
  },
  {
    image: '/pull-up-timer.png',
    imageAlt: 'pull-up timer on a pink background',
    h2: 'Pull-up Timer',
    p: 'A small app I developed to help me train and beat the World Record for Most Pull-ups in 24 hours.',
    p1: 'See live version here:',
    link1URL: 'https://wr-pull-up-timer.netlify.app/',
    link1Text: 'Pull-up Timer',
    p2: 'See the Github repo here:',
    link2URL: "https://github.com/aeriallistique/pullup-timer-counter",
    link2Text: 'Github repo'
  },
]

export const linkCards = [
  {
    href: '/world-time',
    hoverDescription: 'A simple app showing the time in various parts of the world, using js and plain css.',
    imageSrc: '/world-time.png',
    imageAlt: "world clock showing different times",
    projectTitle: 'World Time'
  },
  {
    href: '/text-effect',
    hoverDescription: 'A text effect project with cool animation using the html canvas element.',
    imageSrc: '/text-effect.png',
    imageAlt: "a text effect",
    projectTitle: 'Text Effect & Animation'
  },
  {
    href: '/tic-tac-toe',
    hoverDescription: 'The evergreen tic-tac-toe game with vanilla javascript and plain css.',
    imageSrc: '/tic-tac-toe.png',
    imageAlt: "tic-tac-toe game",
    projectTitle: 'Tic-tac-toe game'
  },
  {
    href: '/trivia-numbers',
    hoverDescription: 'A simple app that leverages the numbersapi free resource built with vanilla javascript and plain css.',
    imageSrc: '/trivia-numbers.png',
    imageAlt: "numbers and dates trivia",
    projectTitle: 'Numbers and dates trivia.'
  },
  {
    href: '/invisible-page',
    hoverDescription: 'Invisible page. Run your mouse or finger across the blank page to reveal it\'s contents.',
    imageSrc: '/invisible-page.png',
    imageAlt: "blank white page",
    projectTitle: 'Invisible landing page.'
  },
  {
    href: '/ping-pong',
    hoverDescription: 'Ping pong game build with the powerful canvas html element and vanilla javascript.',
    imageSrc: '/ping-pong.png',
    imageAlt: "ping-pong table",
    projectTitle: 'Ping pong game.'
  },
  {
    href: '/flappy-bird',
    hoverDescription: 'Flappy bird game built with vanilla javascript and canvas html element.',
    imageSrc: '/flappy-bird.png',
    imageAlt: "welcome screen for flappy bird game",
    projectTitle: 'Flappy bird game.'
  }
]

export const TimezoneButons = [
  {
    id: 'romania',
    class: 'rom bg-green-300',
    data: 2,
    color: 'bg-green-300',
    text: 'Bucharest'
  },
  {
    id: 'vegas',
    class: 'las bg-yellow-200',
    data: -8,
    color: 'bg-yellow-200',
    text: 'Las Vegas'
  },
  {
    id: 'munich',
    class: 'mun bg-blue-300',
    data: 1,
    color: 'bg-blue-300',
    text: 'Munich'
  },
  {
    id: 'istanbul',
    class: 'ist bg-amber-300',
    data: 3,
    color: 'bg-amber-300',
    text: 'Istanbul'
  },
  {
    id: 'dubai',
    class: 'dub bg-orange-300',
    data: 4,
    color: 'bg-orange-300',
    text: 'Dubai'
  },
  {
    id: 'macau',
    class: 'mac bg-purple-300',
    data: 8,
    color: 'bg-purple-300',
    text: 'Macau'
  },
  {
    id: 'brisbane',
    class: 'bri bg-pink-300',
    data: 10,
    color: 'bg-pink-300',
    text: 'Brisbane'
  },
  {
    id: 'current',
    class: 'cur bg-gray-300',
    data: 0,
    color: 'bg-gray-300',
    text: 'Local'
  }
]

export const MainClock = [
  {
    class: 'number number1',
    spanClass: 'one',
    spanText: 1
  },
  {
    class: 'number number2',
    spanClass: 'two',
    spanText: 2
  },
  {
    class: 'number number3',
    spanClass: 'three',
    spanText: 3
  },
  {
    class: 'number number4',
    spanClass: 'four',
    spanText: 4
  },
  {
    class: 'number number5',
    spanClass: 'five',
    spanText: 5
  },
  {
    class: 'number number6',
    spanClass: 'six',
    spanText: 6
  },
  {
    class: 'number number7',
    spanClass: 'seven',
    spanText: 7
  },
  {
    class: 'number number8',
    spanClass: 'eight',
    spanText: 8
  },
  {
    class: 'number number9',
    spanClass: 'nine',
    spanText: 9
  },
  {
    class: 'number number10',
    spanClass: 'ten',
    spanText: 10
  },
  {
    class: 'number number11',
    spanClass: 'eleven',
    spanText: 11
  },
  {
    class: 'number number12',
    spanClass: 'twelve',
    spanText: 12
  }
]