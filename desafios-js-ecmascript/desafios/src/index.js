import writeOutput from "./writeOutput";
import * as Section1 from "./1";
import * as Section2 from "./2";
import * as Section3 from "./3";
import * as Section4 from "./4";

Object.keys(Section1).forEach(x => Section1[x]());
Object.keys(Section2).forEach(x => Section2[x]());
Object.keys(Section3).forEach(x => Section3[x]());
Object.keys(Section4).forEach(x => Section4[x]());
