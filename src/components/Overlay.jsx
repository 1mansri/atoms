import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <div className="logo">
            <img className="w-[4/5] flex text-center z-50" src="/images/megalith.png" alt="megalith logo" />
            {/* <div className="spinner">
              <div className="spinner__image -z-10" />
            </div> */}
          </div>
          <p className="intro__scroll">Scroll to Begin Your Adventure</p>
          <button
            className="explore bg-gray-100 "
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
          
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text text-center ">Hope you loved the journey so far... let’s explore further!</p>
        <button className="outro__button flex text-center bg-white px-4 py-2 rounded-full text-[#3535cc] font-semibold mt-6 hover:bg-[#3535cc] hover:text-white shadow-lg shadow-black active:shadow-none "
        onClick={() => { window.location.reload()}}
        >
          Explore Again
        </button>
      </div>
    </div>
  );
};