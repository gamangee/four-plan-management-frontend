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


## ✍🏻 역할

> **공통**
> - ```Management```
> - CSS 구성
> - Rest API 호출
> - useQuery 사용
> - modal 기능 구성

> **홍성민**
> - ```Login``` ```AdminLogin``` ```SignUp```
> - 로그인 / 회원가입 폼 생성 및 유효성 검사 ( react-hook-form & react-cookie )
> - 관리자 페이지 권한 관리 Component 담당
> - mock 서버 생성 ( mock service worker & postman )

> **장문정**
> - ```UserInfo``` ```UserAnnual```
> - 개인 정보 수정 폼 생성 및 유효성 검사 ( react-hook-form )
> - 연차 등록 / 수정 / 삭제 ( react-datepicker )
> - 관리자 페이지 연차 / 당직 Component 담당

> **이정재**
> - ```Main``` ```SideBar & DashBoard``` ```TodayDuty```
> - 라우팅 설정 & 로그아웃 기능 생성
> - 메인페이지 스케쥴 필터링 / 검색 ( FullCalender )
> - 관리자 페이지 유저 검색 Component 담당

## 📌 주요 기능

- 관리자와 사용자의 기능 및 라우팅 분리

>     ✔️ 공통
>       - 오늘의 당직 및 전체 스케쥴 확인
>       - 스케쥴을 전체, 부서별, 유저별로 필터링 가능
>       - SideBar 에서 자신의 정보 확인 & 원하는 페이지 선택 및 이동
>
>     ✔️ 관리자
>         - 회원가입이 필요없으며, 이미 등록되어 있는 정보로 로그인
>         - 사용자를 검색하여 관련 정보 확인
>         - 해당 사용자의 연차 / 당직을 확인하고 수정 및 삭제
>         - 해당 사용자의 권한을 일반유저 or 관리자로 변경
>
>     ✔️ 일반사용자
>         - 인사팀(DB)에 데이터가 등록되어 있는 회사원만 회원가입 & 로그인 가능
>         - 자신의 개인 정보 (이메일, 비밀번호) 수정
>         - 연차를 확인하고 원하는 날짜를 선택하여 연차 등록, 수정, 삭제


## 🎬 구현 영상

✅로그인

<img width="350" src="https://user-images.githubusercontent.com/117700630/229610399-2683a485-76ae-4f82-a1fb-e3f9ed60dca6.gif" />

✅ 회원가입  ```일반사용자```

<img width="350" src="https://user-images.githubusercontent.com/117700630/229685058-4b3d6b16-0c8e-4b01-82b3-ced101100bc4.gif" />

✅ 전체 스케쥴

 <img width="550" src="https://user-images.githubusercontent.com/117700630/229467851-dcc223b7-2303-435c-9fa3-6e763597cd1e.gif" />
 
✅ 개인 정보 수정 ```일반사용자```

<img width="550" src="https://user-images.githubusercontent.com/117700630/229609091-a2204456-b5a6-4dc1-bb6a-225bf7613673.gif" />  

✅ 개인 연차 관리 ```일반사용자```

<img width="550" src="https://user-images.githubusercontent.com/117700630/229609108-cfd6a95b-93ce-4a15-bb06-566898f7fc88.gif" />

✅ 사용자의 연차 / 당직 / 권한 관리 ```관리자```

<img width="550" src="https://user-images.githubusercontent.com/117700630/229609562-6fb5e20c-3be7-44dc-8e5c-9780bc10ef22.gif" />

✅ navigate & 로그아웃

 <img width="550" src="https://user-images.githubusercontent.com/117700630/229467969-6abaeb99-7837-4168-91cb-1b94c1b06cf1.gif" />
 

## 🤔 고찰

> 1️⃣ Mock Server

백엔드와 협업하며, 구현 속도의 차이로 인해 API를 사용하는 기능 구현에 어려움을 겪었습니다.  
그러다 mock server를 알게 되어 처음에는 ```postman```을 이용하였으나, 요청 횟수 제한으로 인해 서버가 다운되었습니다.   
따라서, API 모킹 라이브러리인 ```mock service worker(msw)```를 사용하여 mock server를 구축하게 되었습니다.   
mock data 만으로는 ```post, put 등 다양한 처리```를 하기 힘들었는데, mock server의 사용으로 원활히 진행할 수 있었습니다.  
그러나 ```예외처리```에 많은 어려움을 겪었기 때문에 효율적인 예외처리 방식에 대한 공부가 필요할 것 같습니다.   

> 2️⃣ Animation

```라우터 간 화면 전환```과 ```컴포넌트 마운트```, ```배경``` 등에 니메이션을 적용해보고 싶었습니다.  
```react-transition-group```, ```lottie```, ```Gsap``` 등을 이용하고자 하였으나, 시간적 여유가 조금 부족하였습니다.  
또한 저희가 비교적 최근에 업데이트 된 react-router-dom 사용방식을 적용해 참고자료를 찾기도 까다로웠습니다.  
공식문서를 따라가며 시도하였으나, 결국 적용하지 못한 채 마무리 하게 되어 아쉬움이 많이 남았습니다.

> 3️⃣ Type SCript

이번 프로젝트를 진행하면서 ```디버깅```에 굉장히 많은 시간을 소비하였습니다.
동적언어인 ```JavaScript```에서는 별도로 타입 지정이 필요하지 않아 ```타입 에러``` 계속적으로 발생하였기 때문이었습니다.
따라서, 타입의 지정이 명확한 ```TypeScript```를 공부해 다음 프로젝트에는 타입 에러를 사전에 방지하고 ```개발 생산성을 향상```시키고자 합니다.
