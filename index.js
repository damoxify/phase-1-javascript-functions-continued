// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }

  function wrapAdjective(result = "*") {
    return function (adjective = "a hard worker") {
      return `You are ${result}${adjective}${result}!`;
    };
  }

  function wrapAdjective(result = "||") {
    return function (adjective = "a dedicated programmer") {
      return `You are ${result}${adjective}${result}!`;
    };
  }
