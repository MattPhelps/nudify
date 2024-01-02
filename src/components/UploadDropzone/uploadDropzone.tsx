import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import siteConfig from "../../../siteConfig";

const UploadDropzone = ({ onFileUpload }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Here you can handle the file upload process.
        onFileUpload(acceptedFiles);
    }, [onFileUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="border-dashed border-2 border-gray p-10">
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop your image here ...</p> :
                <p>Drag and drop an image</p>
            }
            <br></br>
            <button
            type="button"
            style={{ "--main-color": siteConfig.buttonColor } as any}
            className="button-styling bg-blue-500 inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
                Upload an Image
            </button>
        </div>
    );
};

export default UploadDropzone;
