import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Img, Text } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Aadesh's Application4</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full p-[45px] md:p-5 bg-gradient1">
        <div className="w-full mb-4 p-[11px] mx-auto md:p-5 bg-white-A700 shadow-sm max-w-[1003px] rounded-[22px]">
          <div className="flex p-8 sm:p-5 bg-gradient rounded-[28px]">
            <div className="flex flex-col items-center w-[82%] mb-[46px] ml-[98px]">
              <Text as="p" className="flex tracking-[1.58px]">
                <span className="text-black-900 font-semibold">Welcome to </span>
                <span className="text-transparent font-semibold bg-gradient2 bg-clip-text">LegalBodh</span>
              </Text>
              <Img src="images/img_pngtree_court_s.png" alt="pngtreecourts" className="w-[27%] mt-[5px] object-cover" />
              <Input
                shape="round"
                type="text"
                name="name"
                placeholder="Name"
                suffix={<Img src="images/img_icroundmarkemailread.svg" alt="ic:round-mark-email-read" />}
                className="self-stretch mt-[22px] gap-[35px] sm:pr-5 tracking-[7.94px]"
              />
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Email"
                suffix={<Img src="images/img_ionperson.svg" alt="ion:person" />}
                className="self-stretch mt-[45px] gap-[35px] sm:pr-5 tracking-[7.94px]"
              />
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder="Password"
                suffix={<Img src="images/img_rilockpasswordfill.svg" alt="ri:lock-password-fill" />}
                className="self-stretch mt-[45px] gap-[35px] sm:pr-5 tracking-[6.92px]"
              />
              <div className="self-stretch h-[82px] mt-[45px] relative">
                <Img
                  src="images/img_rilockpasswordfill.svg"
                  alt="rilock_one"
                  className="h-[42px] w-[42px] mr-[33px] right-[5%] bottom-0 top-0 my-auto absolute"
                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder="Re-enter Password"
                  className="w-full left-0 bottom-0 right-0 top-0 m-auto tracking-[6.92px] absolute"
                />
              </div>
              <Button shape="round" className="mt-[51px] sm:px-5">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
