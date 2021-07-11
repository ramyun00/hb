import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  function fireConfetti() {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

  fireConfetti();
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>생🎂축</title>
      </Helmet>
      <div className="title__wrapper">
        <h1 class="title">생일 축하합니다!</h1>
      </div>
      <div className="block1">
        <p>보고 싶어!</p>
      </div>
      <div className="block2">
        <p>한국에서 보자!</p>
      </div>
      <div className="block3">
        <p>오빠 응원하고 있어!</p>
      </div>
      <div className="block4">
        <p>!</p>
      </div>
    </div>
  );
}

export default App;
