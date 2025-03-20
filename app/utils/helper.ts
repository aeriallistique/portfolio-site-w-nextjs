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