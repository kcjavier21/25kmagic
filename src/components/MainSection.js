import React from 'react';
import '../App.css';
import { Button } from './Buttons/Button';
import { Button2 } from './Buttons/Button2';
import './MainSection.css';
import vidbg from './vids/vid-bg.mp4';

function MainSection() {
    return (
        <div className='main-container' id='home'>
            <video src={vidbg} autoPlay loop />
                <svg width="1150" height="140" viewBox="0 0 230 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.582 19.1953C18.582 20.7891 18.1777 22.207 17.3691 23.4492C16.5605 24.6797 15.3945 25.6406 13.8711 26.332C12.3477 27.0117 10.5605 27.3516 8.50977 27.3516C6.79883 27.3516 5.36328 27.2344 4.20312 27C3.04297 26.7539 1.83594 26.332 0.582031 25.7344V19.5469C1.90625 20.2266 3.2832 20.7598 4.71289 21.1465C6.14258 21.5215 7.45508 21.709 8.65039 21.709C9.68164 21.709 10.4375 21.5332 10.918 21.1816C11.3984 20.8184 11.6387 20.3555 11.6387 19.793C11.6387 19.4414 11.5391 19.1367 11.3398 18.8789C11.1523 18.6094 10.8418 18.3398 10.4082 18.0703C9.98633 17.8008 8.84961 17.25 6.99805 16.418C5.32227 15.6562 4.0625 14.918 3.21875 14.2031C2.38672 13.4883 1.76562 12.668 1.35547 11.7422C0.957031 10.8164 0.757812 9.7207 0.757812 8.45508C0.757812 6.08789 1.61914 4.24219 3.3418 2.91797C5.06445 1.59375 7.43164 0.931641 10.4434 0.931641C13.1035 0.931641 15.8164 1.54688 18.582 2.77734L16.4551 8.13867C14.0527 7.03711 11.9785 6.48633 10.2324 6.48633C9.33008 6.48633 8.67383 6.64453 8.26367 6.96094C7.85352 7.27734 7.64844 7.66992 7.64844 8.13867C7.64844 8.64258 7.90625 9.09375 8.42188 9.49219C8.94922 9.89062 10.3672 10.6172 12.6758 11.6719C14.8906 12.668 16.4258 13.7402 17.2812 14.8887C18.1484 16.0254 18.582 17.4609 18.582 19.1953ZM33.998 6.62695C32.3457 6.62695 31.0566 7.30664 30.1309 8.66602C29.2051 10.0137 28.7422 11.877 28.7422 14.2559C28.7422 19.2012 30.623 21.6738 34.3848 21.6738C35.5215 21.6738 36.623 21.5156 37.6895 21.1992C38.7559 20.8828 39.8281 20.502 40.9062 20.0566V25.9277C38.7617 26.877 36.3359 27.3516 33.6289 27.3516C29.75 27.3516 26.7734 26.2266 24.6992 23.9766C22.6367 21.7266 21.6055 18.4746 21.6055 14.2207C21.6055 11.5605 22.1035 9.22266 23.0996 7.20703C24.1074 5.19141 25.5488 3.64453 27.4238 2.56641C29.3105 1.47656 31.5254 0.931641 34.0684 0.931641C36.8457 0.931641 39.5 1.53516 42.0312 2.74219L39.9043 8.20898C38.9551 7.76367 38.0059 7.38867 37.0566 7.08398C36.1074 6.7793 35.0879 6.62695 33.998 6.62695ZM61.7012 27L60.4355 22.1836H52.0859L50.7852 27H43.1562L51.541 1.19531H60.8047L69.2949 27H61.7012ZM58.9941 16.4883L57.8867 12.2695C57.6289 11.332 57.3125 10.1191 56.9375 8.63086C56.5742 7.14258 56.334 6.07617 56.2168 5.43164C56.1113 6.0293 55.9004 7.01367 55.584 8.38477C55.2793 9.75586 54.5938 12.457 53.5273 16.4883H58.9941ZM96.5586 27H87.4531L78.0664 8.89453H77.9082C78.1309 11.7422 78.2422 13.916 78.2422 15.416V27H72.0898V1.30078H81.1602L90.5117 19.1602H90.6172C90.4531 16.5703 90.3711 14.4902 90.3711 12.9199V1.30078H96.5586V27ZM133.42 27H125.58L120.5 17.1738L118.443 18.4043V27H111.465V1.30078H118.443V12.4629C118.795 11.7715 119.504 10.6758 120.57 9.17578L125.967 1.30078H133.561L125.457 12.8145L133.42 27Z" fill="white"/>
                        <path d="M160.684 27H151.578L142.191 8.89453H142.033C142.256 11.7422 142.367 13.916 142.367 15.416V27H136.215V1.30078H145.285L154.637 19.1602H154.742C154.578 16.5703 154.496 14.4902 154.496 12.9199V1.30078H160.684V27ZM190.285 14.1152C190.285 18.4395 189.225 21.7266 187.104 23.9766C184.982 26.2266 181.877 27.3516 177.787 27.3516C173.756 27.3516 170.662 26.2207 168.506 23.959C166.361 21.6973 165.289 18.4043 165.289 14.0801C165.289 9.80273 166.355 6.53906 168.488 4.28906C170.633 2.02734 173.744 0.896484 177.822 0.896484C181.912 0.896484 185.012 2.01563 187.121 4.25391C189.23 6.49219 190.285 9.7793 190.285 14.1152ZM172.602 14.1152C172.602 19.084 174.33 21.5684 177.787 21.5684C179.545 21.5684 180.846 20.9648 181.689 19.7578C182.545 18.5508 182.973 16.6699 182.973 14.1152C182.973 11.5488 182.539 9.65625 181.672 8.4375C180.816 7.20703 179.533 6.5918 177.822 6.5918C174.342 6.5918 172.602 9.09961 172.602 14.1152ZM222.682 27H214.473L212.012 15.8027C211.895 15.334 211.707 14.4023 211.449 13.0078C211.203 11.6133 211.021 10.4473 210.904 9.50977C210.811 10.2715 210.658 11.2207 210.447 12.3574C210.236 13.4824 210.025 14.5195 209.814 15.4688C209.615 16.418 208.766 20.2617 207.266 27H199.057L192.693 1.30078H199.391L202.186 14.1855C202.818 17.0332 203.252 19.3008 203.486 20.9883C203.639 19.793 203.908 18.1699 204.295 16.1191C204.693 14.0684 205.062 12.3691 205.402 11.0215L207.67 1.30078H214.104L216.301 11.0215C216.676 12.5801 217.057 14.3789 217.443 16.418C217.83 18.457 218.088 19.9805 218.217 20.9883C218.369 19.6875 218.785 17.4316 219.465 14.2207L222.312 1.30078H229.01L222.682 27Z" fill="#FFE5C4"/>
                    </svg>
                <p> Gather and share latest information with ease. </p>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    SIGN-IN 
                </Button>
                <Button2 className='btns2' buttonStyle='btn--primary' buttonSize='btn--large'>
                    SIGN-UP
                </Button2>
            </div>
        </div>
    );
}

export default MainSection;