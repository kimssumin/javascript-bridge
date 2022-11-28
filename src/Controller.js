const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { CONSOLELINE, DEFAULTS } = require('./utils/Constants');
const validation = require('./utils/Validation');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class Controller {
  constructor() {
    this.answer = [];
    this.move_cnt = 0;
  }

  startGame() {
    MissionUtils.Console.print(CONSOLELINE.START_GAME);
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((input) => {
      MissionUtils.Console.print('');
      this.validBridgeSize(input);
    });
  }

  validBridgeSize(input) {
    try {
      validation.checkBridgeSize(input);
    } catch (err) {
      return this.inputBridgeSize();
    }
    this.getBridgeAnswer(input);
  }

  getBridgeAnswer(input) {
    const bridgeAnswer = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    this.answer = bridgeAnswer;
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving((upOrdown) => {
      this.validBridgeAnswer(upOrdown);
    });
  }
  // this.readMoving(bridgeAnswer, 0);
  validBridgeAnswer(upOrdown) {
    try {
      validation.checkCanMove(upOrdown);
    } catch (err) {
      return this.inputMoving();
    }
    this.printAndValidCheck(this.answer, upOrdown);
  }

  printAndValidCheck(answer, upOrdown) {
    const gameLog = OutputView.printMap(answer, upOrdown);
    this.move_cnt += 1;
    this.checkNeedtoStop(gameLog);
  }

  checkNeedtoStop(gameLog) {
    if (validation.isRestartRequired(this.move_cnt, gameLog, this.answer)) {
      this.inputGameCommand(gameLog);
    }
    if (validation.isSuccess(this.move_cnt, gameLog, this.answer)) {
      OutputView.printResult(gameLog, CONSOLELINE.SUCCESS_RESULT, false);
    } else {
      this.inputMoving();
    }
  }

  inputGameCommand(gameLog) {
    InputView.readGameCommand((restart) => {
      this.validCommand(restart, gameLog);
    });
  }

  validCommand(restart, gameLog) {
    try {
      validation.checkRestartOrNot(restart);
    } catch (err) {
      return this.inputGameCommand();
    }
    this.restartOrkeepGoing(restart, gameLog);
  }

  restartOrkeepGoing(restart, gameLog) {
    if (restart === DEFAULTS.RESTART) {
      this.inputMoving();
      this.move_cnt = 0;
    } else {
      OutputView.printResult(gameLog, CONSOLELINE.FAIL_RESULT, true);
    }
  }
}

const controller = new Controller();
module.exports = controller;
