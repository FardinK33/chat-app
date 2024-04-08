import React from "react";

const GenderCheckbox = ({ handleCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary"
            checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
