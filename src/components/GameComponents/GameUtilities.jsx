import React from "react";
import BntSkipLeft from "../../assets/gamePage/btn-skip-left.png";
import BntSkipRight from "../../assets/gamePage/btn-skip-right.png";
import BtnMoreOptions from "../../assets/gamePage/btn-more-options.png";

const SkipLeft = (props) => {
  return (
    <button type="button" className={props.cname}>
      <img className="flex-none" src={BntSkipLeft} />
    </button>
  );
};

const SkipRight = (props) => {
  return (
    <button type="button" className={props.cname}>
      <img className="flex-none" src={BntSkipRight} />
    </button>
  );
};

const MoreOptions = (props) => {
  return (
    <button type="button" className={props.cname}>
      <img className="flex-none" src={BtnMoreOptions} />
    </button>
  );
};

export { SkipLeft, SkipRight, MoreOptions };
