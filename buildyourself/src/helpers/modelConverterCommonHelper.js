export const convertUserInfoDtoToUserInfo = (userInfoDto) => {
  const userInfo = {
    gender: userInfoDto.gender,
    age: userInfoDto.age,
    height: userInfoDto.height,
    weight: userInfoDto.weight,
    activity: userInfoDto.activity,
    goal: userInfoDto.goal,
  };

  return userInfo;
};

export const convertUserInfoToUserInfoViewModel = (userInfo) => {
  const userInfoViewModel = {
    gender: null,
    age: userInfo.age,
    height: userInfo.height,
    weight: userInfo.weight,
    activity: null,
    goal: null,
  };

  //gender
  if (userInfo.gender === "male") {
    userInfoViewModel.gender = "Mężczyzna";
  }
  if (userInfo.gender === "female") {
    userInfoViewModel.gender = "Kobieta";
  }

  //activity
  if (userInfo.activity === "1") {
    userInfoViewModel.activity = "Brak aktywności fizycznej";
  }
  if (userInfo.activity === "2") {
    userInfoViewModel.activity = "Lekko aktywny";
  }
  if (userInfo.activity === "3") {
    userInfoViewModel.activity = "Średnia aktywność";
  }
  if (userInfo.activity === "4") {
    userInfoViewModel.activity = "Wysoka aktywność";
  }
  if (userInfo.activity === "5") {
    userInfoViewModel.activity = "Bardzo wysoka aktywność";
  }

  //goal
  if (userInfo.goal === "lose") {
    userInfoViewModel.goal = "Utrata wagi";
  }
  if (userInfo.goal === "maintain") {
    userInfoViewModel.goal = "Utrzymanie wagi";
  }
  if (userInfo.goal === "gain") {
    userInfoViewModel.goal = "Nabieranie wagi";
  }

  return userInfoViewModel;
};
