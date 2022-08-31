import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HeadsetIcon from "@mui/icons-material/Headset";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Home = () => {
  //const [modal, setModal] = useState(false);
  const [modalVocal, setModalVocal] = useState(false);
  const [modalNetflix, setModalNetflix] = useState(false);
  const [modalHulu, setModalHulu] = useState(false);
  const [modalDisney, setModalDisney] = useState(false);

  const toggleVocal = () => setModalVocal(!modalVocal);
  const toggleNetflix = () => setModalNetflix(!modalNetflix);
  const toggleHulu = () => setModalHulu(!modalHulu);
  const toggleDisney = () => setModalDisney(!modalDisney);

  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Jfxs329H5weRiGDChdHLW-Usyft4JakF4Q&usqp=CAU')] bg-contain ">
        <Navbar />
        <main className="max-w-screen-2xl mx-auto  grid grid-cols-1 md:grid-cols-2 text-slate-300 h-fit pb-10 lg:h-80vh lg:pb-0">
          {/* left */}
          <div className="max-w-2xl pl-14 lg:pl-36 mt-40">
            <h1 className="text-3xl lg:text-4xl font-medium mt-5">
              Hello, My name is
            </h1>
            <h1 className="text-5xl lg:text-6xl font-medium mt-2 text-yellow-700 lg:pt-5">
              Arvin Vaje
            </h1>

            <h1 className="mt-3 lg:mt-5 text-lg">I am a Front End Developer</h1>
            <p className="mt-10 w-3/4">
              I'm open to learning, adapt to work with the team, freelance
              opportunities, contract jobs and use skills to solve complex UI
              challenges and provide value to the growth of an organization
            </p>

            <button className="bg-amber-800 p-2 rounded-md mt-10 px-4 hover:bg-amber-700">
              Hire Me
            </button>
          </div>

          {/* right */}
          <div className=" text-white relative hidden lg:block md:block">
            <div className="my-custom-style h-full w-full">
              <img
                className="absolute w-full h-full  object-cover "
                src="/myimage.jpg"
                alt=""
              />
            </div>
          </div>
        </main>
      </div>

      {/* about page */}
      <div
        id="about"
        className="h-fit md:fit lg:h-80vh 2xl:h-60vh bg-slate-800 text-slate-300 pb-10 md:pb-10"
      >
        <h4 className="text-5xl font-semibold text-center pt-12">About me</h4>
        <p className="text-center w-3/4 mx-auto mt-5 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis
          alias cum minus cupiditate, non autem neque inventore excepturi nemo
          molestias in aperiam consequuntur nostrum adipisci suscipit sit
          laborum corporis?
        </p>
        <img
          src="/myimage.jpg"
          alt=""
          className="h-96 mx-auto md:hidden rounded-3xl mt-5"
        />
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-2 mt-10 max-w-screen-2xl mx-auto text-lg p-5">
          {/* Personal Details */}
          <div>
            <h3>Personal Details</h3>
            <div className="flex space-x-10 mt-5 ">
              <div className="text-amber-600">
                <p>Birthdate </p>
                <p>Phone </p>
                

                <p>Job Status</p>
              </div>
              <div>
                <p>08-26-1984 </p>
                <p>09459854111 </p>
                

                <p>Freelance</p>
              </div>
            </div>
          </div>

          {/* Interest */}
          <div>
            <h3>My Interests</h3>

            <div className=" flex justify-around items-center mt-10">
              <span className=" bg-gray-900 rounded-lg p-2 ">
                <SportsEsportsIcon
                  fontSize="large"
                  className="h-10 w-10 lg:h-20 lg:w-20"
                />
              </span>
              <span className=" bg-gray-900 rounded-lg p-2 ">
                <HeadsetIcon
                  fontSize="large"
                  className="h-10 w-10 lg:h-20 lg:w-20"
                />
              </span>
              <span className=" bg-gray-900 rounded-lg p-2 ">
                <PedalBikeIcon
                  fontSize="large"
                  className="h-10 w-10 lg:h-20 lg:w-20"
                />
              </span>
              <span className=" bg-gray-900 rounded-lg p-2 ">
                <SportsMotorsportsIcon
                  fontSize="large"
                  className="h-10 w-10 lg:h-20 lg:w-20"
                />
              </span>
              <span className=" bg-gray-900 rounded-lg p-2 ">
                <CodeIcon
                  fontSize="large"
                  className="h-10 w-10 lg:h-20 lg:w-20"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 md:mt-40 lg:mt-40 border p-2 px-5 rounded-lg hover:bg-amber-800">
            Download CV{" "}
            <span>
              <DownloadIcon />
            </span>
          </button>
        </div>
      </div>

      {/* Projects */}

      <div className="bg-[url('https://t4.ftcdn.net/jpg/00/98/59/35/360_F_98593539_L3cNIqMZT511Qoz2DXe31xBAqMqPYdGj.jpg')] bg-contain h-fit bg:h-80vh text-slate-300">
        <div className="lg:max-w-max-w-screen-1350 mx-auto">
          <h1
            id="projects"
            className="text-5xl font-semibold text-center pt-12"
          >
            Projects
          </h1>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 p-5 lg:pb-40">
            <div
              className="w-full rounded overflow-hidden shadow-lg group"
              onClick={toggleVocal}
            >
              <img
                className="w-full h-44 group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="/vocal-media-picture.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Cloned vocal.media blogging site
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>

            <div
              className="w-full rounded overflow-hidden shadow-lg group"
              onClick={toggleNetflix}
            >
              <img
                className="w-full h-44 group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="/netflix-picture.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Cloned netflix website
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>

            <div
              className="w-full rounded overflow-hidden shadow-lg group"
              onClick={toggleHulu}
            >
              <img
                className="w-full h-44 group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="/hulu-picture.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Cloned Hulu website
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>

            <div
              className="w-full rounded overflow-hidden shadow-lg group"
              onClick={toggleDisney}
            >
              <img
                className="w-full h-44 group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="/disney-picture.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Cloned Disney website
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* vocal */}
      <div>
        <Modal isOpen={modalVocal} toggle={toggleVocal} centered size="lg">
          <ModalHeader toggle={toggleVocal}>Vocal Clone</ModalHeader>
          <ModalBody>
            <img src="/vocal-media-picture.png" alt="" />
            <p>I cloned vocal</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() =>
                openInNewTab("https://vocal-clone-firebase.vercel.app/")
              }
            >
              View Site
            </Button>
            <Button
              color="secondary"
              onClick={() =>
                openInNewTab("https://github.com/LOOKY03/vocal-clone")
              }
            >
              See Code
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      {/* netflix */}
      <div>
        <Modal isOpen={modalNetflix} toggle={toggleNetflix} centered size="lg">
          <ModalHeader toggle={toggleNetflix}>Netflix Clone</ModalHeader>
          <ModalBody>
            <img src="/netflix-picture.png" alt="" />
            <p>
              I used react js and styled component css in making this site. I
              incorporated redux toolkit in creating the site to manage global
              states. Also used firebase to do the authentication.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() =>
                openInNewTab("https://netflix-clone-build-98a86.web.app/")
              }
            >
              View Site
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() =>
                openInNewTab("https://github.com/LOOKY03/netflix-clone")
              }
            >
              See Code
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      {/* hulu clone */}
      <div>
        <Modal isOpen={modalHulu} toggle={toggleHulu} centered size="lg">
          <ModalHeader toggle={toggleHulu}>Hulu Clone</ModalHeader>
          <ModalBody>
            <img src="/hulu-picture.png" alt="" />
            <p>
              I used react js and styled component css in making this site. I
              followed a tutorial in making this website and added search
              functionality to look for videos.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleHulu}>
              View Site
            </Button>{" "}
            <Button color="secondary" onClick={toggleHulu}>
              See Code
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* disney clone */}

      <div>
        <Modal isOpen={modalDisney} toggle={toggleDisney} centered size="lg">
          <ModalHeader toggle={toggleDisney}>Disney Clone</ModalHeader>
          <ModalBody>
            <img src="/disney-picture.png" alt="" />
            <p>
              I used react js and styled component css in making this site. I
              followed a tutorial in making this website and added own sliding
              side panet when when viewed on smaller devices
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleDisney}>
              View Site
            </Button>{" "}
            <Button color="secondary" onClick={toggleDisney}>
              See Code
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* contacts page */}

      <div className="">
        <section className=" bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
              Contact Me
            </h2>

            <form action="#" className="space-y-8 max-w-7xl mx-auto">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-amber-800 sm:w-fit hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
