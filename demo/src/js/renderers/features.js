// Highway
import Highway from 'highway';

// Renderer
class Features extends Highway.Renderer {

  onEnter() {
    window.Console.clear();
    window.Console.log('<span>Load:</span> <b>Features</b>');
    window.Console.log('<span>Call:</span> <b>Features.onEnter()</b>');

    // Highlight.js
    const codes = document.querySelectorAll('pre code');

    for (let i = 0; i < codes.length; i++) {
      // Get code
      const code = codes[i];

      // Highlight code
      // eslint-disable-next-line
      hljs.highlightBlock(code);
    }
  }

  onLeave() {
    window.Console.log('<span>Call:</span> <b>Features.onLeave()</b>');
  }

  onEnterCompleted() {
    window.Console.log('<span>Call:</span> <b>Features.onEnterCompleted()</b>');
  }

  onLeaveCompleted() {
    window.Console.log('<span>Call:</span> <b>Features.onLeaveCompleted()</b>');
  }
}

export default Features;
