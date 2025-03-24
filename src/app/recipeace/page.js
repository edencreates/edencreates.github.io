"use client"
import CaseStudy from "@/components/CaseStudy/caseStudy";
import { useEffect } from "react";

export default function Recipeace() {
  /*useEffect(() => {
    const codeBody = document.querySelector('.edenCreates');
    const navBar = document.querySelector('.Navbar');

    codeBody.style.padding = '3% 0';
    codeBody.style.maxWidth = 'unset';
    codeBody.style.background = 'white';
    navBar.style.padding = '0 4.5%';
    document.querySelector('body').style.background = 'white'
    
  }, [])*/

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <style>
          {`body {
              background: #FFF !important;
            }
            .Navbar {
              padding: 0 4.5%;
            }
            .edenCreates {
              padding: 3% 0;
              max-width: unset;
            }
            .Footer {
              display: none;
            }`
          }
        </style>
        <CaseStudy/>
      </main>
    </div>
  );
}