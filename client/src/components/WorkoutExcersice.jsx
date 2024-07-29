import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExcersiceCard';

export default function WorkoutExercise({ data }) {
  console.log("data from workout exercise", data);

  const isUpperLower = data.includes('upper_lower');

  return (
    <SectionWrapper id={'MakeWorkout'} header={"Welcome to"} title={['The', 'DANGER', 'zone']}>
      <div className='flex flex-col gap-4'>
        {isUpperLower ? (
          <p className='flex justify-center items-center px-8 mx-auto py-4 rounded-lg bg-neutral-950 text-lg font-semibold w-full'>
            Coming Soon
          </p>
        ) : (
          data && data.length > 0 ? (
            data.map((exercise, i) => (
              <ExerciseCard i={i} exercise={exercise} key={i} />
            ))
          ) : (
            <p className='flex justify-center items-center px-8 mx-auto py-4 rounded-lg bg-neutral-950 text-lg font-semibold w-full'>
              No exercises found
            </p>
          )
        )}
      </div>
    </SectionWrapper>
  );
}
