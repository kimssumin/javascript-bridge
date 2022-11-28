const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLELINE } = require('../utils/Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(getBridgeSize) {
    MissionUtils.Console.readLine(CONSOLELINE.BRIDGE_LENGTH_INPUT, getBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving(getMoving) {
    MissionUtils.Console.readLine(CONSOLELINE.MOVE_INPUT, getMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */

  readGameCommand(getGameCommand) {
    MissionUtils.Console.readLine(CONSOLELINE.RESTART_CHECK, getGameCommand);
  },
};

module.exports = InputView;
