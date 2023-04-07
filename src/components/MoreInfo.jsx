import React, { useState } from "react";

export default function MoreInfo() {
  const [open, setOpen] = useState(false);

  const toggle = (open) => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <div className="motivated-text blurb outline">
          <p>
            ACES and The Lorain Cooperative Ministry, in collaboration with NASA
            and other service providers, will host a{" "}
            <strong>Summer of Innovation</strong> for Lorain County youth,
            grades 2nd – 7th!
          </p>
          <p>
            The Summer of Innovation is eight (8) weeks, four (4) days per week,
            of <strong>STE(A)M</strong> (<strong>S</strong>
            cience, <strong>T</strong>
            echnology, <strong>E</strong>
            ngineering [<strong>A</strong>rts] and <strong>M</strong>
            ath) focused journeys. Every Thursday serves as a Music, Arts, or
            game day.
          </p>
          <p>
            Most activities will take place primarily at{" "}
            <strong>Greater Victory Church - 559 Reid Avenue, Lorain OH</strong>
            <br />
            11:00am - 3:00pm, Mon - Thurs <br /> (kids can be dropped off
            starting at 10:30am).
          </p>
          <strong>This program runs from June 19 – August 10, 2023</strong>
          <div className="info-button-container outline">
            <span>More Information</span>

            <button
              className="info-button"
              onClick={() => {
                toggle(open);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="info-icon"
                height="48"
                style={{ transform: "rotate(180deg)" }}
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m480 722 42-42-74-74h182v-60H448l74-74-42-42-146 146 146 146Zm0 254q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
              </svg>
              {/* <svg
                className="info-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m480 690 146-147H333l147 147Zm0 286q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z"></path>
              </svg> */}
            </button>
          </div>
        </div>
      ) : (
        <div className="motivated-text blurb outline">
          <p>
            It is important that you only mark the weekly camps that your child
            <strong> WILL ATTEND.</strong> If you sign up for a given week and
            your child cannot attend that week{" "}
            <a href="tel:440-654-8018">you must call us</a> or we will assume
            your child is out for the remainder of the summer.{" "}
          </p>
          <p>
            <a href="tel:440-336-1501"> Please call Mike Ferrer</a> if you have
            questions about our safety measures. We intend to continue masking
            while indoors, social distancing, engage in extensive hand washing,
            cleaning and disinfection of the facility on a daily basis.
          </p>
          <span>
            Parents are responsible for transportation to and from the program
            daily unless permission has been provided for the child to walk to
            and from the program each day.
          </span>
          <span>
            <em>
              {" "}
              Lunch and snacks will be provided daily at no cost to students or
              parents.
            </em>
          </span>

          <div className="flex">
            <div className="info-button-container outline">
              <span>Go Back</span>
              <button
                className="info-button"
                onClick={() => {
                  toggle(open);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="info-icon"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                >
                  <path d="m480 722 42-42-74-74h182v-60H448l74-74-42-42-146 146 146 146Zm0 254q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
                </svg>
              </button>
            </div>
            <div className="info-button-container outline">
              <span>Download Packet (opens new tab)</span>
              <a href="/SOI2023.pdf">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="info-icon download-button"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                  alt="summer of innovation pdf"
                >
                  <path d="M280 776h400v-60H280v60Zm197-126 158-157-42-42-85 84V336h-60v199l-85-84-42 42 156 157Zm3 326q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
