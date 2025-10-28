
import React, { useState } from 'react';
import {ArrowDownToLine,Check,Loader} from 'lucide-react';

const DownloadButton = ({handleDownload}) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [buttonText, setButtonText] = useState("Resume");

    const handleDownloadClick = () => {
        if (isDownloading) return;

        const timeout = getMSFromProperty("--dur", ":root");

        setIsDownloading(true);
        setButtonText("Downloading…");

        setTimeout(() => {
            setButtonText("Completed!");
        }, timeout * 0.9);

        setTimeout(() => {
            setIsDownloading(false);
            setButtonText("Resume");
        }, timeout + 1000);
    };

    function getMSFromProperty(property, selector) {
        const cs = window.getComputedStyle(document.querySelector(selector));
        const transDur = cs.getPropertyValue(property).trim();
        if (transDur.includes("ms")) return parseFloat(transDur);
        if (transDur.includes("s")) return parseFloat(transDur) * 1000;
        return 3000;
    }

    const renderIcon = () => {
        if (buttonText === "Resume") {
            return <ArrowDownToLine className='mt-[2px]' size={18}/>;
        } else if (buttonText === "Downloading…") {
            return <Loader className="animate-spin mt-[3px]" size={18}/>;
        } else if (buttonText === "Completed!") {
            return <Check className='mt-[1px]' size={13}/>;
        }
    };

    return (
        <div >
            <button
            aria-label='Resume download'
                className='flex items-center gap-2 px-3 py-2 bg-transparent border-2 border-[#a750e6]  text-white rounded-full cursor-pointer hover:bg-[#a750e6] hover:text-white 
             transition-all duration-300 transform '
                type="button"
                disabled={isDownloading}
                onClick={()=>{handleDownloadClick(); handleDownload()}}
            >
                <span>{renderIcon()}</span>
                <span>{buttonText}</span>
            </button>
        </div>
    );
};

export default DownloadButton;
