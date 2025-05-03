'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import Logo from '../../images/Logo-removebg-preview.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Card({ imageSrc, imageAlt }: {
    imageSrc: StaticImageData, imageAlt: string
}) {
    return (
        <div className="relative w-[300px] h-[300px] flex flex-col rounded-2xl bg-white m-6 shadow-lg overflow-hidden font-sans">
            {/* Header Image */}
            <div className="h-1/2 w-full bg-gradient-to-br from-white to-pink-300">
                <Image
                    alt={imageAlt}
                    src={imageSrc}
                    className="h-full w-full rounded-t-2xl"
                />
            </div>

            {/* Logo */}
            <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center right-1 top-[calc(50%-57px)]">
                <Image
                    alt="Lá-tte"
                    src={Logo}
                    className="rounded-full"
                />
            </div>

            {/* Title */}
            <a className="mt-8 font-medium text-lg text-black">Cameron Williamson
                <i className="bi bi-chevron-right" />
            </a>

            {/* Subtitle */}
            <p className="mt-2 font-normal text-sm text-gray-500">Web Development</p>
        </div>
    )
}