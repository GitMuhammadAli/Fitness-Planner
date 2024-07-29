import React, { useState, useEffect } from 'react';

const Model = ({ Workout, workoutTypes, onMuscleChange }) => {
  const [showModel, setShowModel] = useState(false);
  const [Muscle, setMuscle] = useState([]);

  const toggleShowModel = () => {
    setShowModel(prevShowModel => !prevShowModel);
  };

  const getDisplayText = () => {
    if (Muscle.length > 0) {
      return Muscle.map(item => item.replace(/_/g, " ")).join(", ");
    }
    return Workout.replace(/_/g, " ");
  };

  const handleItemClick = (item) => {
    let newMuscle;

    if (Workout === "individual") {
      if (Muscle.includes(item)) {
        newMuscle = Muscle.filter(i => i !== item);
      } else if (Muscle.length < 3) {
        newMuscle = [...Muscle, item];
      } else {
        return;
      }

      if (newMuscle.length === 3) {
        toggleShowModel();
      }
    } else {
      newMuscle = [item];
      toggleShowModel();
    }

    setMuscle(newMuscle);
    onMuscleChange(newMuscle);
  };

  useEffect(() => {
    setMuscle([]);
  }, [Workout]);

  return (
    <div className="bg-neutral-950 border-[#946f6f] border border-solid py-1 rounded-lg flex flex-col justify-center items-center p-4">
      <button 
        className="relative flex items-center justify-between w-full py-4 rounded-lg text-sm sm:text-base transition-all duration-150 ease-in-out focus:outline-none"
        onClick={toggleShowModel}
      >
        <p className="flex justify-center items-center w-full capitalize text-[#946f6f]">
          {getDisplayText()}
        </p>
        <i className={`fa-solid ${showModel ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
      {showModel && (
        <div className="flex flex-col px-3 pb-3 py-3">
          {Workout === "Select the Muscle Group" ? (
            <p className='capitalize bg-[#946f6f] text-neutral-950 rounded-md p-1'>Please select a muscle group</p>
          ) : (
            <ul className='flex flex-col gap-2'>
              {workoutTypes.length > 0 ? (
                workoutTypes.map((type, index) => {
                  const item = Workout === "upper_lower" ? type.type : type.muscle_group;
                  const itemText = item ? item.replace(/_/g, " ") : "N/A";
                  const isSelected = Muscle.includes(item);

                  return (
                    <button 
                      key={index} 
                      className={`capitalize py-2 px-4 rounded-md text-sm sm:text-base transition-all duration-150 ease-in-out border-2 border-neutral-950  ${
                        isSelected ? 'bg-[#946f6f] text-neutral-950' : 'bg-neutral-950 text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950'
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      {itemText}
                    </button>
                  );
                })
              ) : (
                <p>No workout types available</p>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Model;
