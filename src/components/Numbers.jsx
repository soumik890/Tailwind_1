import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
function Numbers() {
  const data = [
    {
      text: "Aspirants",
      value: 1560,
    },
    {
      text: "Companies",
      value: 25,
    },
    {
      text: "Locations",
      value: 13,
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold my-10 text-primary text-center">
        Our Statistics
      </h1>
      <div className="flex sm:flex-col border-primary rounded p-5 border-2 justify-between hover:bg-secondary">
        {data.map((item, index) => (
          <div>
            <h1 className="text-7xl text-primary">
              <CountUp start={0} end={item.value}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h1 className="text-2xl font-semibold">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
