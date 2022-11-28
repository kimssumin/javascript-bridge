const controller = require('./Controller');

class App {
  play() {
    controller.startGame();
  }
}

module.exports = App;

const app = new App();
app.play();
