# four-plan-management-frontend

## 🖥️ 프로젝트 소개
- 연차 및 당직을 관리할 수 있는 캘린더 만들기 프로젝트
> Notion Link :  https://descriptive-balance-532.notion.site/e0bea490cb5f4c7c8efa8dfc718010a5

## ⏰ 진행 기간
- 23.03.20 - 23.04.03

## ⚙️ 사용 기술
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat&logo=React-Query&logoColor=white"/> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white"/>  

## 👤 맴버 구성

| 홍성민 | 장문정 | 이정재 | + 백엔드 |
| -----  |  ----- | ------ | ------- |
|<a href="https://github.com/dragong-sm">  <img width="70" height="70" src="https://avatars.githubusercontent.com/u/117700630?v=4" alt="Dragong"></a>  |<a href="https://github.com/gamangee"> <img width="70" height="70" src="https://user-images.githubusercontent.com/98649953/225550633-b6975a18-4b45-44d2-84be-4a7d95beb9ff.png"> </a>  |<a href="https://github.com/j-plum">  <img width="70" src ="https://user-images.githubusercontent.com/98649953/225549031-a4a69541-3845-4569-88ac-c7a5033a76a1.png"> </a> |<a href="https://github.com/moon-July5/Mini_Project_4"> <img width="70" src ="https://user-images.githubusercontent.com/117700630/229362021-be4aa445-048d-46fc-b7f5-dd0b27b86824.png"> </a> |


## 🎬 구현 기능


### ✅ 개인 정보 수정 ```일반사용자```

<img width="550" src="https://user-images.githubusercontent.com/117700630/229609091-a2204456-b5a6-4dc1-bb6a-225bf7613673.gif" />

#### 1. react-hook-form을 이용하여 개인 정보 수정 폼 생성 및 유효성 검사
- `react-hook-form`을 활용하여 개인 정보 수정 폼을 생성하고 유효성 검사를 구현했습니다.
- 폼 필드들에 각각 필요한 유효성 규칙을 설정하여 사용자의 입력값을 실시간으로 검증하고, 비밀번호와 확인용 비밀번호가 일치하는지 확인하며, 유효성 검사에 실패하면 에러 메시지를 표시하였습니다.

#### 2. 비밀번호 입력 시 가리기/보이기 기능 추가
- 세 개의 비밀번호 입력 필드에 대해 눈 아이콘 클릭 시 비밀번호를 가리거나 보이게 설정할 수 있도록 구현하였습니다.
- 클릭 시 해당 필드의 비밀번호 입력 타입을 'text' 또는 'password'로 변경하였습니다.
<br/>

### ✅ 개인 연차 관리 ```일반사용자```

<img width="550" src="https://user-images.githubusercontent.com/117700630/229609108-cfd6a95b-93ce-4a15-bb06-566898f7fc88.gif" />

#### 3. react-datepicker를 사용하여 연차일 표시
- `react-datepicker` 라이브러리를 사용하여 연차 등록일을 선택하는 기능을 구현했습니다.
- 사용자가 시작일과 종료일을 선택하면 해당 날짜를 한국 시간 형식으로 표시하고 연차 등록일 입력 필드에 표시합니다.
- `react-datepicker` css를 직접 수정하여 사용자가 보기 편한 달력으로 커스텀하였습니다.

#### 4. 연차 등록, 수정, 삭제 기능 구현
 - 사용자가 `react-datepicker`로 날짜를 직접 선택하여 연차를 등록, 수정, 삭제할 수 있습니다.

#### 5. 엑셀 다운로드 기능
- `react-csv` 라이브러리를 사용하여 서버에서 받아온 데이터를 CSV 파일로 다운로드할 수 있도록 구현하였습니다.
<br/>

## ✍🏻 회고

이번 프로젝트에서 `react-hook-form` 라이브러리를 처음 사용해보았는데, 폼 관리와 유효성 검사를 편리하게 처리할 수 있어서 매우 유용했습니다. 이전에는 직접 폼 상태를 관리하고 유효성 검사를 구현하는데 많은 시간과 코드가 필요했지만, 이번 라이브러리를 사용하면서 많은 부분을 단순화하고 개선할 수 있었습니다.

또한 `datepicker` 라이브러리를 사용하여 연차 등록 기능을 구현하는 과정에서 CSS 커스터마이징을 진행했습니다. 사용자가 보기 편한 디자인으로 달력을 수정하고, 원하는 날짜를 등록, 수정, 삭제할 수 있도록 기능을 구현하는 데에 성공했습니다.

이러한 경험을 통해 라이브러리 활용의 중요성을 더욱 깨달았습니다. 라이브러리를 사용하면서 개발 효율성을 높일 수 있지만 제대로 이해하고 올바르게 활용하지 않는다면 구현하는데 더 많은 시간과 노력을 투자해야 할 수 있기 때문입니다.

<br/>

## 🤔 고찰

> 1️⃣ Mock Server

백엔드와 협업하며, 구현 속도의 차이로 인해 API를 사용하는 기능 구현에 어려움을 겪었습니다.  
그러다 mock server를 알게 되어 처음에는 ```postman```을 이용하였으나, 요청 횟수 제한으로 인해 서버가 다운되었습니다.   
따라서, API 모킹 라이브러리인 ```mock service worker(msw)```를 사용하여 mock server를 구축하게 되었습니다.   
mock data 만으로는 ```post, put 등 다양한 처리```를 하기 힘들었는데, mock server의 사용으로 원활히 진행할 수 있었습니다.  
그러나 ```예외처리```에 많은 어려움을 겪었기 때문에 효율적인 예외처리 방식에 대한 공부가 필요할 것 같습니다.   

> 2️⃣ Animation

```라우터 간 화면 전환```과 ```컴포넌트 마운트```, ```배경``` 등에 애니메이션을 적용해보고 싶었습니다.  
```react-transition-group```, ```lottie```, ```Gsap``` 등을 이용하고자 하였으나, 시간적 여유가 조금 부족하였습니다.  
또한 저희가 비교적 최근에 업데이트 된 react-router-dom 사용방식을 적용해 참고자료를 찾기도 까다로웠습니다.  
공식문서를 따라가며 시도하였으나, 결국 적용하지 못한 채 마무리 하게 되어 아쉬움이 많이 남았습니다.

> 3️⃣ Type Script

이번 프로젝트를 진행하며 데이터를 받아오고 사용하는 과정에서 ```디버깅```에 굉장히 많은 시간을 소비하였습니다.  
동적언어인 ```JavaScript```에서는 별도로 타입 지정이 필요하지 않아 ```타입 에러``` 계속 발생하였기 때문이었습니다.  
따라서, 타입의 지정이 명확한 ```TypeScript```를 공부해 다음에는 타입 에러를 사전에 방지하고 ```개발 생산성을 향상```시키고자 합니다.  
