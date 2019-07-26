const  Color ={
    green: '#64ea91',
    blue: '#8fc9fb',
    purple: '#d897eb',
    red: '#f69899',
    yellow: '#f8c82e',
    peach: '#f797d6',
    borderBase: '#e5e5e5',
    borderSplit: '#f4f4f4',
    grass: '#d6fbb5',
    sky: '#c1e0fc',
  };
const Dashboard = {
  sales: [
    { name: 2008, Clothes: 488, Food: 277, Electronics: 323 },
    { name: 2009, Clothes: 253, Food: 327, Electronics: 423 },
    { name: 2010, Clothes: 376, Food: 304, Electronics: 429 },
    { name: 2011, Clothes: 372, Food: 189, Electronics: 352 },
    { name: 2012, Clothes: 306, Food: 384, Electronics: 317 },
    { name: 2013, Clothes: 491, Food: 211, Electronics: 496 },
    { name: 2016, Clothes: 346, Food: 268, Electronics: 366 },
    { name: 2017, Clothes: 283, Food: 279, Electronics: 372 },
    { name: 2018, Clothes: 376, Food: 304, Electronics: 429 },
    { name: 2019, Clothes: 372, Food: 189, Electronics: 352 },
    { name: 2020, Clothes: 306, Food: 384, Electronics: 317 },
    { name: 2021, Clothes: 491, Food: 211, Electronics: 496 },
    { name: 2022, Clothes: 346, Food: 268, Electronics: 366 },
    { name: 2023, Clothes: 283, Food: 279, Electronics: 372 }
  ],
  cpu: {
    "usage|50-600": 1,
    space: 825,
    "cpu|40-90": 1,
    "data|20": [
      {
        "cpu|20-80": 1
      }
    ]
  },
  browser: [
    {
      name: "Google Chrome",
      percent: 43.3,
      status: 1
    },
    {
      name: "Mozilla Firefox",
      percent: 33.4,
      status: 2
    },
    {
      name: "Apple Safari",
      percent: 34.6,
      status: 3
    },
    {
      name: "Internet Explorer",
      percent: 12.3,
      status: 4
    },
    {
      name: "Opera Mini",
      percent: 3.3,
      status: 1
    },
    {
      name: "Chromium",
      percent: 2.53,
      status: 1
    }
  ],
  user: {
    name: "github",
    sales: 3241,
    sold: 3556
  },
  "completed|12": [
    {
      "name|+1": 2008,
      "Task complete|200-1000": 1,
      "Cards Complete|200-1000": 1
    }
  ],
  "comments|5": [
    {
      name: "@last",
      "status|1-3": 1,
      content: "@sentence",
      avatar() {
        return Mock.Random.image(
          "48x48",
          Mock.Random.color(),
          "#757575",
          "png",
          this.name.substr(0, 1)
        );
      },
      date() {
        return `2016-${Mock.Random.date("MM-dd")} ${Mock.Random.time(
          "HH:mm:ss"
        )}`;
      }
    }
  ],
  "recentSales|36": [
    {
      "id|+1": 1,
      name: "@last",
      "status|1-4": 1,
      date() {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date(
          "MM-dd"
        )} ${Mock.Random.time("HH:mm:ss")}`;
      },
      "price|10-200.1-2": 1
    }
  ],
  quote: {
    name: "Joho Doe",
    title: "Graphic Designer",
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    avatar:
      "http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236"
  },
  numbers: [
    {
      icon: "pay-circle-o",
      color: Color.green,
      title: "总支出",
      number: 2781
    }
    // {
    //   icon: 'step-backward',
    //   color: Color.green,
    //   title: '总支出',
    //   number: 2781,
    // },
    // {
    //   icon: 'ellipsis',
    //   color: Color.blue,
    //   title: '食物',
    //   number: 3241,
    // },
    // {
    //   icon: 'message',
    //   color: Color.purple,
    //   title: '商品',
    //   number: 253,
    // },
    // {
    //   icon: 'shopping-cart',
    //   color: Color.red,
    //   title: '衣服',
    //   number: 4324,
    // },
  ]
};

const getDashboard = ({ router }) => {
  router.get("/v1/dashboard", (ctx, next) => {
    ctx.body = JSON.stringify(Dashboard);
  });
};

module.exports = {
    getDashboard
};
