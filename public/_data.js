module.exports = {
  _version: require('../package.json').version,
  locations: [
    {
      type: 'Venues',
      location: [
        {
          name: 'Duke of Yorks',
          detail: 'Conference',
          url: 'http://www.picturehouses.co.uk/cinema/Duke_Of_Yorks/',
        },
        {
          name: 'Lighthouse',
          detail: 'Workshops',
          url: 'http://goo.gl/maps/GTYX',
        },
        {
          name: 'The Fountainhead',
          detail: 'Pre Party',
          url: 'http://goo.gl/maps/6FH8',
        },
        {
          name: 'OhSo Social',
          detail: 'After Party',
          url: 'https://goo.gl/maps/qzmhKyku9CD2',
        },
      ],
    },
    {
      type: 'Hotels',
      location: [
        {
          name: "Jury's Inn",
          url: 'https://www.jurysinns.com/hotels/brighton',
          detail: 'from £71',
          extra: 'next to Train station & close to venue',
        },
        {
          name: 'Ibis',
          url:
            'http://www.ibis.com/gb/hotel-6444-ibis-brighton-city-centre-station/index.shtml',
          extra: 'directly outside the front of the station',
          detail: 'from £75',
        },
        {
          name: 'Travellodge',
          url: 'http://www.travelodge.co.uk/hotels/18/Brighton-hotel',
          detail: 'from £28',
        },
        {
          name: 'My Hotel',
          url: 'http://www.myhotels.com/my-hotel-brighton/index.html',
          detail: 'from £90',
        },
        {
          name: 'Old Ship Hotel',
          url:
            'http://www.thehotelcollection.co.uk/hotels/old-ship-brighton-hotel/',
          detail: 'from £82',
          extra: 'close to after party venue',
        },
      ],
    },
    {
      type: 'Food/Drink',
      location: [
        {
          name: "Bardsley's",
          detail: "fish 'n chips",
          url: 'http://www.bardsleys-fishandchips.co.uk/map',
        },
        {
          name: 'The Joker',
          detail: 'wings & salt beef',
          url: 'http://goo.gl/VNUwb',
        },
        {
          name: 'Green Kitchen',
          detail: 'vegan food',
          url: 'http://www.greenkitchenbrighton.com/',
        },
        {
          name: 'Fatto O Mano',
          url: 'http://www.fattoamanopizza.com/locations/',
          detail: 'pizza',
        },
        {
          name: 'Cafe Plenty',
          detail: 'very near to venue',
          url: 'http://www.cafeplentybrighton.co.uk/',
        },
      ],
    },
  ],
  sponsors: {
    '1st': {
      title: 'platinum',
      list: [
        {
          name: 'Google Chrome',
          url: 'https://developers.google.com/live/chrome/',
          img: 'google.svg',
        },
        {
          name: 'Samsung Internet',
          url: 'https://samsunginter.net',
          img: 'samsung.svg',
        },
      ],
    },
    '2nd': {
      title: 'gold',
      list: [
        {
          name: 'Mozilla',
          url: 'http://mozilla.com',
          img: 'mozilla.png',
        },
      ],
    },
    '3rd': {
      title: 'day',
      list: [
        {
          name: 'Brandwatch',
          url: 'https://www.brandwatch.com/careers',
          img: 'brandwatch.png',
        },
        {
          name: 'Twilio',
          url: 'https://www.twilio.com/',
          img: 'twilio.svg',
        },
        {
          name: 'Fastly',
          url: 'https://www.fastly.com/',
          img: 'fastly.svg',
        },
      ],
    },
  },
  sessions: {
    sessions: [
      {
        break: true,
        title: 'Registration',
        duration: 40,
      },
      {
        break: true,
        title: 'Opening remarks',
        duration: 10,
      },
      {
        duration: 40,
        title: 'Rethinking the Web Platform',
        speaker: {
          name: 'James Kyle',
          twitter: 'thejameskyle',
          photo: 'james.gif',
        },
        description:
          'Evolving the web to improve education, accessibility, performance, productivity, and design.',
        bio:
          'I dropped out of high school at 16, made email templates for a marketing internship, then started selling WordPress installs for $50',
        links: [],
        slides: '',
        audio: '',
        video: '',
      },

      {
        duration: 40,
        title:
          "If you're going out of San Francisco, be sure to wear Web Standards in your hair",
        speaker: {
          name: 'Bruce Lawson',
          twitter: 'brucel',
          photo: 'bruce.gif',
        },
        description:
          "We do like our Holy Wars, don't we?: tables vs CSS? Responsive vs mdot? React vs Angular? CSS or CSS-in-JS? Let's look at the real issue: getting the free and open web to the other 4 billion people.",
        bio:
          '1981, my Physics teacher made up a UK101 kit in a tiny computer room which I could use instead of Physical Exercise. So I programmed games.',
        links: [],
        slides: '',
        audio: '',
        video: '',
      },

      {
        break: true,
        title: 'Coffee break (30 mins)',
        duration: 30,
        svg: 'coffee',
      },

      {
        duration: 40,
        title: 'How the web sausage gets made',
        speaker: {
          name: 'Monica Dinculescu',
          twitter: 'notwaldorf',
          photo: 'monica.gif',
        },
        description:
          "They say there's two things you never want to see made: sausages and web standards. Sooooo I'm going to tell you about both! How do browsers work? What are web components even? Everyone's using them and maybe you should too! 🆒🐱🎉",
        bio:
          "I found out my mum always won at the QBasic Gorrilas game bc she changed the other player's code to randomly miss. Then she taught me how.",
        links: [],
        slides: '',
        audio: '',
        video: '',
      },

      {
        duration: 40,
        title: 'Lessons learned sciencing the web',
        description:
          'Discover what slows down modern apps on mobile and how to fix this.',
        speaker: {
          name: 'Addy Osmani',
          twitter: 'addyosmani',
          photo: 'addy.gif',
        },
        bio:
          'At 16, wrote a web browser in C++ to understand how HTML, CSS and JavaScript worked…15 years later, still learning',
        links: [],
        slides: '',
        audio: '',
        video: '',
      },

      {
        break: true,
        duration: 90,
        title: 'Lunch break (90 mins)',
        svg: 'lunch',
      },

      {
        duration: 40,
        title: "My Password Doesn't Work!",
        description:
          "Security is important, but it doesn't have to be complex. Let's dispel myths and assuage fear associated with those linchpin of our online lives – passwords – and build toward a more secure and more usable web.",
        speaker: {
          name: 'Blaine Cook',
          twitter: 'blaine',
          photo: 'blaine.gif',
        },
        bio:
          'A glowing green screen, still fascinating despite its sole output: "SYNTAX ERROR"; Years later, the moment I used ATA and ATDT to talk to a friend.',
        links: [],
        slides: '',
        audio: '',
        video: '',
      },
      {
        duration: 40,
        title: "Memory: Don't Forget to Take Out the Garbage",
        description:
          "JavaScript does a remarkable job of hiding memory management from us. What's going on behind the scenes?",
        speaker: {
          name: 'Katie Fenn',
          twitter: 'katie_fenn',
          photo: 'katie.gif',
        },
        bio:
          'In 2001 I started making post signatures for a Final Fantasy forum, and then started coding new features for the forum itself.',
        links: [],
        slides: '',
        audio: '',
        video: '',
      },

      {
        break: true,
        duration: 30,
        title: 'Cake break (30 mins)',
        svg: 'coffee',
      },

      {
        duration: 40,
        title: 'Abstract art in a time of minification',
        description:
          'aesthetic is a major component of any medium for art, including the web, but one thing that has been bothering me lately is: what happened to "view source"? are we destroying aesthetic for the sake of tooling and in spite of access to our industry????¿¿¿¿',
        speaker: {
          name: 'Jenn Schiffer',
          twitter: 'jennschiffer',
          photo: 'jenn.gif',
        },
        bio:
          'my kid laptop had a hangman game written in BASIC and i accessed the source and rigged it to cheat against my half sister!',
        links: [],
        slides: '',
        audio: '',
        video: '',
      },

      {
        duration: 40,
        title: 'Alpha, Beta, Gamer: Dev Mode',
        description:
          'A live performance of video games and stand up comedy from comedian and coder, including pre prepared web games to play and even creating a video game with the audience on stage in only 10 minutes.',
        speaker: {
          name: 'Joe Hart',
          twitter: 'joehart',
          photo: 'joe.gif',
        },
        bio:
          "Parents got me Lego Mindstorms for Xmas, used it and got frustrated that the software didn't let me do exactly what I wanted. Thus here I am",
        links: [],
        slides: '',
        audio: '',
        video: '',
      },
      {
        break: true,
        duration: 20,
        title: 'Closing remarks',
      },
      {
        break: true,
        start: '18:15',
        end: 'Late',
        duration: 90,
        afterparty: true,
        title: 'After Party',
        svg: 'high-five',
      },
    ],
  },
  workshops: [
    {
      title: 'Angular: Fast & Furious (v5+)',
      slug: 'angular',
      ticket: {
        url:
          'https://www.tickettailor.com/checkout/view-event/id/102994/chk/31b0/',
        price: '449',
      },

      details: {
        date: '8 November 2017',
        time: '09:00 — 17:00',
        venue: 'Lighthouse, Brighton',
      },

      speaker: {
        name: 'Gerard Sans',
        twitter: 'gerardsans',
        photo: 'gerard.jpg',
      },

      topics: [
        {
          title: 'New features',
          description: "What's new in Angular v5.",
        },
        {
          title: 'Low level APIs',
          description: 'Angular DIY. Build it from scratch.',
        },
        {
          title: 'RxJS next level',
          description: 'Using High Order Observables.',
        },
        {
          title: 'Modern State Management',
          description: 'Super charge your architecture using ngrx.',
        },
        {
          title: 'Advanced Router',
          description: "Use the router in ways you didn't know were possible.",
        },
        {
          title: 'Modern Server Side Rendering',
          description:
            'Learn all the intricacies of the new platform-server bundle.',
        },
        {
          title: 'Real-time GraphQL',
          description: 'Learn everything about GraphQL Subscriptions.',
        },
        {
          title: 'Introducing Motion',
          description:
            'Level up your animations introducing UX Motion principles.',
        },
      ],
      description:
        'Angular is a robust platform and many products relay on its foundation. Teams have now learnt about best practices and tooling.',
      extendedDescription:
        'In this workshop you will learn about the less known areas of Angular so you can take your skills and your team to the next level!',
    },
    {
      title: 'Modern Universal React dev with Next.js',
      slug: 'next',
      ticket: {
        url:
          'https://www.tickettailor.com/checkout/view-event/id/102994/chk/31b0/',
        price: '449',
      },

      details: {
        date: '8 November 2017',
        time: '09:00 — 17:00',
        venue: 'Lighthouse, Brighton',
      },

      speaker: {
        name: 'Remy Sharp',
        twitter: 'rem',
        photo: 'remy.jpg',
      },

      topics: [
        {
          title: 'Up and running: application architecture',
          description:
            'Create your first fully SSR Next.js application. Compose layouts and head elements.',
        },
        {
          title: 'Extending: custom routing, parameters',
          description:
            'Clean and custom URLs, mapping params, environment variables, and more.',
        },
        {
          title: 'Connecting: Database backed pages',
          description:
            'Going beyond the code: dynamic data and securing pages.',
        },
        {
          title: 'Testing, building & deploying',
          description:
            'Tests & fixtures with Jest, gotchas, and deploy strategies.',
        },
      ],
      description:
        'Next.js is a framework for building React applications with automatic server side rendering support, which results in improved performance over "vanilla" React. The framework also offers zero configuration, automatic code splitting and prefech out of the box.',
      extendedDescription:
        "<p>You will be expected to be comfortable with JavaScript, and be familiar with, or at least comfortable with the JSX concepts (putting XML inside your JavaScript). We&#39;ll also be using Node 8 as we&#39;ll make use of async/await.</p> <p><strong>Outcomes:</strong></p> <ul> <li style='list-style-type: square; margin-left: 20px'>How to create and configure next Next based projects</li> <li style='list-style-type: square; margin-left: 20px'>Experience with latest JavaScript features, including async/await</li> <li style='list-style-type: square; margin-left: 20px'>Exposure to some gotchas</li> <li style='list-style-type: square; margin-left: 20px'>How to handle special cases around server/client side only and using environment variables</li> <li style='list-style-type: square; margin-left: 20px'>Custom routing and parameter handling</li> </ul> ",
    },
  ],
  quotes: [
    {
      text: '#ffconf was absolutely brilliant. Thanks all!',
      author: 'Anna Shipman, 2015 Speaker & Lead Architect at GOV.UK',
      url: 'https://twitter.com/annashipman/status/662689809450840064',
      photo: 'anna-shipman.jpg',
    },
    {
      text:
        'Last Friday was my first #ffconf - was blown away by the quality and variety of talks. Fantastic achievement from the conf team',
      author: 'James Da Costa, ffconf 2015 attendee',
      url: 'https://twitter.com/jamesdacosta/status/663827059010101248',
      photo: 'james-da-costa.jpg',
    },
    {
      text:
        'As I head home, thank you, again to @rem, @julieanne and the volunteers for @ffconf. Incredible event and I felt incredibly taken care of.',
      author: 'John K Paul, 2015 Speaker & CTO of inRhythm',
      url: 'https://twitter.com/johnkpaul/status/663265398784180224',
      photo: 'john-k-paul.jpg',
    },
    {
      text:
        'Back home & wondering where to start with all the inspiration I got whilst at #ffconf. Thank you @julieanne & @rem for an excellent day.',
      author: 'Hannah Wolfe, 2014 Speaker and Ghost CTO & co-founder',
      url: 'https://twitter.com/ErisDS/status/531102677976252416',
      photo: 'hannah-wolfe.jpg',
    },
    {
      text:
        'Fantastic set of speakers, interesting and exciting topics, great day @ffconf. Thanks and congratulations to @rem and @julieanne',
      author: 'Phil Nash, developer evangelist for Twilio',
      url: 'https://twitter.com/philnash/status/530777197607682048',
      photo: 'phil-nash.jpg',
    },
    {
      text:
        '#ffconf is a wrap: what a truly inspirational event with so many interesting topics. Glad that I finally was able to attend.',
      author: 'Robin Mehner, 2015 speaker',
      url: 'https://twitter.com/rmehner/status/662700722107084800',
      photo: 'robin-mehner.jpg',
    },
    {
      text:
        'Yes! #ffconf was amazing. Had an inspiring day listening to awesome people, talking about super interesting stuff. Almost too good.',
      author: 'David McGeorge, five time attendee',
      url: 'https://twitter.com/davymacca/status/530785298167656449',
      photo: 'david-mcgeorge.jpg',
    },
    {
      text:
        'Must be the most comfy seats of any conference I attended - so glad I finally made it - #ffconf',
      author: 'Prisca Schmarsow, 2013 attendee',
      url: 'https://twitter.com/prisca_eyedea/status/398744015539273728',
      photo: 'prisca-schmarsow.jpg',
    },
    {
      text:
        "I can pinpoint ffconf talks, which have changed the way I approach web development and the tools I use. That's why every year it has an unmovable place in my calendar.",
      author: 'Glenn Jones, co-founder of Madgex & 2011 speaker',
      url: 'https://twitter.com/glennjones',
      photo: 'glenn-jones.jpg',
    },
    {
      text:
        'Practical, inspiring & progressive - its rare a tech conference delivers on all of them but @ffconf pulls it off. Quality gig 👌',
      author: 'James Wragg - attendee of every ffconf',
      url: 'https://twitter.com/jameswragg/status/752449764009078784',
      photo: 'james-wragg.jpg',
    },
    {
      text: 'I had SUCH a great day being geeky at #ffconf. …Best day!',
      author: 'Aisling Brock, 2013 attendee',
      url: 'https://twitter.com/aislingbrock/status/662734331987685376',
      photo: 'aisling-brock.jpg',
    },
    {
      text:
        'Not sure how many juniors went to #ffconf but I feel honoured to be one of them. Great conference & superb inspiring talks! Bring it on ffconf 2016',
      author: 'Natalia Waniczek, 2016 attendee',
      url: 'https://twitter.com/natkuTala/status/662790424533336065',
      photo: 'natalia-waniczek.jpg',
    },
    {
      text: 'Really impressed with the diversity of speakers at #ffconf 👌',
      author: 'Heather Lauren, 2016 attendee',
      url: 'https://twitter.com/heatherlauren/status/662607875731271680',
      photo: 'heather-lauren.jpg',
    },
  ],
};
