import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import rawCountryCodes from "../assets/Data/CountryCodes.json";

// Sort alphabetically
const countryCodes = [...rawCountryCodes].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default function Contact() {
  const form = useRef();

  const [showCodes, setShowCodes] = useState(false);
  const [search, setSearch] = useState("");
  const [showCountryList, setShowCountryList] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    code: "+966",
    country: "Saudi Arabia",
    countryEmoji: "🇸🇦", // default icon
    selectedCountry: {
      name: "Saudi Arabia",
      emoji: "🇸🇦",
      dial_code: "+966",
    },
  });

  const [popup, setPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const selectCountry = (c) => {
    setFormData({
      ...formData,
      selectedCountry: c,
      code: c.dial_code,
      country: c.name,
    });
    setShowCodes(false);
    setSearch("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      fullPhone: `${formData.code} ${formData.phone}`,
    };

    emailjs
      .send("your_service_id", "your_template_id", finalData, "your_public_key")
      .then(
        () => {
          setPopup(true);
          setTimeout(() => setPopup(false), 2500);

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            code: "+1",
            country: "",
            selectedCountry: {
              name: "Canada",
              emoji: "🇨🇦",
              dial_code: "+1",
            },
          });
        },
        (error) => console.error("FAILED...", error)
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-banner">
        <h1> </h1>
      </div>

      <div className="contact-container">
      <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          {/* ROW 1 */}
          <div className="row">
            {/* NAME */}
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* PHONE */}
            <div className="field">
              <label>Phone Number</label>

              <div className="phone-wrapper">
                {/* Country Code Selector */}
                <div
                  className="phone-dropdown"
                  onClick={() => setShowCodes((p) => !p)}
                >
                  <span>{formData.selectedCountry.emoji}</span>
                  <span>{formData.selectedCountry.dial_code}</span>
                  <span className="arrow">▾</span>
                </div>

                <input
                  type="text"
                  name="phone"
                  placeholder="123 456 7890"
                  maxLength="12"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                {/* DROPDOWN LIST */}
                {showCodes && (
                  <div className="dropdown-list">
                    <input
                      type="text"
                      placeholder="Search country..."
                      className="dropdown-search"
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="dropdown-items">
                      {countryCodes
                        .filter((c) =>
                          c.name.toLowerCase().startsWith(search.toLowerCase())
                        )
                        .map((c) => (
                          <div
                            className="dropdown-item"
                            key={c.code}
                            onClick={() => selectCountry(c)}
                          >
                            {c.emoji} {c.name} ({c.dial_code})
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="row">
            {/* EMAIL */}
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* COUNTRY */}
            <div className="field">
              <label>Country</label>

              <div className="country-wrapper">
                <div
                  className="country-dropdown"
                  onClick={() => setShowCountryList((p) => !p)}
                >
                  <span>{formData.countryEmoji}</span>
                  <span>{formData.country || "Select Country"}</span>
                  <span className="arrow">▾</span>
                </div>

                {/* COUNTRY LIST */}
                {showCountryList && (
                  <div className="dropdown-list">
                    <input
                      type="text"
                      placeholder="Search country..."
                      className="dropdown-search"
                      onChange={(e) => setCountrySearch(e.target.value)}
                    />

                    <div className="dropdown-items">
                      {countryCodes
                        .filter((c) =>
                          c.name.toLowerCase().startsWith(countrySearch.toLowerCase())
                        )
                        .map((c) => (
                          <div
                            className="dropdown-item"
                            key={c.code}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                country: c.name,
                                countryEmoji: c.emoji,
                              });
                              setShowCountryList(false);
                              setCountrySearch("");
                            }}
                          >
                            {c.emoji} {c.name}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="field full">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="submit-btn">Submit</button>
        </form>
      </div>

      {popup && <div className="popup">Message Sent ✔</div>}
    </div>
  );
}
