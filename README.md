# Motorway UI Test

## Overview
I decided not to install any packages in this task. To run, the commands are the same:

* `npm install`
* `npm run serve`
* `npm run start`

Please test on the lates version of Chrome on Mac.
  
## UI
In this project I decided to create some context between the profile images and the cars by creating cards, similar to social media posts. I used grayscale and contrast filters to manipulate the image appearance and scaled up the images of the cars on hover. I also used responsive units throughout and flexbox for fluid positioning. I also included form labels and `ARIA` atributes to improve accessibility. 

## Performance
To speed up the performance, I removed the setTimeOut delay on the get request which was set to a random number between 500 and 1500 milliseconds.

## Form + Client Side Validation
I added a couple checks on the form fields:

* Empty fields
* Invalid email format
* Max date on the date of birth date picker

I also added some defaults to fields such as the colour picker, which has been set to black, or more accurately: `#000000`. I also set the default salary range to 30000 to represent £30K.

I hope you enjoy the UI / UX.
