import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});
const LOCAL_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', throttle(dataTimeVideo, 1000));

function dataTimeVideo() {
  player
    .getCurrentTime()
    .then(currentTime => {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(currentTime));
    })
    .catch(error => {
      console.log('Error getting the current time:', error);
    });
}

const saveTimeVideo = JSON.parse(localStorage.getItem(LOCAL_KEY));
if (saveTimeVideo) {
  player
    .setCurrentTime(saveTimeVideo)
    .then(seconds => {
      console.log(`The alarm position is set to ${seconds} seconds`);
    })
    .catch(error => {
      console.log('Error setting the current time:', error);
    });
}
