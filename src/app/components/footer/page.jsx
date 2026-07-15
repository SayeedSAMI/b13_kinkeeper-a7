import Image from 'next/image';
import React from 'react';
// import footerlogo from 
const FooterPage = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center text-white text-base-content  p-10 bg-[#244D3F]">

                <nav>
                    <Image className='mb-4 mt-15' width={350} height={150} src='/assets/icon/logo-xl.png' alt='KinKeeper Logo'></Image>
                    <p className='opacity-50 mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h1 className='text-2xl font-medium opacity-80'>Social Links</h1>
                    <div className="grid grid-flow-col gap-4 mb-5">

                        <a href='https://www.instagram.com/programming_heroes_/?utm_source=chatgpt.com' target='_blank'>
                            <Image src='/assets/icon/instagram.png' alt='Instragram link' width={30} height={30}></Image>
                        </a>
                        <a href='https://www.facebook.com/programmingHero/?utm_source=chatgpt.com' target='_blank'>
                            <Image src='/assets/icon/facebook.png' alt='Instragram link' width={30} height={30}></Image>
                        </a>
                        <a href='https://x.com/ProgrammingHero?utm_source=chatgpt.com' target='_blank'>
                            <Image src='/assets/icon/twitter.png' alt='Instragram link' width={30} height={30}></Image>
                        </a>
                    </div>
                </nav>
                <aside className='flex lg:flex-row md:flex-col flex-col-reverse lg:gap-76 gap-4 opacity-50'>
                    <p className=''>Copyright © {new Date().getFullYear()} - 2026 KeenKeeper. All rights reserved.</p>
                    <div className="grid grid-flow-col gap-4">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>
                </aside>
            </footer>
        </div>
    );
};

export default FooterPage;