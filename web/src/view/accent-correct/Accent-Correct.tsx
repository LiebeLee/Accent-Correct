import { FunctionComponent, useEffect } from "react";

import "./ac.css";

interface AccentCorrectProps {}

const AccentCorrect: FunctionComponent<AccentCorrectProps> = (
  props: AccentCorrectProps
) => {
  useEffect(() => {
    console.log("Accent Correct props:", props);
  }, [props]);

  return (
    <div className="accent-correct">
      <div className="accent-correct-header">Accent Correct</div>
    </div>
  );
};

export { AccentCorrect };
