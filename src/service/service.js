class Service {
  static calculate = (result) => {
    let checkResult = result;
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      return (eval(checkResult) || "") + "";
    } catch (e) {
      return "error";
    }
  };
  static reset = () => {
    return "";
  };

  static backspace = (result) => {
    return result.slice(0, -1);
  };
}

export default Service;
