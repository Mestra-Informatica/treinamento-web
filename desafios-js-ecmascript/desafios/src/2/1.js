import getWriterFor from "../writeOutput";

const writeOutput = getWriterFor(2)(1);

function q1() {
  // Fix the following code so it correctly logs the even numbers:
  class numberLogger {
    constructor() {
        this.numbers = [1,2,3,4,5,6,7];
    }
    
    isEven(x) {
        return x % 2 === 0;
    }
    
    logEven() {
        this.numbers.forEach(function(x) { if(this.isEven(x)){writeOutput(x)} });
    }
}

  const logger = new numberLogger();
  logger.logEven();
}

export default q1;
