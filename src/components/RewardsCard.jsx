import { useState } from "react";

export default function RewardsCard(props) {
  const [flipped, setFlipped] = useState(false);
  const { icon, content } = props;

  const flip = (flipped) => {
    setFlipped(!flipped);
  };

  return (
    <>
      {flipped ? (
        <div
          className="rewards-card"
          onClick={() => {
            flip(flipped);
          }}
        >
          {content}
        </div>
      ) : (
        <div
          className="rewards-card icon-side"
          onClick={() => {
            flip(flipped);
          }}
        >
          {icon}
        </div>
      )}
    </>
  );
}
