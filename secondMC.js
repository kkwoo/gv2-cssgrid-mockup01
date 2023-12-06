import m from 'mithril';

const secondMC = {
  view: function(vnode) {
    var beginTime = "BLANK";
    const result = [
      m("div", {
        class: "header"
      }, [
        m("h1", {}, "Groovate"),
        m("div", {}, "MVP: CSS GRID"),
      ]),
      m("label", {class: "habitLabel"}, "Habit"),
      m("select", {class: "habitList"}),
      m("input", {
        class: "habitText",
        type: "text",
        value: "some thing"
      }),
      m("div", {
        class: "beginDTLabel"
      }, "Begin Date/Time: " + beginTime),
      m("input", {
        type: "date",
        class: "beginYYYYMMDD"
      }),
      m("input", {
        type: "time",
        class: "beginHHMMSS",
        value: beginTime,
        onchange: function() {
          beginTime = e.target.value;
        }
      }),
      m("button", {class: "beginTSButton"}, "0"),
      m("div", {class: "endDTLabel"}, "End Data/Time: "),
      m("input", {
        type: "date",
        class: "endYYYYMMDD"
      }),
      m("input", {
        type: "time",
        class: "endHHMMSS"
      }),
      m("button", {class: "endTSPlus0"}, "End Now"),
      m("button", {class: "endTSPlus15"}, "+15"),
      m("button", {class: "endTSPlus60"}, "+60"),
      m("button", {class: "saveHabit"}, "Log Habit"),

  ]; // .map(x => m("div", {class: ""}, x));
    return(result);
  }
};

export { secondMC };