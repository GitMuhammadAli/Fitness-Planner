import React, { useState, useEffect } from 'react';

const Model = ({ selectedCategory, workoutTypes, onSelectedItemsChange }) => {
  const [showModel, setShowModel] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleShowModel = () => {
    setShowModel(prevShowModel => !prevShowModel);
  };

  const getDisplayText = () => {
    if (selectedItems.length > 0) {
      return selectedItems.map(item => item.replaceAll("_", " ")).join(", ");
    }
    return selectedCategory.replaceAll("_", " ");
  };

  const handleItemClick = (item) => {
    let newSelectedItems;
  
    if (selectedCategory === "individual") {
      if (selectedItems.includes(item)) {
        newSelectedItems = selectedItems.filter(i => i !== item);
      } else if (selectedItems.length < 3) {
        newSelectedItems = [...selectedItems, item];
      } else {
        return;
      }
  
      if (newSelectedItems.length === 3) {
        toggleShowModel();
      }
    } else {
      newSelectedItems = [item];
      toggleShowModel();
    }
  
    setSelectedItems(newSelectedItems);
    onSelectedItemsChange(newSelectedItems);
  };

  useEffect(() => {
    setSelectedItems([]);
  }, [selectedCategory]);

  return (
    <div className="bg-neutral-950 border-[#946f6f] border border-solid py-4 rounded-lg flex flex-col justify-center items-center p-4">
      <button className="relative flex items-center justify-between w-full" onClick={toggleShowModel}>
        <p className="flex justify-center items-center w-full capitalize">
          {getDisplayText()}
        </p>
        <i className="fa-solid fa-circle-chevron-down"></i>
      </button>
      {showModel && (
        <div className="flex flex-col px-3 pb-3 py-3">
          {selectedCategory === "Select the Muscle Group" ? (
            <p className='capitalize bg-[#946f6f] rounded-md p-1' >Please select poison</p>
          ) : (
            <ul className='flex flex-col'>
              {workoutTypes.length > 0 ? (
                workoutTypes.map((type, index) => {
                  const item = selectedCategory === "individual" ? type.muscle_group : type.type;
                  const itemText = item ? item.replaceAll("_", " ") : "N/A";
                  const isSelected = selectedItems.includes(item);

                  return (
                    <button 
                      key={index} 
                      className={`uppercase hover:bg-[#946f6f] hover:px-2 hover:text-neutral-950 rounded-md duration-75 border-2 border-neutral-950  ${isSelected ? 'bg-[#946f6f] px-2 ' : ''}`}
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
