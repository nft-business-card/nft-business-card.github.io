import Link from "next/link";
import React from "react";
import Image from "next/image";

const Team = () => {
    return (
        <div id="about" className="bg dark:bg-emerald-600 py-10 mt-16">
            <h4 className="mb-5 mt-5 font-mono text-5xl font-semibold text-center text-gray-100 uppercase">
                Designed and Developed By
            </h4>
            <div className="container relative max-w-6xl py-3 pt-16 mx-auto sm:max-w-xl sm:mx-auto">

                <div className="md:flex gap-8">
                    <div className="md:w-1/2 text-center mb-8 md:mb-0">
                        <img className="w-48 h-48 rounded-full mx-auto -mb-24" src="/profile/fatih.jpg" alt="Avatar Fatih" />
                        <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                            <h3 className="font-title text-gray-800 text-xl mb-3">
                                Fatih Yıldırım
                            </h3>
                            <p className="font-body mb-3">
                                Senior Software Developer
                            </p>
                            <a className="font-body text-blue-500 hover:text-gray-800" href="mailto:fatihyildirim93@gmail.com">
                                fatihyildirim93@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center">
                        <img className="w-48 h-48 rounded-full mx-auto -mb-24" src="/profile/nihat.jpg" alt="Avatar Nihat" />
                        <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                            <h3 className="font-title text-gray-800 text-xl mb-3">
                                Nihat Yılmaz Şimşek
                            </h3>
                            <p className="font-body mb-3">
                                Lead Blockchain Developer
                            </p>
                            <a className="font-body text-blue-500 hover:text-gray-800" href="mailto:nihatysimsek@gmail.com">
                                nihatysimsek@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;







