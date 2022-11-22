import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Advice = () => {
  const [slip, setSlip] = useState({});

  useEffect(() => {
    getAdviceSlip();
  }, []);

  const getAdviceSlip = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setSlip(data.slip));
  };
  return (
    <div className="w-4/5 h-2/5 md:w-2/6 relative">
      <Card slip={slip} getSlip={getAdviceSlip}></Card>
    </div>
  );
};

export default Advice;
