const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLELINE } = require('./utils/Constants');

const InputView = require('./view/InputView');

class Controller {
  constructor() {}

  startGame() {
    MissionUtils.Console.print(CONSOLELINE.START_GAME);
    InputView.readBridgeSize();
  }
}

const controller = new Controller();
module.exports = controller;
