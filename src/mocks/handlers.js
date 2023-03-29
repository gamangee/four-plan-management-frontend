import { rest } from 'msw'; // msw package import

export const handlers = [
  // 로그인
  rest.post('/login', (req, res, ctx) => {
    const accountId = 'abc123';
    const password = 'testabc123';
    if (accountId !== req.body.accountId) {
      // 아이디가 일치 x
      return res(ctx.status(401), ctx.json({ message: '로그인실패' }));
    }
    if (password !== req.body.password) {
      // 비밀번호가 일치 x
      return res(ctx.status(401), ctx.json({ message: '로그인실패' }));
    }
    return res(
      ctx.json({
        code: '200',
        status: 'success',
        accessToken: 'aaa5a55s5s1d1dd5dd6d6',
      })
    );
  }),

  // 로그인 유저 정보
  rest.get('/user/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          id: '123',
          name: 'Nicolas Serrano Arevalo',
          accountId: 'abc123',
          password: 'niconiconi',
          role: 'user',
          email: 'nico321@gmail.com',
          department: '개발팀',
          position: '팀장',
          yearly: 24,
          duty: true,
          Schedule: {
            id: 1,
            account_id: 'nico123',
            type: 'duty',
            content: null,
            start_date: '2023-03-22T18:00:00Z',
            end_date: '2023-03-24',
            created_at: null,
            modified_at: null,
          },
        },
      })
    );
  }),

  // 유저 정보 수정 => 수정하기
  rest.post('/account/update/:accountId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),

  // 전체 스케쥴
  rest.get('/user/schedule', (req, res, ctx) => {
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
              accountId: 'abc123',
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
              account_id: 'glen_a',
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
              account_id: 'Benjamin35',
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
              account_id: '409ac',
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
              account_id: 'brian756',
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
              account_id: 'liquid1935',
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
              account_id: 'david1409',
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
              account_id: 'kimyoung1208',
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
              account_id: 'mark619',
              type: 'annual',
              content: null,
              start_date: '2023-03-22T09:00:00Z',
              end_date: '2023-03-23T14:30:00Z',
              created_at: '2023-03-21T16:30:00Z',
              modified_at: null,
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
  rest.post('/schedule/update/:dataId', (req, res, ctx) => {
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
  rest.post('/schedule/delete/:dataId', (req, res, ctx) => {
    if (!req.body.id) {
      return res(ctx.status(403), ctx.json({ message: 'delete error' }));
    }
    return res(
      ctx.status(200),
      ctx.json({ code: '200', status: 'delete success' })
    );
  }),
];
