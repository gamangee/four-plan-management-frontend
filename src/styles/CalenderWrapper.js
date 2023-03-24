import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const CalendarWrapper = styled.div`
  position: fixed;
  // 달력 전체 container 가로 넓이 => content 부분은 따로 크기 설정필요!
  width : px;

  > div {
    display : flex;
    align-items : center;
    justify-content : center;
    width: 100%;

    // 달력의 모든걸 감싸는 container
    .react-datepicker {
      display : flex;
      flex-direction : column;
      align-items : center;
      justify-content : center;
      width: 100%;
      max-width: 1180px;
      border : 0;

      // 앞 뒤 버튼
      > button {
        width : 35px;
        height : 35px;
        margin : 15px 55px;
        background : white;
        border-radius : 50%;
      }

      // 달력 감싸고 있는 부분
      .react-datepicker__month-container {
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        width: 100%;
        margin: 0px;
        border: 3px solid #CCE9FF;
        border-radius : 30px;

        // header
        .react-datepicker__header {
          display : flex;
          flex-direction : column;
          align-items : center;
          justify-content : center;
          width: 100%;
          border : 0;
          border-radius : 25px 25px 0 0;
          background-color: #CCE9FF;

          // month title => 3월 2023 표기부분
          .react-datepicker__current-month {
            display : flex;
            align-items : center;
            justify-contents : center;
            font-size: 25px;
            margin: 10px 0 20px 0;
            color : #2F8BCF;
          }

            // 요일 이름 container
          .react-datepicker__day-names {
            width: 100%;
            border : 0;
            display : flex;
            align-items : center;
            justify-content : space-around;
            font-size : 18px;
            font-weight : 700;

            // 각 요일 이름
            .react-datepicker__day-name {
              &:first-child {
                // 일요일
                color: #EF6868;
              }

              &:last-child {
                // 토요일
                color: #2F8BCF;
              }
            }
          }
        }

        // 달력 날짜 표시 부분 => 크기 조정
        .react-datepicker__month {
          display : flex;
          flex-direction : column;
          align-items : center;
          justify-content : center;
          width: 450px;

          // 한 주 표시부분 (달력 한 줄씩)
          .react-datepicker__week {
            display : flex;
            flex-direction : row;
            align-items : center;
            justify-content : space-around;
            width: 100%;
            font-size: 25px;
            border-bottom : 1px solid lightgray;
            &:last-child {
              // 마지막 주는 border-bottom 없애기
               border-bottom :0;
              }


            // 달력의 각 날짜 칸 => 크기 조정
            .react-datepicker__day {
              display : flex;
              flex-direction : column;
              align-items : center
              justify-content : center;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              margin: 5px;
              padding : 10px;
              box-sizing : border-box;
              color : #2d2d2d;
              font-size : 16px;
              &:hover{
                background : #CCE9FF;
              }
            }

            // 오늘 날짜
            .react-datepicker__day--today {
              background : transparent;
              color : #2d2d2d;
              border : 2px solid #2A62FF;
            }
            
            // 현재 선택되어져 있는 날짜
            .react-datepicker__day--keyboard-selected {
              border : 0;
              color: #fff;
              &:hover{
                color : #2F8BCF;
              }
            }

            // 현재 선택되어진 날짜
            .react-datepicker__day--selected{
              background : #2F8BCF;
              color: #fff;
            }

            // 연속 날짜 선택할 때, 이어지는 배경 & 글자색
            .react-datepicker__day--in-selecting-range {
              background-color: #CCE9FF;
              color: #2F8BCF;
            }

            // 연속 날짜 선택 후, 이어지는 배경 & 글자색
            .react-datepicker__day--in-range {
              background-color: #CCE9FF;
              color: #2F8BCF;
            }

            // 연속 날짜 선택의 시작 부분
            .react-datepicker__day--range-start{
              &:hover{
                color : #2F8BCF;
              }
            }

            // 선택한 기간 양 끝 날짜 배경 & 글자색
            .react-datepicker__day--selecting-range-start,
            .react-datepicker__day--range-start,
            .react-datepicker__day--range-end {
              background-color: #2F8BCF;
              color: #fff;
            }

            // 주말 날짜 칸
            .react-datepicker__day--weekend {
              &:first-child {
                // 일요일
                color: #EF6868;
              }
              &:last-child {
                // 토요일
                color: #2F8BCF;
              }
            }

            // 현재 달(ex.3월)이 아닌 다른 달의 날짜 칸 중, 평일
            //  => 연하게 보이도록 글자색 white 설정
            .react-datepicker__day--outside-month {
              color : #AAAAAA
            }
          }
        }
      }
    }
  }
`;
