import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'
import HomeSurvey from '../components/HomeSurvey'
import ReusableButton from '../components/ReusableButton';
import SurveyList from '../components/SurveyList';
import { useStateContext } from '../contexts/ContextProvider'

function Surveys() {
   const {surveys}=useStateContext();
   console.log(surveys)
   const onDeleteClick=()=>{
      console.log("delete survey clicked")
   }
   return (
      <>
         <HomeSurvey title="Surveys" buttons={(
            <ReusableButton color='green' to='/surveys/create'>
               <PlusCircleIcon className='h-6 w-6 mr-2' />
               New Survey
            </ReusableButton>
         )}>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
         {surveys.map(survey=>(
            <SurveyList survey={survey} key={survey.id} onDeleteClick={onDeleteClick}/>
         ))}
         </div>
      </HomeSurvey>
      </>
   )
}

export default Surveys