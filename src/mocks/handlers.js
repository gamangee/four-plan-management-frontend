import { rest } from 'msw'; // msw package import

const accountId = 'abc123';
const password = 'testabc123';
const adminId = 'pika123';
const adminPassword = 'pipipipi';

export const handlers = [
  // 로그인
  rest.post('/login', (req, res, ctx) => {
    // 유저 아이디
    if (req.body.accountId !== accountId) {
      // 관리자 아이디
      if (req.body.accountId !== adminId) {
        // 아이디가 일치 x
        return res(ctx.status(401), ctx.json({ message: '로그인실패' }));
      }
    }
    // 유저 비밀번호
    if (req.body.password !== password) {
      // 관리자 비밀번호
      if (req.body.password !== adminPassword) {
        // 비밀번호가 일치 x
        return res(ctx.status(401), ctx.json({ message: '로그인실패' }));
      }
    }
    // 관리자 로그인
    if (req.body.accountId === adminId) {
      return res(
        ctx.status(200),
        ctx.json({
          user: {
            id: '1',
            name: '피카츄',
            accountId: 'pika123',
            role: 'ROLE_ADMIN',
            email: 'pipipi@gmail.com',
            department: '인사과',
            position: '팀장',
            yearly: 24,
            duty: true,
            Schedule: {
              id: 15,
              accountId: 'pika123',
              type: 'duty',
              content: null,
              start_date: '2023-03-31T18:00:00Z',
              end_date: '2023-03-31',
              created_at: null,
              modified_at: null,
            },
            accessToken: 'pipipipipssdkfasfsas11222asfeeddd',
          },
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          id: '1',
          name: '홍길동',
          accountId: 'abc123',
          role: 'ROLE_USER',
          email: 'dong123@gmail.com',
          department: '개발팀',
          position: '팀장',
          yearly: 24,
          duty: false,
          Schedule: {
            id: 1,
            accountId: 'nico123',
            type: 'duty',
            content: null,
            start_date: '2023-03-22T18:00:00Z',
            end_date: '2023-03-24',
            created_at: null,
            modified_at: null,
          },
          accessToken: 'aaa5a55s5s1d1dd5dd6d6dfasfzxxafdsfsd5d5d5d5',
        },
      })
    );
  }),

  // 회원가입
  rest.post('/signup', (req, res, ctx) => {
    const name = ['홍길동', '뽀로로', '펭수'];
    const duplicateAccountId = 'test123';
    const email = ['dong123@gmail.com', 'gil123@naver.com'];
    if (req.body.accountId === duplicateAccountId) {
      // 중복 아이디
      return res(ctx.status(400), ctx.json({ message: 'existId' }));
    } else {
      email.forEach(el => {
        if (req.body.email !== el) {
          // 이메일 존재 x
          return res(ctx.status(400), ctx.json({ message: 'checkEmail' }));
        }
      });
      name.forEach(el => {
        if (req.body.name !== el) {
          // 이름 존재 x
          return res(ctx.status(400), ctx.json({ message: 'checkName' }));
        }
      });
    }
    return res(
      ctx.json({
        user: {
          name: '홍길동',
          account_id: 'abc123',
          role: 'user',
          email: 'gildong123@naver.com',
          department: '개발팀',
          position: '팀장',
          yearly: 30,
          duty: false,
        },
      })
    );
  }),

  // // 로그인 유저 정보
  // rest.get('/user/login', (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       user: {
  //         id: '123',
  //         name: 'Nicolas Serrano Arevalo',
  //         accountId: 'abc123',
  //         password: 'niconiconi',
  //         role: 'user',
  //         email: 'nico321@gmail.com',
  //         department: '개발팀',
  //         position: '팀장',
  //         yearly: 24,
  //         duty: true,
  //         Schedule: {
  //           id: 1,
  //           accountId: 'nico123',
  //           type: 'duty',
  //           content: null,
  //           start_date: '2023-03-22T18:00:00Z',
  //           end_date: '2023-03-24',
  //           created_at: null,
  //           modified_at: null,
  //         },
  //       },
  //     })
  //   );
  // }),

  // 개인 정보 수정
  rest.post('/account/update/:accountId', (req, res, ctx) => {
    if (req.body.password !== password) {
      return res(
        ctx.status(400),
        ctx.json({
          code: '400',
          message: '비밀번호를 확인해주세요.',
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        code: '200',
        status: 'success',
        message: '수정완료',
      })
    );
  }),

  // 유저 정보 삭제
  rest.post('/account/delete/:accountId', (req, res, ctx) => {
    console.log('hei');
    return res(
      ctx.status(200),
      ctx.json({
        code: '200',
        status: 'success',
        message: '삭제완료',
      })
    );
  }),

  // 전체 스케쥴
  rest.get('/schedule', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            name: '홍길동',
            accountId: 'abc123',
            role: 'ROLE_USER',
            email: 'gildong123@naver.com',
            department: '개발팀',
            position: '팀장',
            yearly: '30',
            duty: false,
            Schedule: {
              id: '1',
              accountId: 'abc123',
              type: 'YEARLY',
              content: null,
              start_date: '2023-03-23T00:00:00Z',
              end_date: '2023-03-24T00:00:00Z',
              created_at: '2023-03-15T15:25:00Z',
              modified_at: '2023-03-15T15:25:00Z',
            },
          },
          {
            name: '홍길동',
            accountId: 'dongdong123',
            role: 'ROLE_USER',
            email: 'dongdong22@gmail.com',
            department: '디자인팀',
            position: '사원',
            yearly: '15',
            duty: true,
            Schedule: {
              id: '2',
              accountId: 'abc123asdwdadasd',
              type: 'DUTY',
              content: null,
              start_date: '2023-03-28T00:00:00Z',
              end_date: '2023-03-28T23:59:59Z',
              created_at: '2023-03-20T15:25:00Z',
              modified_at: '2023-03-20T15:25:00Z',
            },
          },
          {
            name: 'Glen A. Schofield',
            department: '개발팀',
            position: '사원',
            Schedule: {
              id: 3,
              accountId: 'glen_a',
              type: 'duty',
              content: null,
              start_date: '2023-03-22T14:30:00Z',
              end_date: '2023-03-22',
              created_at: null,
              modified_at: null,
            },
          },
          {
            name: 'Benjamin W. Lee',
            department: '인사팀',
            position: '사원',
            Schedule: {
              id: 4,
              accountId: 'Benjamin35',
              type: 'plan',
              content: '주제 : 해고',
              start_date: '2023-03-07T09:00:00Z',
              end_date: '2023-03-07',
              created_at: null,
              modified_at: null,
            },
          },
          {
            name: 'Andrew Chambers',
            department: '디자인팀',
            position: '팀장',
            Schedule: {
              id: 5,
              accountId: '409ac',
              type: 'plan',
              content: 'design meeting',
              start_date: '2023-03-06T09:30:00Z',
              end_date: '2023-03-09T17:30:00Z',
              created_at: '2023-03-02T14:30:00Z',
              modified_at: '2023-03-03T16:00:00Z',
            },
          },
          {
            name: 'Brian Kindregan',
            department: '인사팀',
            position: '사원',
            Schedule: {
              id: 6,
              accountId: 'brian756',
              type: 'annual',
              content: null,
              start_date: '2023-03-14T09:00:00Z',
              end_date: '2023-03-16T00:00:00Z',
              created_at: '2023-03-02T17:00:00Z',
              modified_at: null,
            },
          },
          {
            name: 'Ben Walker',
            department: '인사팀',
            position: '팀장',
            Schedule: {
              id: 7,
              accountId: 'liquid1935',
              type: 'plan',
              content: 'Welfare related meeting',
              start_date: '2023-03-22T10:30:00Z',
              end_date: '2023-03-23T06:00:00Z',
              created_at: '2023-03-13T10:00:00Z',
              modified_at: null,
            },
          },
          {
            name: 'David Curtis Hill',
            department: '개발팀',
            position: '사원',
            Schedule: {
              id: 8,
              accountId: 'david1409',
              type: 'plan',
              content: 'Web application development meeting',
              start_date: '2023-03-17T13:00:00Z',
              end_date: '2023-03-20T17:30:00Z',
              created_at: '2023-03-15T14:00:00Z',
              modified_at: null,
            },
          },
          {
            name: 'Jim Yong Kim',
            department: '개발팀',
            position: '사원',
            Schedule: {
              id: 9,
              accountId: 'kimyoung1208',
              type: 'annual',
              content: null,
              start_date: '2023-03-22T09:00:00Z',
              end_date: '2023-03-23T13:00:00Z',
              created_at: '2023-03-20T11:00:00Z',
              modified_at: null,
            },
          },
          {
            name: 'Mark James',
            department: '개발팀',
            position: '사원',
            Schedule: {
              id: 10,
              accountId: 'mark619',
              type: 'annual',
              content: null,
              start_date: '2023-03-22T09:00:00Z',
              end_date: '2023-03-23T14:30:00Z',
              created_at: '2023-03-21T16:30:00Z',
              modified_at: null,
            },
          },
          {
            name: '홍길동',
            accountId: 'dongdong123',
            role: 'ROLE_USER',
            email: 'dongdong22@gmail.com',
            department: '디자인팀',
            position: '사원',
            yearly: '15',
            duty: true,
            Schedule: {
              id: '11',
              accountId: 'abc123asdwdadasd',
              type: 'annaul',
              content: null,
              start_date: '2023-03-28T00:00:00Z',
              end_date: '2023-03-28T23:59:59Z',
              created_at: '2023-03-20T15:25:00Z',
              modified_at: '2023-03-20T15:25:00Z',
            },
          },
        ],
      })
    );
  }),

  // 연차 등록
  rest.post('/schedule/save', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        code: '200',
        status: 'success',
      })
    );
  }),

  // 연차수정
  rest.post('/schedule/update/:id', (req, res, ctx) => {
    if (req.body.scheduleType === 'YEARLY') {
      return res(
        ctx.status(200),
        ctx.json({ code: '200', status: `${req.body.id} YEARLY success` })
      );
    }
    if (req.body.scheduleType === 'DUTY') {
      return res(
        ctx.status(200),
        ctx.json({ code: '200', status: `${req.body.id} DUTY success` })
      );
    }
  }),

  // 연차삭제
  rest.post('/schedule/delete/:id', (req, res, ctx) => {
    if (!req.body.id) {
      return res(ctx.status(403), ctx.json({ message: 'delete error' }));
    }
    return res(
      ctx.status(200),
      ctx.json({ code: '200', status: 'delete success' })
    );
  }),

  // 오늘의 당직
  rest.get('/schedule/today-duty', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: '200',
        status: 'success',
        data: [
          {
            name: '홍길동',
            department: '디자인팀',
            position: '사원',
            duty: true,
          },
          {
            name: '펭수',
            department: '인사팀',
            position: '팀장',
            duty: true,
          },
        ],
      })
    );
  }),

  // 관리자

  // 유저 목록 조회 => (길동 검색)
  rest.get('/account/search?name=길동', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: '200',
        status: 'success',
        users: [
          {
            id: '1',
            name: '홍길동',
            accountId: 'abc123',
            role: 'ROLE_USER',
            email: 'gildong123@naver.com',
            department: '개발팀',
            position: '팀장',
            yearly: '30',
            duty: false,
            Schedule: [
              {
                id: '1',
                accountId: 'abc123',
                type: 'YEARLY',
                content: null,
                start_date: '2023-03-23T00:00:00Z',
                end_date: '2023-03-24T00:00:00Z',
                created_at: '2023-03-15T15:25:00Z',
                modified_at: '2023-03-15T15:25:00Z',
              },
              {
                id: '2',
                accountId: 'abc123',
                type: 'DUTY',
                content: null,
                start_date: '2023-03-30T00:00:00Z',
                end_date: '2023-03-30T23:59:59Z',
                created_at: '2023-03-20T15:25:00Z',
                modified_at: '2023-03-20T15:25:00Z',
              },
            ],
          },
          {
            id: '2',
            name: '홍길동',
            accountId: 'dongdong123',
            role: 'ROLE_USER',
            email: 'dongdong22@gmail.com',
            department: '디자인팀',
            position: '사원',
            yearly: '15',
            duty: true,
            Schedule: [
              {
                id: '3',
                accountId: 'abc123',
                type: 'DUTY',
                content: null,
                start_date: '2023-03-28T00:00:00Z',
                end_date: '2023-03-28T23:59:59Z',
                created_at: '2023-03-20T15:25:00Z',
                modified_at: '2023-03-20T15:25:00Z',
              },
            ],
          },
          {
            id: '3',
            name: '길동이',
            accountId: 'higildong',
            role: 'ROLE_USER',
            email: 'higildong@naver.com',
            department: '인사팀',
            position: '팀장',
            yearly: '20',
            duty: false,
            Schedule: null,
          },
        ],
      })
    );
  }),

  // id에 해당하는 사람의 연차 및 당직 조회 => id=1인 경우, id =2인 경우 두가지 !
  rest.get('/schedule/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === 1) {
      return res(
        ctx.status(200),
        ctx.json({
          id: '1',
          name: '홍길동',
          accountId: 'abc123',
          role: 'ROLE_USER',
          email: 'gildong123@naver.com',
          department: '개발팀',
          position: '팀장',
          yearly: '30',
          duty: false,
          Schedule: [
            {
              id: '1',
              accountId: 'abc123',
              type: 'YEARLY',
              content: null,
              start_date: '2023-03-23T00:00:00Z',
              end_date: '2023-03-24T00:00:00Z',
              created_at: '2023-03-15T15:25:00Z',
              modified_at: '2023-03-15T15:25:00Z',
            },
            {
              id: '2',
              accountId: 'abc123',
              type: 'DUTY',
              content: null,
              start_date: '2023-03-30T00:00:00Z',
              end_date: '2023-03-30T23:59:59Z',
              created_at: '2023-03-20T15:25:00Z',
              modified_at: '2023-03-20T15:25:00Z',
            },
          ],
        })
      );
    }
    if (id === 2) {
      return res({
        id: '2',
        name: '홍길동',
        accountId: 'dongdong123',
        role: 'ROLE_USER',
        email: 'dongdong22@gmail.com',
        department: '디자인팀',
        position: '사원',
        yearly: '15',
        duty: true,
        Schedule: [
          {
            id: '3',
            accountId: 'abc123',
            type: 'DUTY',
            content: null,
            start_date: '2023-03-28T00:00:00Z',
            end_date: '2023-03-28T23:59:59Z',
            created_at: '2023-03-20T15:25:00Z',
            modified_at: '2023-03-20T15:25:00Z',
          },
        ],
      });
    }
    return (
      ctx.status(400),
      ctx.json({ code: '400', message: 'id 값을 확인해주세요' })
    );
  }),
];
