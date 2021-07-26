/**
 * Service to use different functions
 */
class Service {
  /**
   *
   * @param {string} result
   * Calculates the result
   */
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
  /**
   * Reset Function to reset value
   */
  static reset = () => {
    return "";
  };
  /**
   *
   * @param {string} result
   * Returns the value with deleting the latest value
   */
  static backspace = (result) => {
    return result.slice(0, -1);
  };
}

export default Service;
