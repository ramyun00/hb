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
        <meta property="og:url" content="https://hbjh.herokuapp.com/" />
        <meta property="og:title" content="A birthday site for you" />
        <meta property="og:description" content="Hope you like it!" />
        <title>생🎂축</title>
      </Helmet>
      <div className="title__wrapper">
        <button className="button" onClick={fireConfetti}>
          <h1 class="title">생일 축하합니다!</h1>
        </button>

      </div>
      <div className="block1">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pF7ybJ-k0zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="from">잼스 올림</p>
      </div>
      <div className="block2">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Si4tehHIBbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="from">애나 올림</p>
      </div>
      <div className="block3">
        <p>보고 싶다!</p>
      </div>
      <div className="block4">
        <p className="message">우리가 형/오빠를 응원하고 있어!</p>
        <p className="message">조만간 한국에서 보자!</p>
      </div>
    </div>
  );
}

export default App;
