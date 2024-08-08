import React from "react";
import { GoArrowRight } from "react-icons/go";

const Project = () => {
  return (
    <React.Fragment>
      <div className="py-28 flex flex-col items-center justify-center">
        <div className="flex flex-row justify-center gap-24">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold">Warehouse Edge</div>
            <div className="text-lg text-gray-500 uppercase">
              Logistics Management Website
            </div>
          </div>
          <div className="flex flex-col gap-5 w-2/5">
            <div className="text-3xl text-black leading-snug">
              After Kia’s global re-brand, we reimagined Kia Canada’s website
              from an entirely new perspective.
            </div>
            <div className="flex items-center gap-2" role="button">
              <div className="text-xl font-bold hover:text-gray-300">
                View Project
              </div>
              <GoArrowRight className="text-3xl font-bold text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Project;
