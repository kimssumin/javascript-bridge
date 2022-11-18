const {DEFAULTS, ERRORLINE} = require('./Constants');
const MissionUtils = require('@woowacourse/mission-utils');
const bridgeGame = require('../model/BridgeGame');
const { getLastValue } = require('./Utils');
const onlyNmbr = /^[0-9]+$/;

class Validation{
  checkBridgeSize(input){
    if (input < DEFAULTS.START_RANGE_cnt || input > DEFAULTS.END_RANGE_cnt || !(onlyNmbr).test(input)){
      MissionUtils.Console.print(ERRORLINE.BRIDGE_LENGTH_ERROR);
      throw new Error(ERRORLINE.BRIDGE_LENGTH_ERROR);
    }
  }

  checkCanMove(input){
    if (input !== DEFAULTS.UP && input !== DEFAULTS.DOWN){
      MissionUtils.Console.print(ERRORLINE.MOVE_ERROR);
      throw new Error(ERRORLINE.MOVE_ERROR);
    }
  }

  checkRestartOrNot(input){
    if (input !== DEFAULTS.RESTART && input !== DEFAULTS.QUIT){
      MissionUtils.Console.print(ERRORLINE.RESTART_ERROR);
      throw new Error(ERRORLINE.RESTART_ERROR);
    }
  }

  isMovedDone(cnt_move, answer){
    if(cnt_move == answer.length){
      return true;
    }
    return false;
  }

  isRestartRequired(cnt_move, gameLog, answer){
    if (this.isMovedDone(cnt_move, answer) && getLastValue(gameLog, 0) !== DEFAULTS.CAN_MOVE && getLastValue(gameLog, 1) !== DEFAULTS.CAN_MOVE){
      bridgeGame.retry();
      return true;
    }
    if (getLastValue(gameLog, 0) === DEFAULTS.CANT_MOVE || getLastValue(gameLog, 1) === DEFAULTS.CANT_MOVE){
      bridgeGame.retry();
      return true;
    }
    return false;
  }

  isSuccess(cnt_move, gameLog, answer){
    if (this.isMovedDone(cnt_move, answer) && getLastValue(gameLog, 0) !== DEFAULTS.CANT_MOVE && getLastValue(gameLog, 1) !== DEFAULTS.CANT_MOVE){
      return true;
    }
    return false;
  }
}

const validation = new Validation();
module.exports = validation;