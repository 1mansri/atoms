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
          <h1 className="w-full logo">
            <img className=" flex text-center" src="/images/megalith.png" alt="megalith logo" />
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Explore to Begin Your Adventure</p>
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
        <button className="outro__button flex text-center bg-white px-3 py-2 rounded-full text-[#3535cc] font-semibold mt-6" >
          Explore More
        </button>
      </div>
    </div>
  );
};