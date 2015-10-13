/* globals __html__, expect */
/* jshint -W030 */
"use strict";
describe("use of HTML fixtures and JS", () => {
  it("should load an html fixture", () => {
    document.body.innerHTML = __html__["src/v1/test/fixtures/script_test_example.html"];
    var elem = document.querySelector("#element-exists");
    expect(elem).to.be.ok;
    expect(elem.textContent).to.equal("");
  });

  it("should be able to run scripts", () => {
    document.body.innerHTML = __html__["src/v1/test/fixtures/script_test_example.html"];
    var elem = document.querySelector("#element-exists");
    expect(elem).to.be.ok;
    expect(elem.textContent).to.equal("");

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript;version=1.8");
    script.textContent = `
      let elem = document.querySelector("#element-exists");
      elem.textContent = "Hello World";
    `;
    document.body.appendChild(script);

    expect(elem.textContent).to.equal("Hello World");
  });
});
