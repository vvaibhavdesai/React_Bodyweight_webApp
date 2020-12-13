import React from "react";
import { useState } from "react";
import "./styles.css";

const fitness = {
  HOME: [
    {
      head: "Bodyweight Training",
      Exercise:
        "Bodyweight Training is one of the best forms of physical activity to build muscles not just muscles but it helps you build your endurance as well as strength and also has less number of chances towards getting injuries when compared to traditional weight-Training. You'll find number of exercise ahead in respective sections. "
    }
  ],
  CHEST: [
    {
      head: "Chest has Two muscles:pectoralis major and pectoralis minor.",
      Exercise: "Pushups,Incline Pushups,Decline Pushups,dips."
    }
  ],
  BACK: [
    {
      head:
        "Back is one fo the major muscles that Makes you look widers.Thickness as well as width is must and mainiting a good posture throughout the day can help you built good muscles",
      Exercise: "Pullups,Closegrip Pullups,Widegrip Pullups,Inverted body row."
    }
  ],
  ARMS: [
    {
      head:
        "Arms are one of the major body parts which can help you catch peoples attention easily.Biceps Brachii,Brachialis,Pronator Teres,Brachioradialis,Triceps Brachii are Muscles of our arms",
      Exercise:
        "Chinups,Closegrip Chinups,Neutral Grip Pullups,Australian Pullups,Dead-hang,Tricep Extension,Tricep Dips,Diamond Pushups"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("HOME");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "rgb(228, 36, 36)", margin: "0px", padding: "1rem" }}>
        Bodyweight Exercises
      </h1>
      <div>
        {Object.keys(fitness).map((genre) => (
          <button
            class="button-options"
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {fitness[selectedGenre].map((fit) => (
            <li
              key={fit.head}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div class="font-head" style={{ fontSize: "Medium" }}>
                <strong>{fit.head}</strong>
              </div>
              <div class="font-Exercise" style={{ fontSize: "smaller" }}>
                {" "}
                {fit.Exercise}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
