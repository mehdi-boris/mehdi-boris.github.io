import React, { useEffect } from "react";
import "../styles/TextSphere.css";
import TagCloud from "TagCloud";


const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "Python",
        "Git",
        "React",
        "C++",
        "Latex",
        "R",
        "VBA",
        "Microsoft Office",
        "Pycharm",
        "VSC",
        "Pandas",
        "Numpy"
      ];

      const options = {
        radius: 200,
        maxSpeed: "slow",
        initSpeed: "very slow",
        keep: true,
      };

      TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;