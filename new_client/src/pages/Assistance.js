import Logo from "../assets/homeLogo.svg";
import PlayerLogo from "../assets/playerLogo.svg";
import Api from "../utils/Api/Api.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { responseErrorHandler } from "../utils/Api/Api.js";
import Loader from "../components/Loader/Loader";

let google;

const Home = () => {
  const [assistanceRequest, setAssistanceRequest] = useState();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let t = 300;

  const completeAssistanceRequest = async () => {
    const toastElement = toast.loading("Completing Assistance Request");
    try {
      const response = await Api.assistance.completeAssistanceRequest();
      let { message } = response.data;
      toast.update(toastElement, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: true,
      });
      setAssistanceRequest(null);
    } catch (error) {
      responseErrorHandler(error, toastElement);
    }
  }

  const requestAssistance = async () => await navigator.geolocation.getCurrentPosition(async (position) => {
    const toastElement = toast.loading("Requesting Assistance");
    try {
      const { latitude, longitude } = position.coords;
      const response = await Api.assistance.createAssistanceRequest({ latitude, longitude });
      let { message, assistanceRequest } = response.data;
      setAssistanceRequest(assistanceRequest);
      toast.update(toastElement, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: true,
      });
    } catch (error) {
      responseErrorHandler(error, toastElement);
    }
  });

  const assist = async () => await navigator.geolocation.getCurrentPosition(async (position) => {
    const toastElement = toast.loading("Assisting");
    try {
      const { latitude, longitude } = position.coords;
      const response = await Api.assistance.acceptAssistanceRequest({ latitude, longitude });
      let { message, assistanceRequest } = response.data;
      setAssistanceRequest(assistanceRequest);
      toast.update(toastElement, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: true,
      });
    } catch (error) {
      responseErrorHandler(error, toastElement);
    }
  });

  useEffect(() => {
    const Interval = setInterval(async () => {
      try {
        let utterance = new SpeechSynthesisUtterance(`Volunteer arriving in ${parseInt(t / 60)} minutes`);
        t -= 30;
        speechSynthesis.speak(utterance);
        // await navigator.geolocation.getCurrentPosition(async (position) => {
        //   const { latitude, longitude } = position.coords;
        //   console.log("position", position, );
        //   if (user?.status === "disablility") {
        //     if (assistanceRequest?.currentStatus === "Pending") {
        //       let utterance = new SpeechSynthesisUtterance("Finding a near by volunteer for you");
        //       speechSynthesis.speak(utterance);
        //     } else {
        //       var origin = new google.maps.LatLng(latitude, longitude);
        //       var destination = new google.maps.LatLng(assistanceRequest.assignedUserlocation.coordinates[0],
        //         assistanceRequest.assignedUserlocation.coordinates[1]);

        //       var service = new google.maps.DistanceMatrixService();
        //       service.getDistanceMatrix(
        //         {
        //           origins: [origin],
        //           destinations: [destination],
        //           travelMode: 'DRIVING',
        //           avoidHighways: false,
        //           avoidTolls: true,
        //         }, callback);

        //       function callback(response, status) {
        //         // See Parsing the Results for
        //         // the basics of a callback function.
        //         console.log(response, status);
        //         let utterance = new SpeechSynthesisUtterance("Volunteer arriving soon");
        //         speechSynthesis.speak(utterance);
        //       }
        //     }
        //     if (user?.status === "no-disability" && assistanceRequest?.currentStatus === "Assigned") {
        //       await Api.assistance.updateLocation({ latitude, longitude });
        //     }
        //   }
        // });
      } catch (e) {
        console.log(e);
      }
    }, 20000);

    const init = async () => {
      const toastElement = toast.loading("Fetching Current Assistance Request");
      try {
        const response = await Api.assistance.getAssistanceRequest();
        let { message, assistanceRequest, user } = response.data;
        console.log(assistanceRequest, user);
        setAssistanceRequest(assistanceRequest);
        setUser(user);
        toast.update(toastElement, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: true,
        });
      } catch (error) {
        responseErrorHandler(error, toastElement);
      }
      setIsLoading(false);
    };
    return init();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <section className="text-gray-700 body-font lg:mx-10 sm:mx-2">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Logo}
              height="410"
              width="512"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">One-Stop Ecosystem htmlFor </span>{' '}
                <span className="block text-indigo-600 xl:inline">Athletes, Clubs and Investors</span>
              </h1>
              <p className="mt-3 text-xs text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                Over the years, only sport club owners and managers could make profit from their investments and now KheloFi plathtmlForm builds an ecosystem htmlFor the sports and crypto world, offering sports fans innovative ways to invest in the sports market with blockchain technology.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {!assistanceRequest &&
                  (
                    user.status === "disability" ?
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          onClick={requestAssistance}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                          Request Assistance
                        </button>
                      </div>
                      :
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          onClick={assist}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                          Assist
                        </button>
                      </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        assistanceRequest?.currentStatus === "Assigned" &&
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyAtRKg-RmzxtLZP_St3aCAjM_2EfcZeb8M&origin=${assistanceRequest.assignedUserlocation.coordinates[0]},${assistanceRequest.assignedUserlocation.coordinates[1]}&destination=${assistanceRequest.userlocation.coordinates[0]},${assistanceRequest.userlocation.coordinates[1]}&avoid=tolls`} style={{ filter: "grayscale(0.3) contrast(1.2) opacity(0.4)Name" }}></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              {user.status === "no-disability" &&
                <>
                  <button onClick={completeAssistanceRequest} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Complete Assistance</button>
                  <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </>
              }
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default Home;
