function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function randomAvatar() {
    const avatarList = [
      "photo-1549492864-2ec7d66ffb04.jpeg",
      "photo-1480535339474-e083439a320d.jpeg",
      "photo-1523419409543-a5e549c1faa8.jpeg",
      "photo-1519648023493-d82b5f8d7b8a.jpeg",
      "photo-1523307730650-594bc63f9d67.jpeg",
      "photo-1522962506050-a2f0267e4895.jpeg",
      "photo-1489779162738-f81aed9b0a25.jpeg",
      "photo-1534308143481-c55f00be8bd7.jpeg",
      "photo-1519336555923-59661f41bb45.jpeg",
      "photo-1551438632-e8c7d9a5d1b7.jpeg",
      "photo-1525879000488-bff3b1c387cf.jpeg",
      "photo-1487412720507-e7ab37603c6f.jpeg",
      "photo-1510227272981-87123e259b17.jpeg"
    ];
    return `//image.zuiidea.com/${
      avatarList[randomNumber(0, avatarList.length - 1)]
    }?imageView2/1/w/200/h/200/format/webp/q/75|imageslim`;
  }
  const EnumRoleType = {
    ADMIN: "admin",
    DEFAULT: "red",
    DEVELOPER: "developer"
  };
  const userPermission = {
    DEFAULT: {
      visit: ["1", "2", "21", "7", "5", "51", "52", "53"],
      role: EnumRoleType.DEFAULT
    },
    ADMIN: {
      role: EnumRoleType.ADMIN
    },
    DEVELOPER: {
      role: EnumRoleType.DEVELOPER
    }
  };
  const adminUsers = [
    {
      id: 0,
      username: "admin",
      password: "admin",
      permissions: userPermission.ADMIN,
      avatar: randomAvatar()
    },
    {
      id: 1,
      username: "red",
      password: "red",
      permissions: userPermission.DEFAULT,
      avatar: randomAvatar()
    },
    {
      id: 2,
      username: "shiny",
      password: "shiny",
      permissions: userPermission.DEVELOPER,
      avatar: randomAvatar()
    }
  ];

  module.exports = {
    adminUsers
  };