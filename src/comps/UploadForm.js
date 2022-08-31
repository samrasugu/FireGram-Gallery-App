import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler = (e) => {

        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        }
        else {
            setFile(null);
            setError("Please select an image file (png or jpeg or jpg)");
        }

    }
  return (
    <>
        <form>
            <label htmlFor='image'>
                <span style={{fontSize: 35, fontWeight: "900"}}>+</span>
            </label>
            <input type='file' name='image' id="image"onChange={changeHandler} style={{display:"none"}}/>
                
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    </>
  )
}

export default UploadForm