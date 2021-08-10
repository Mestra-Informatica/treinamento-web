const initializedSections = {};
const initializedOutputs = {};

const getHeader2 = headerText => {
  const h = document.createElement("H2");
  var t = document.createTextNode(headerText);
  h.appendChild(t);
  return h;
};

const getHeader3 = headerText => {
  const h = document.createElement("H3");
  var t = document.createTextNode(headerText);
  h.appendChild(t);
  return h;
};

const getOutputSection = identifier => {
  const p = document.createElement("pre");
  p.id = identifier;
  p.style.maxHeight = "200px";
  p.style.overflowY = "auto";
  return p;
};

const createOutputSection = s => section => question => {
  s.appendChild(getHeader3(`${section}.${question}`));
  const outputElement = getOutputSection(`#output-${section}-${question}`);
  s.appendChild(outputElement);
  initializedOutputs[`${section}-${question}`] = outputElement;
};

const getSection = section => {
  const s = document.createElement("section");
  const h = getHeader2(`Section ${section}`);
  s.appendChild(h);
  return s;
};

const createSection = section => {
  const s = getSection(section);
  initializedSections[section.toString()] = s;
  document.body.appendChild(s);
};

const getWriterFor = section => {
  if (!initializedSections.hasOwnProperty(section.toString())) {
    createSection(section);
  }
  const s = initializedSections[section.toString()];
  return question => {
    if (!initializedOutputs.hasOwnProperty(`${section}-${question}`)) {
      createOutputSection(s)(section)(question);
    }
    const outputElement = initializedOutputs[`${section}-${question}`];
    return (...params) => {
      outputElement.innerText +=
        params.map(i => JSON.stringify(i, null, 2)).join("\r\n") + "\r\n";
    };
  };
};

export default getWriterFor;
