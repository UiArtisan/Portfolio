import React from "react";
import ReactPlayer from "react-player/lazy";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Elevator = () => {
  return (
    <div>
      <h1 className={styles.sectionHeadText}>My Elevator Peach.</h1>
      <div
        className="mt-8 h-[36em] border-4 border-black"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
      
        <ReactPlayer
          url="https://youtu.be/9jo51nJrO0k"
          width="100%"
          height="100%"
          controls={true}
          onError={(e) => console.log("Error:", e)}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Elevator, "elevator");
