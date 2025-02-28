## 🧐 **구현 목록**

- [x] **상수 처리**
  - [x] 게임 상수
    - 3, 20, 'U', 'D', 0, 1, 'O', 'X', '|', 'R','Q'
  - [x] 예외처리용 문구들
  - [x] 게임진행용 문구들
- [x] **게임 시작 문구 출력**
- [x] **다리 길이 입력**
  - [x] 3이상 20이하의 숫자가 아니면 예외처리
    - [x] 숫자가 아닌경우, 음수인 경우, 3이상 20이하가 아닌 경우, 공백인 경우
    - [x] 예외처리 후 다시 입력부분으로 돌아옴
  - [x] 랜덤함수 생성 -> 다리 길이만큼
  - [x] 그 수만큼 U, D 체크
    - 0 인 경우 'D' , 1인 경우 'U'
- [x] **이동할 칸 선택**

  - [x] 'U', 'D'가 아닌 다른 값이 입력으로 들어오면 예외처리
    - [x] 숫자인경우, 공백인 경우, U/D가 아닌 다른 문자인 경우
    - [x] 예외처리 후 다시 입력부분으로 돌아옴
  - [x] 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시
  - [x] 위 칸 기록과 아래 칸 기록을 각각 배열로 기록
    - '|' 까지 함께 넣음
    - 빈 기록의 경우 ' '를 넣음
    - ex) O, |, X or , |,
  - [x] 출력
    - 배열 join(' ')
    - 앞뒤 [ ] 추가하여 출력
  - [x] 성공하면?!
    - [x] 최종게임결과 이동기록, 게임성공여부, 총 시도횟수 출력
          <br>

- [x] **게임 재시작/종료여부**
  - [x] R이나 Q가 아니면 예외처리
    - [x] 숫자인경우, 공백인 경우, R/Q가 아닌 다른 문자인 경우 
    - [x] 예외처리 후 다시 입력부분으로 돌아옴
  - [x] 총 시도횟수 +1 (초기시작횟수 1 + 재시작 횟수)
  - [x] 재시작의 경우 시도횟수 +1 하고 이동 입력으로 돌아감
  - [x] 종료의 경우
    - [x] 최종 게임 결과, 이동기록, 게임성공여부, 총 시도횟수 출력
    - [x] Q로 마무리되는 경우 시도횟수 - 1
    
- [x] **단위테스트 진행**
  - [x] Validation Test
    - [x] Exception test
    - [x] Restart or Success test
      - [x] Move done test
  - [x] Print Test
  - [x] Game Test
    - [x] Move Test
  

## 🧐 **테스트 결과**
  ![image](https://user-images.githubusercontent.com/96935132/202901638-c00c5fb2-ad3b-4d20-ac9e-c24048a0ad18.png)
