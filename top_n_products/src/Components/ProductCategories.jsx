import React from 'react';
import img1 from "../Images/med.jpg";
import img2 from "../Images/med.jpg";

export default function Categories() {
    return (
        <div className='grid-wrapper'>
            <h3 className='text'>Categories</h3>
            <hr />
            <div className='grid-container'>
                <div className='box1'>
                    <img
                        src={img1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                    
                </div>
                <div className='box1'>
                    <img
                        src={img2}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
                <div className='box1'>
                    <img
                        src={img1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
                <div className='box1'>
                    <img
                        src={img2}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
                <div className='box1'>
                    <img
                        src={img1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
                <div className='box1'>
                    <img
                        src={img2}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
                <div className='box1'>
                    <img
                        src={img1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
                <div className='box1'>
                    <img
                        src={img2}
                        alt="First slide"
                        style={{ objectFit: 'cover' }} />
                    <a href='#' className='btn'>stethoscope</a>
                </div>
            </div>
        </div>
    )
}
