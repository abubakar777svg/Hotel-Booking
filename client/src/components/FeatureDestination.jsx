import React from "react";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeatureDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Destination"
        subTitle="Discover the best places to visit"
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard room={room} index={index} key={room._id} />
        ))}
      </div>
      <button
        className="bg-[#49B9FF] text-white px-6 py-2 rounded-full mt-8 cursor-pointer"
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeatureDestination;
