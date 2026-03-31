import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title={"My Bookings"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempore vero. Iure"
        }
        align={"left"}
      />
      <div>
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payments</div>
        </div>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* hotel details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt="hotel_img"
                className="md:w-44 rounded-xl shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 md:mt-3 md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                  <span className="font-medium text-sm">
                    {booking.room.roomType}
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    src={assets.locationIcon}
                    alt="location_icon"
                    className="w-4 h-4"
                  />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img
                    src={assets.guestsIcon}
                    alt="location_icon"
                    className="w-4 h-4"
                  />
                  <span>{booking.guests}</span>
                </div>
                <p>Total: ${booking.totalPrice}</p>
              </div>
            </div>
            {/* date and timings */}
            <div>
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>
            {/* payments */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <p
                  className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}
                >
                  {booking.isPaid ? "Paid" : "Not Paid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="bg-[#49B9FF] text-white text-sm px-3 py-1 rounded-full cursor-pointer mt-2">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
