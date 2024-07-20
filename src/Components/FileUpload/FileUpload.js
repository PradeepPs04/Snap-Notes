import { FaFileUpload } from "react-icons/fa";

import './FileUpload.css';

function FileUpload() {
    return (
        <div className='fileUpload-container'>
            <p className="upload-para">
                Attach File
                <button className="btn">
                    <FaFileUpload /> 
                </button>
            </p>
        </div>
    );
}

export default FileUpload;