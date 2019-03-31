# MY Blog

## General Comments
Before I started the project I checked the Vanilla css framework and realised there was a react version of it, so I tried to use it and so I went for a quick react app. I realised though, that I couldn't add custom classes to the ```<Card>``` component ( I wonder why is that so) and I just thought I would have to overwrite more css this way, so I just went to use just the sass version of it. There's a ```PostCardReact.js``` file that's not finished/polished just so you can see how I started implementing it. Interesting fact, that's one of the projects I've done for eBay, creating a React Component library based on their css framework Skin, but in my case I did try to make those components as flexible as possible, allowing the devs to add extra classes and override attributes.

I was going to use just fetch to get the data from the API (as all the examples I've seen) but then I decided to use axios just because I never used it before and apparently it gives you more extras such as being able to stop calls, etc and I thoght it might be quicker, but not really.

I had never really used the Wordpress API before! (and it's pretty cool they did it, actually), and I'm sure there's a better way of doing it than how I've done it but also I find it a bit weird, the way the implemented it. All categories and tags appear as just their id's, so I'm guessing in order to do this properly I would have to iterate through the other endpoints to map and match those id's to the categories, that's why I just hardcoded `Cloud and Server` and `Article`.

Of course using the css framework gives you many things for free (base font size, typography, etc...) so I only added a bit  of css for paddings and margins. As you can see I'm trying to follow BEM on the classes names. There's probably a lot of repetitions and it's definitely not scalable at all, if we need it to be easy for people to develop.
There are so many approaches though to this when you want scalable and maintainable: styled components, different stylesheets for components, using pre-processors like I do here or just using post-css, etc... I guess for each project, its needs.

Accessibility wise, I've just done the very basic, trying to have the most semantic layout possible. There's probably lots of things missing like hidden help for screen readers, aria-labels, role attributes, etc... and not sure the structure is the best for the card.

As an example, I'm using 2 links for the post link and that's not really my favourite thing to do as it's repeated content, or the fact that I added the image as a background image instead of using an image tag. I don't think the image add more semantic value to the post but I still think using the tag is a bit more accessible.

I haven't done any tests just because I wanted to keep it simple, to be honest, but we could do some unit testing for things like
checking if the data is passed, checking the rendering works, etc...bit hard to find meaningful tests for a dummy component like mine, but once
more developed and more functionality it will definitely benefit from more testing, plus maybe including it in an integration test, etc...


In terms of structure, again I went for something simple. I do personally like the atomic design way (smaller components, components made of components, pages, etc...)
I think, in general I've tried to be as quick as possible, and so very pragmatic.


## Step 1
Run ```npm install ``` to install all the dependencies.


## Step 2
Run ```npm run start ``` to run it in the development environemnt. This will open the the site Landing page in http://localhost:8080/

Or

Run ```npm run build ``` to run it in the production environment. This will generate the JS and CSS files inside `dist/js` and `dist/css` folders.After that you can open the `index.html` page under `./dist` folder in your browser.


