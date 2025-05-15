
JavaScript
HTML
import { animate } from 'animejs';

const [ $time, $count ] = utils.$('.value');

import { createTimer } from 'animejs';

const timer = createTimer(parameters);

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.innerHTML = self.currentTime,
  onLoop: self => $count.innerHTML = self._currentIteration
});