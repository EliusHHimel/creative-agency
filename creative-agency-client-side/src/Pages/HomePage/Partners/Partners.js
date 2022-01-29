import React from 'react';
import google from "../../../images/logos/google.png";
import airbnb from "../../../images/logos/airbnb.png";
import slack from "../../../images/logos/slack.png";
import netflix from "../../../images/logos/netflix.png";
import uber from "../../../images/logos/uber.png";

const Partners = () => {
    return (
        <div>
            <center>
                <div className="py-8 px-5 lg:flex justify-center">
                    <img className='m-10 w-2/4 lg:w-24' src={slack} alt="" />
                    <img className='m-10 w-2/4 lg:w-24' src={google} alt="" />
                    <img className='m-10 w-2/4 lg:w-24' src={uber} alt="" />
                    <img className='m-10 w-2/4 lg:w-24' src={netflix} alt="" />
                    <img className='m-10 w-2/4 lg:w-24' src={airbnb} alt="" />
                </div>
            </center>
        </div>
    );
};

export default Partners;