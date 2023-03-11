import { PhotoIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import HomeSurvey from '../components/HomeSurvey'

export default function SurveyView() {
    const [survey, setSurvey] = useState({
        title: "",
        slug: "",
        status: "",
        desc: "",
        image: null,
        image_url: null,
        expire_date: "",
        questions: [],
    })
    const onSubmit = () => {

    }
    const onImageChoose = () => {

    }
    return (
        <HomeSurvey title="New survey ...">
            <form action="" method="post" onSubmit={onSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6 w-15" >
                        {/* image */}
                        <div>
                            <label htmlFor="" className='block text-sm font-medium text=gray-700'>
                                photo
                            </label>
                            <div className="mt-1 flex items-center">
                                {survey.image_url && (
                                    <img src={survey.image_url} alt="" className='w-32 h-32 object-cover' />
                                )}
                                {!survey.image_url && (
                                    <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                        <PhotoIcon w-8 h-8 />
                                    </span>

                                )}
                                <button type='button' className="relative ml-5 ">Change
                                    <input type="file" className="absolute left-0,top-0,bottom-0,right-0" onChange={onImageChoose} />
                                </button>
                            </div>
                        </div>
                        {/* image */}
                        {/* title */}
                        <div class="mb-6 col-span-6 sm:col-span-3">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input
                                type="text"
                                id="title"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="title"
                                required
                                value={survey.title}
                                onChange={
                                    (ev) => setSurvey({
                                        ...survey, title: ev.target.value
                                    })
                                }
                            />
                        </div>
                        {/* title */}
                        {/* desc */}
                        <div class="mb-6 col-span-6 sm:col-span-3">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            <div />
                            {/* desc */}
                        </div>
                    </div>
                </div>
            </form>
        </HomeSurvey>
    )
}
