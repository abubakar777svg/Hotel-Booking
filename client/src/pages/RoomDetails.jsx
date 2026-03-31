import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    roomsDummyData.find(
      (room) =>
        room._id === id && setRoom(room) && setMainImage(room.images[0]),
    );
  }, []);
  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* room details */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room?.hotel?.name}{" "}
          <span className="font-light text-xs">{room?.roomType}</span>
        </h1>
        <p>20% Off</p>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <img src={assets.starIconFilled} alt="" /> 200+ Reviews
      </div>
      {/*  room address */}
      <div>
        <p className="text-sm text-gray-500/90 mt-2">{room?.hotel?.address}</p>
      </div>
      {/* room images */}
      <div>
        <div>
          <img
            src={mainImage}
            className="w-full rounded-xl shadow-lg object-cover mt-1"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-2 mt-2 mb-2">
          {room?.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index}
              src={image}
              className="w-1/4 rounded-xl shadow-lg object-cover mt-1"
              alt=""
            />
          ))}
        </div>
      </div>

      {/* room highlights */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience luxury like never before
          </h1>
          <div>
            {room?.amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
              >
                <img src={facilityIcons[item]} className="w-5 h-5" alt="" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* room price */}
        <p className="text-2xl font-medium">${room?.pricePerNight}</p>
      </div>

      {/* check in and check out form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="font-medium">
            Check In
          </label>
          <input
            type="date"
            id="checkInDate"
            placeholder="Check In"
            required
            className="w-full rounded-xl border border-gray-300 px-3 py-2 mt-1.5 outline-none"
          />
        </div>
        <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="font-medium">
            Check Out
          </label>
          <input
            type="date"
            id="checkOutDate"
            placeholder="Check Out"
            required
            className="w-full rounded-xl border border-gray-300 px-3 py-2 mt-1.5 outline-none"
          />
        </div>
        <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
        <div className="flex flex-col">
          <label htmlFor="guests" className="font-medium">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            placeholder="0"
            required
            className="max-w-20 rounded-xl border border-gray-300 px-3 py-2 mt-1.5 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull active:scale-95 transition-all md:px-25 py-3 md:p-4 text-base cursor-pointer"
        >
          Check Availabity
        </button>
      </form>

      {/* more details */}

      <div>
        {roomCommonData.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <img src={item.icon} className="w-5 h-5" alt="" />
            <div>
              <p className="text-base">{item.title}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quia
          laboriosam! Velit libero soluta in suscipit reprehenderit adipisci
          laborum rerum voluptatibus impedit molestiae veniam repellendus,
          illum, quaerat ut quos culpa officiis, laudantium quis esse fugiat!
        </p>
      </div>
    </div>
  );
};

export default RoomDetails;
