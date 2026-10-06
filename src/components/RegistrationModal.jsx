import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import danceImage from '../assets/images/BeStar.png';

const RegistrationModal = ({ externalOpen, onExternalClose }) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    age: '',
    address: '',
    state: '',
    participation: '',
    groupname: '',
    email: '',
    contact: ''
  });
  const [isSubmittingRegistration, setIsSubmittingRegistration] = useState(false);
  const [registrationSubmitStatus, setRegistrationSubmitStatus] = useState('');

  // Open ONLY when user clicks (controlled via externalOpen)
  useEffect(() => {
    if (externalOpen) {
      setShowRegistrationModal(true);
    }
  }, [externalOpen]);

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateCustomerUUID = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
    if (onExternalClose) onExternalClose();
    setRegistrationSubmitStatus('');
  };

  const handleRegistrationSubmit = async () => {
    if (!registrationData.name || !registrationData.age || !registrationData.email || !registrationData.contact || !registrationData.participation) {
      setRegistrationSubmitStatus('error');
      return;
    }

    setIsSubmittingRegistration(true);
    setRegistrationSubmitStatus('');

    try {
      const customerUUID = generateCustomerUUID();
      
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/bestar5678@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      const fields = {
        'Registration ID': customerUUID,
        'Name': registrationData.name,
        'Age': registrationData.age,
        'Address': registrationData.address || 'Not provided',
        'State': registrationData.state || 'Not provided',
        'Participation Category': registrationData.participation,
        'Group Name': registrationData.groupname || 'Not applicable',
        'Email': registrationData.email,
        'Contact Number': registrationData.contact,
        'Registration Date': new Date().toLocaleString(),
        '_subject': `Miss & Mrs Curvy Star of India Registration - ID: ${customerUUID}`,
        '_next': window.location.href,
        '_captcha': 'false'
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();

      setTimeout(() => {
        if (document.body.contains(formElement)) {
          document.body.removeChild(formElement);
        }
      }, 1000);

      setRegistrationSubmitStatus('success');
      
      setTimeout(() => {
        setRegistrationData({
          name: '',
          age: '',
          address: '',
          state: '',
          participation: '',
          groupname: '',
          email: '',
          contact: ''
        });
        setRegistrationSubmitStatus('');
        closeRegistrationModal();
      }, 3000);

    } catch (error) {
      console.error('Error submitting registration:', error);
      setRegistrationSubmitStatus('error');
    } finally {
      setIsSubmittingRegistration(false);
    }
  };

  return (
    <>
      {showRegistrationModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          {/* Off-White Luxury Modal Container */}
          <div className="relative max-w-lg w-full bg-[#fbf9f5] border-2 border-amber-400/50 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto text-slate-900 font-sans p-5 sm:p-7">
            {/* Close Button */}
            <button
              onClick={closeRegistrationModal}
              className="absolute top-4 right-4 z-10 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full p-2 transition-transform duration-200 hover:scale-110"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-5">
              <div className="mb-2">
                <img 
                  src={danceImage} 
                  alt="Be Star Entertainment Logo" 
                  className="w-16 h-16 object-contain rounded-2xl mx-auto shadow-md border-2 border-amber-400 bg-black p-1"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-serif-luxury text-slate-900 tracking-tight">
                MISS & MRS CURVY STAR OF INDIA
              </h2>
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mt-0.5">
                Season 1 (2026) — Organized by Be Star Entertainment
              </p>
              <p className="text-xs font-bold text-rose-700 mt-1">
                Auditions in 10 Cities • Limited Slots Available
              </p>
            </div>

            {/* Registration Form */}
            <div className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                    Full Name <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="reg-name"
                    name="name"
                    value={registrationData.name}
                    onChange={handleRegistrationInputChange}
                    required
                    className="w-full px-3.5 py-2.5 text-sm font-semibold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 shadow-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="reg-age" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                    Age (18+) <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="number"
                    id="reg-age"
                    name="age"
                    value={registrationData.age}
                    onChange={handleRegistrationInputChange}
                    required
                    min="18"
                    max="80"
                    className="w-full px-3.5 py-2.5 text-sm font-semibold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 shadow-sm"
                    placeholder="Your age"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reg-address" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                  Address / City Details
                </label>
                <textarea
                  id="reg-address"
                  name="address"
                  value={registrationData.address}
                  onChange={handleRegistrationInputChange}
                  rows="2"
                  className="w-full px-3.5 py-2 text-sm font-semibold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 resize-none shadow-sm"
                  placeholder="Complete city address"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-state" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                    State
                  </label>
                  <input
                    type="text"
                    id="reg-state"
                    name="state"
                    value={registrationData.state}
                    onChange={handleRegistrationInputChange}
                    className="w-full px-3.5 py-2.5 text-sm font-semibold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 shadow-sm"
                    placeholder="e.g. Punjab, Delhi, UP"
                  />
                </div>

                <div>
                  <label htmlFor="reg-participation" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                    Participation Category <span className="text-red-600 font-black">*</span>
                  </label>
                  <select
                    id="reg-participation"
                    name="participation"
                    value={registrationData.participation}
                    onChange={handleRegistrationInputChange}
                    required
                    className="w-full px-3.5 py-2.5 text-sm font-bold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 shadow-sm"
                  >
                    <option value="">Select category</option>
                    <option value="Curvy Star (Plus Size / Body Positive)">Curvy Star (Plus Size & Body Positive)</option>
                    <option value="Miss Star of India (18+ Unmarried)">Miss Star of India (18+ Unmarried)</option>
                    <option value="Mrs Star of India (Married)">Mrs Star of India (Married)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-email" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                    Email Address <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    name="email"
                    value={registrationData.email}
                    onChange={handleRegistrationInputChange}
                    required
                    className="w-full px-3.5 py-2.5 text-sm font-semibold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="reg-contact" className="block text-xs font-bold text-slate-900 mb-1 tracking-wide">
                    Contact / WhatsApp <span className="text-red-600 font-black">*</span>
                  </label>
                  <input
                    type="tel"
                    id="reg-contact"
                    name="contact"
                    value={registrationData.contact}
                    onChange={handleRegistrationInputChange}
                    required
                    className="w-full px-3.5 py-2.5 text-sm font-semibold bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 shadow-sm"
                    placeholder="+91 81463-04161"
                  />
                </div>
              </div>

              {/* Submit Status Banner */}
              {registrationSubmitStatus && (
                <div className={`p-3.5 rounded-xl text-xs font-bold ${
                  registrationSubmitStatus === 'success' 
                    ? 'bg-green-100 text-green-900 border-2 border-green-300' 
                    : 'bg-red-100 text-red-900 border-2 border-red-300'
                }`}>
                  {registrationSubmitStatus === 'success' 
                    ? '✓ Registration submitted successfully! Be Star Entertainment will contact you soon.'
                    : '⚠ Please fill in all required fields marked with *.'
                  }
                </div>
              )}

              <button
                type="button"
                onClick={handleRegistrationSubmit}
                disabled={isSubmittingRegistration || !registrationData.name || !registrationData.age || !registrationData.email || !registrationData.contact || !registrationData.participation}
                className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-black py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider hover:from-amber-600 hover:to-yellow-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-amber-500/30"
              >
                {isSubmittingRegistration ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Registration...
                  </span>
                ) : (
                  'Submit Registration'
                )}
              </button>

              <p className="text-[11px] font-bold text-slate-600 text-center">
                Your details are secure and sent directly to Be Star Entertainment (81463-04161 / 98721-14161).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;
