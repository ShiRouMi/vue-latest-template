function getMockData(params) {
  let mockData = {
    data: [
      {
        title: "abc",
        name: "hello",
      },
      {
        title: "def",
        name: "world",
      },
      {
        title: "ghi",
        name: "nice",
      },
      {
        title: "jkl",
        name: "day",
      },
      {
        title: "mno",
        name: "yeah",
      },
      {
        title: "123",
        name: "456",
      },
      {
        title: "789",
        name: "101112",
      },
      {
        title: "1234",
        name: "2345",
      },
      {
        title: "3456",
        name: "4567",
      },
    ],
    totalCount: 9,
  }

  return {
    data: mockData.data.slice(params.index, params.index + params.pageSize),
    totalCount: mockData.totalCount
  }
}

export { getMockData }