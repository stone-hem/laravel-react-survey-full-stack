import React from 'react'

import { ArrowTopRightOnSquareIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import ReusableButton from './ReusableButton'

export default function SurveyList({ survey,onDeleteClick }) {
    return (
        <div className='flex flex-col py-4 px-6 shadow-md '>
            <img src={survey.image_url} alt={survey.title} className='w-full h-48 object-cover' />
            <h4>{survey.title}</h4>
            <p>{survey.desc}</p>
            <div className="flex justify-between items-center mt-3">
                <ReusableButton to={`surveys/${survey.id}`} color="indigo">
                    <PencilIcon className='w-5 h-5 mr-2' />
                    Edit
                </ReusableButton>
                <div className="flex items-center">
                    <ReusableButton href={`/view/surveys/${survey.slug}`} circle link>
                        <ArrowTopRightOnSquareIcon className='w-5 h-5i8' />
                        
                    </ReusableButton>
                    {survey.id && (
                        <ReusableButton onClick={onDeleteClick} circle link color='red'>
                            <TrashIcon className='w-5 h-5 ' />
                            
                        </ReusableButton>
                    )}
                </div>

            </div>
        </div>
    )
}
