# four-plan-management-frontend

## 🖥️ 프로젝트 소개
- 연차 및 당직을 관리할 수 있는 캘린더 만들기 프로젝트

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

<img width="300" src="https://user-images.githubusercontent.com/117700630/229610399-2683a485-76ae-4f82-a1fb-e3f9ed60dca6.gif" />

✅ 회원가입  ```일반사용자```

<img width="350" src="https://user-images.githubusercontent.com/117700630/229467634-b069d83d-5286-4123-a584-9e3ad7c8707c.gif" />

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

백엔드와 협업하며, API 완성 속도의 차이로 많은 고민을 하다가 mock server를 알게 되었고 이를 활용하였습니다.  
처음에는 접근이 쉬운 ```postman```을 이용하였으나, 요청횟수에 제한으로 무한 렌더링 실수로 인해 서버가 다운되었습니다.   
따라서, API 모킹 라이브러리인 ```mock service worker (msw)```를 사용하여 mock server를 구축하게 되었습니다.  
mock data 만으로는 ```post, put 등 다양한 처리```를 하기 힘들었는데, mock server의 사용으로 해당 부분도 원활히 진행될 수 있었습니다.  
그러나 API 명세서를 기반으로 만들면서 ```예외처리```에 많은 어려움을 겪었기 때문에 어떤 방법이 효율적일지 공부가 더 필요한 것 같습니다.   
또한, 이 외에도 다양한 방법이 있는데, 여러 가지를 시도해보며 잘 맞는 것을 찾아 앞으로의 프로젝트에 적용해보려고 합니다.

> 2️⃣ 

> 3️⃣ 
