import Link from "next/link";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import heroRocketRacoon from "../public/hero-rocket-racoon.svg";
import bigCoin from "../public/big-filled-coin.png";
import mediumCoin from "../public/medium-filled-coin.png";
import smallCoin from "../public/small-filled-coin.png";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { BetaLabel } from "@/components/Navbar";
import { AllCoinsGallery } from "@/components/AllCoinsGallery";
import RadixMemeButton from "@/components/RadixMemeButton";

export default function Home() {
  return (
    <div className="h-fit w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute -z-10 inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <main>
        <div className="h-[calc(100lvh-20rem)] mt-16 md:pt-24 lg:pt-24 sm:pt-18 flex justify-around items-center mx-16 xl:mx-[4.5rem] 2xl:mx-20 px-8 2xl:px-20 gap-x-32">
          <div className="flex flex-col gap-8 items-center sm:items-start">
            <div className="list-inside list-decimal text-sm text-center sm:text-left ">
              <h1 className="relative font-[family-name:var(--font-londrina-solid)] text-8xl max-sm:text-6xl max-md:text-8xl md:text-8xl mb-4 font-black tracking-wider">
                RADIX.MEME
                <span className="absolute -top-6 right-0 text-base flex gap-x-2">
                  <span className="text-[20px] tracking-[2px] text-dexter-green-OG/80">
                    By DeXter
                  </span>
                  <BetaLabel text="STOKENET" additionalClasses="!text-[20px]" />
                </span>
              </h1>
              <p className="font-[family-name:var(--font-josefin-sans)] text-2xl max-sm:text-l max-md:text-2xl md:text-2xl md:mb-6 lg:mb-6 sm:mb-2 max-w-lg sm:max-w-sm md:max-w-md font-normal !leading-8">
                Instantly launch your coin with unlimited liquidity using a
                dynamic bonding curve.
              </p>
            </div>
            <div className="flex items-center flex-col sm:flex-row font-[family-name:var(--font-josefin-sans)]">
              <RadixMemeButton
                as={Link}
                href="/launch"
                text="Launch your token"
                icon={<HiMiniRocketLaunch />}
                className="md:mr-3 sm:mr-0 lg:mr-3"
                variant="cta"
              />
              <ModalWrapper />
            </div>
          </div>
          <HeroImages />
        </div>
        <div className="bg-dexter-grey-dark">
          <AllCoinsGallery />
        </div>

        <div className="grid max-sm:grid-cols-[3rem_1fr_3rem] max-md:grid-cols-[6rem_1fr_6rem] md:grid-cols-[8rem_1fr_8rem] w-full h-full">
          <div className="bg-dexter-grey-dark h-full"></div>
          <div className="flex flex-col items-center pt-8 pb-12 rounded-[20px] mb-5 border border-[#434343] ">
            <h3 className="max-sm:text-2xl sm:text-3xl font-[family-name:var(--font-londrina-solid)] opacity-90 tracking-widest mb-4">
              What are you waiting for?
            </h3>
            <RadixMemeButton
              as={Link}
              href="/launch"
              text="Launch your token"
              icon={<HiMiniRocketLaunch />}
            />
          </div>
          <div className="bg-dexter-grey-dark h-full"></div>
        </div>
      </main>
    </div>
  );
}

const ModalWrapper = () => {
  return (
    <Modal>
      <ModalTrigger>
        <RadixMemeButton
          as="span"
          text="How does it work ?"
          variant="secondary"
        />
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <div className="space-y-4 rounded-md text-center py-4 pb-8 sm:text-lg -mx-4">
            <p>
              <span className="text-dexter-green-OG">RADIX.MEME </span>
              prevents rugs by making sure that all created tokens are safe.{" "}
            </p>
            <p>
              Each coin on{" "}
              <span className="text-dexter-green-OG">RADIX.MEME </span>
              is a fair-launch with no presale and no team allocation.
            </p>
          </div>
          <ul className="text-justify flex flex-col gap-y-4 items-start justify-start max-w-sm mx-auto list-disc sm:text-lg">
            <li>pick a coin that you like (or launch your own!)</li>
            <li>buy the coin on the bonding curve</li>
            <li>sell at any time to lock in your profits or losses</li>
            <li>
              when enough people buy on the bonding curve it reaches a market
              cap of $69k
            </li>
            <li>
              $12k of liquidity is then deposited in ociswap to enable further
              trading.
            </li>
          </ul>
        </ModalContent>
        <ModalFooter className="gap-4 flex justify-center">
          <RadixMemeButton
            as={Link}
            href="/launch"
            text="I'm ready to pump!"
            icon={<HiMiniRocketLaunch />}
          />
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

const HeroImages = () => {
  return (
    <div className="relative w-96 h-96 max-xl:hidden mr-32">
      <Image
        src={bigCoin}
        alt="bigCoin"
        width={105}
        className="absolute top-4 left-20 animate-float"
      />
      <Image
        src={mediumCoin}
        alt="mediumCoin"
        width={75}
        className="absolute bottom-4 -right-2  animate-float"
      />
      <Image
        src={smallCoin}
        alt="smallCoin"
        className="absolute bottom-24 -left-8 2xl:-left-12 animate-float"
      />
      <Image
        src={heroRocketRacoon}
        alt="rocket"
        height={475}
        className="absolute animate-floatRocket top-10 left-6"
      />
    </div>
  );
};
