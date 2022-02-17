import React from 'react';
import "./Profile.css";
import logo from '../../assets/Home/figura-mobile.svg';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='profile-details-name'>
                        <h1 className='primary-text'>
                            Hi, I’m Miguel 
                        </h1>
                </div>
                <div className='profile-details-role'>
                        <h2>
                            A passionate electronic engineer and web developer
                        </h2>
                </div>
                <img src={logo} className='hero-image'/>
                <div className='hero-button-float'>
                    <div className='hero-button-wrapper'>
                        <button className='float-button'>
                            LET'S TALK!
                        </button>

                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}
