'use client'
import { useState, useEffect, useRef } from 'react';
import formbg from '@/assets/formPic.png';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import emailjs from '@emailjs/browser'; // Import EmailJS SDK

const BookForm = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reservationDate: '',
    totalPeople: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Use ref to initialize flatpickr and avoid issues with input fields
  const dateInputRef = useRef(null);

  // Initialize flatpickr for date input
  useEffect(() => {
    flatpickr(dateInputRef.current, {
      dateFormat: "Y-m-d",
      allowInput: true,
      onChange: (selectedDates) => {
        // Set the value of the date picker manually in the formData state
        setFormData({
          ...formData,
          reservationDate: selectedDates[0] ? selectedDates[0].toISOString().split('T')[0] : '',
        });
      },
    });
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, e.target, process.env.NEXT_PUBLIC_USER) // Using EmailJS SDK
      .then(
        (result) => {
          console.log(result.text);
          alert('Your booking request has been sent!');
      
          setFormData({
            name: '',
            email: '',
            reservationDate: '',
            totalPeople: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          alert('There was an error submitting your form. Please try again.');
        }
      );
  };

  return (
    <div
      className="w-full h-[722px] lg:h-[788px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${formbg.src})` }}
    >
      <div className="w-[330px] h-[662px] lg:w-[1320px] lg:h-[548px] gap-[40px] flex flex-col justify-between">
        <div className="w-full h-[162px] flex flex-col gap-[8px] lg:w-[635px] lg:h-[174px] lg:gap-[16px]">
          <p className="text-[16px] leading-[26px] font-bold text-[#BD1F17] lg:text-[20px] lg:leading-[32px]">■ Book Now</p>
          <h1 className="uppercase text-[40px] leading-[48px] font-bebas text-white lg:w-[654px] lg:h-[62px] lg:leading-[62px] lg:text-[62px]">
            Book Your Table
          </h1>
          <p className="w-[330px] h-[72px] text-[16px] leading-[24px] font-roboto text-[#F7F8F9] lg:text-[16px] lg:leading-[24px] lg:w-[545px]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] w-full lg:w-[635px] lg:h-[280px]">
          <div className="flex flex-col gap-[8px] justify-between lg:flex-row">
            <input
              type="text"
              placeholder="Your Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[46px] p-3 border border-[#E5E7EB] bg-transparent bg-opacity-50 text-white placeholder-white rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[46px] p-3 border border-[#E5E7EB] bg-transparent bg-opacity-50 text-white placeholder-white rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-[8px] justify-between lg:flex-row">
            <input
              ref={dateInputRef}
              type="text"
              placeholder="Reservation Date"
              name="reservationDate"
              value={formData.reservationDate}
              onChange={handleChange} 
              className="w-full h-[46px] p-3 border border-[#E5E7EB] bg-transparent bg-opacity-50 text-white placeholder-white rounded-md focus:outline-none"
            />
            <input
              type="number"
              placeholder="Total People"
              name="totalPeople"
              value={formData.totalPeople}
              onChange={handleChange}
              className="w-full h-[46px] p-3 border border-[#E5E7EB] bg-transparent bg-opacity-50 text-white placeholder-white rounded-md focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-[140px] border border-[#E5E7EB] bg-transparent bg-opacity-50 text-white placeholder-white rounded-md focus:outline-none"
          ></textarea>

          <button type="submit" className="uppercase py-[11px] px-[20px] w-[123px] h-[48px] bg-[#FEBF00] text-[14px] font-bold text-[#0A1425]">
            Book now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
