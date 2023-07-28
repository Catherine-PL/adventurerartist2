import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
     <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
              <h1 className="tablet:m-10 text-2xl text-bold">Contact.</h1>
              <p className="tablet:m-12 mt-2 text-neutral-400 laptop:text-xl w-full laptop:w-3/5 whitespace-pre-line">
                You can reach out to me on my social media or on my e-mail: katarzyna.kosiak2@gmail.com
              </p>
            </div>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
            <div className="mt-10">
              <Socials />
          </div>
      </div>
    </>
  );
};

export default Footer;
