import React from 'react'

const data = {
    "form": {
        "section": [
            {
                "order": 1,
                "section_title": "Sign-in",
                "fields": [
                {
                    "name": "username",
                    "label": "Username",
                    "required": true,
                    "type": "string",
                    "html_element": "textbox",
                },
                {
                    "name": "email",
                    "label": "Email",
                    "hidden": false,
                    "required": true,
                    "type": "string",
                    "html_element": "email",
                },
                {
                    "name": "password",
                    "label": "Password",
                    "required": true,
                    "type": "string",
                    "html_element": "password",
                }
            ]
            }
        ]
    }
}

function Login() {
    const onSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            {
                data.form.section.map(formData => {
                    console.log("formData", formData)
                    return(
                        <div>
                            <h1>{formData.section_title}</h1>
                            {
                                formData.fields.map(inputData => {
                                    console.log("inputData", inputData)
                                    return(
                                        <div className='mb-3'>
                                            <label className='form-label'>{inputData.label}</label>
                                            <input type={inputData.html_element} name={inputData.name} required={inputData.required} datatype={inputData.type}/>

                                        </div>
                                  )
                                })
                            }
                        </div>
                    )
                })
            }
            <button type='onSubmit'>Submit</button>
        </form>
    </div>
  )
}

export default Login
