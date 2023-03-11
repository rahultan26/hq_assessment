import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react';
import api_data from "../api/db.json"




export default function Jobtitles() {
    const [availableJobTitles, setAvailableJobTitles] = React.useState([])
    const [selectedJobTitles, setSelectedJobTitles] = React.useState([])
    const [jobTitleSuggestions, setJobTitleSuggestions] = React.useState([])
    const [availableSkills, setAvailaleSkills] = React.useState([])
    const [selectedSkills, setSelectedSkills] = React.useState([])

    React.useEffect(() => {
        setAvailableJobTitles(Object.keys(api_data))
    }, [])

    React.useEffect(() => {
        let final_skills = []
        selectedJobTitles.forEach((item) => {
            let skills = api_data[item]["skills"]
            console.log(skills)
            final_skills = [...final_skills, ...skills]
        })
        setAvailaleSkills(final_skills)
    }, [selectedJobTitles])

    const handleSkillClick = (new_skill) => {
        setSelectedSkills([...selectedSkills, new_skill])
    }


    return (

        <div  style={{ padding: "1rem", maxWidth: "50vw", margin: "0px auto" }}>
            <div>
                <h3 style={{ color: "black" }}>Job Title</h3>
                <Multiselect
                    isObject={false}
                    selectedValues={selectedJobTitles}
                    onSelect={(selected_list, selected_item) => {
                        console.log("job title select changes: ", selected_list, selected_item)
                        setSelectedJobTitles(selected_list);
                        setJobTitleSuggestions(api_data[selected_item]["related_jobs"])
                    }}
                    onRemove={(selected_list, selected_item) => {
                        console.log("job title remove changes: ", selected_list, selected_item)
                        setSelectedJobTitles(selected_list)
                        setJobTitleSuggestions(selected_list)
                    }}
                    options={availableJobTitles}

                />
            </div>
            <div className='pin-container'>
                {jobTitleSuggestions.map((item, index) =>
                    <div className="pins">
                        {item}
                    </div>
                )}
            </div>
            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                <div className="app">
                    <h3 style={{ color: "black" }}>Skills:</h3>
                    <Multiselect
                        isObject={false}
                        selectedValues={selectedSkills}
                        onSelect={(selected_list, selected_item) => {
                            console.log("skill add changes: ", selected_list, selected_item)
                            setSelectedSkills(selected_list)
                        }}
                        onRemove={(selected_list, selected_item) => {
                            console.log("skill remove changes: ", selected_list, selected_item)
                            setSelectedSkills(selected_list)
                        }}
                        options={availableSkills}

                    />
                    <div className='pin-container'>
                        {availableSkills && availableSkills.map((item, index) =>
                            <div onClick={() => handleSkillClick(item)} className="pins">
                                {item}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    )

}