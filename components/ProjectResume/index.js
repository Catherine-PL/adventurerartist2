import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
  <div>
    <div className="mt-5">
                                <div className="mt-2">
                                  <h2 className="text-lg">{position}</h2>
                                  <h3 className="text-sm opacity-75">
                                    {type}
                                  </h3>
                                  <p className="text-m mt-2 ">
                                  {bullets}
                                  </p>
                                </div>
                              </div>
    </div>
  );
};

export default ProjectResume;
