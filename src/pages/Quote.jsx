import { useState } from "react";
import "../styles/Quote.css";
import rawCountryCodes from "../assets/Data/CountryCodes.json";

// sort countries
const countries = [...rawCountryCodes].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default function Quote() {
  const [showPhoneCodes, setShowPhoneCodes] = useState(false);
  const [phoneSearch, setPhoneSearch] = useState("");

  const [showOrigin, setShowOrigin] = useState(false);
  const [originSearch, setOriginSearch] = useState("");

  const [showDestination, setShowDestination] = useState(false);
  const [destinationSearch, setDestinationSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cargoType: "",
    commodity: "",
    description: "",
    origin: "",
    destination: "",
    code: "+966",
    selectedCountry: {
      name: "Saudi Arabia",
      emoji: "🇸🇦",
      dial_code: "+966",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // phone strictly numbers
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const selectPhoneCountry = (c) => {
    setFormData({
      ...formData,
      selectedCountry: c,
      code: c.dial_code,
    });
    setShowPhoneCodes(false);
    setPhoneSearch("");
  };

  return (
    <div className="quote-page">
      <div className="quote-banner">
        <h1>Get a Quote</h1>
      </div>

      <div className="quote-container">
        <form>
          {/* ROW 1 */}
          <div className="row">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Contact Number</label>
              <div className="phone-wrapper">
                <div
                  className="phone-dropdown"
                  onClick={() => setShowPhoneCodes(!showPhoneCodes)}
                >
                  <span>{formData.selectedCountry.emoji}</span>
                  <span>{formData.selectedCountry.dial_code}</span>
                  <span className="arrow">▾</span>
                </div>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                {showPhoneCodes && (
                  <div className="dropdown-list">
                    <input
                      className="dropdown-search"
                      placeholder="Search country..."
                      onChange={(e) => setPhoneSearch(e.target.value)}
                    />
                    <div className="dropdown-items">
                      {countries
                        .filter((c) =>
                          c.name
                            .toLowerCase()
                            .includes(phoneSearch.toLowerCase())
                        )
                        .map((c) => (
                          <div
                            key={c.code}
                            className="dropdown-item"
                            onClick={() => selectPhoneCountry(c)}
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
            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Cargo Type</label>
              <select
                name="cargoType"
                value={formData.cargoType}
                onChange={handleChange}
                className="cargo-select"
                required
              >
                <option value="">Select Cargo Type</option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Overland">Overland</option>
              </select>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="row">
            <div className="field">
              <label>Country of Origin</label>
              <div
                className="country-dropdown"
                onClick={() => setShowOrigin(!showOrigin)}
              >
                <span>{formData.origin || "Select Country"}</span>
                <span className="arrow">▾</span>
              </div>

              {showOrigin && (
                <div className="dropdown-list">
                  <input
                    className="dropdown-search"
                    placeholder="Search country..."
                    onChange={(e) => setOriginSearch(e.target.value)}
                  />
                  <div className="dropdown-items">
                    {countries
                      .filter((c) =>
                        c.name
                          .toLowerCase()
                          .includes(originSearch.toLowerCase())
                      )
                      .map((c) => (
                        <div
                          key={c.code}
                          className="dropdown-item"
                          onClick={() => {
                            setFormData({ ...formData, origin: c.name });
                            setShowOrigin(false);
                            setOriginSearch("");
                          }}
                        >
                          {c.emoji} {c.name}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <div className="field">
              <label>Destination</label>
              <div
                className="country-dropdown"
                onClick={() => setShowDestination(!showDestination)}
              >
                <span>{formData.destination || "Select Country"}</span>
                <span className="arrow">▾</span>
              </div>

              {showDestination && (
                <div className="dropdown-list">
                  <input
                    className="dropdown-search"
                    placeholder="Search country..."
                    onChange={(e) => setDestinationSearch(e.target.value)}
                  />
                  <div className="dropdown-items">
                    {countries
                      .filter((c) =>
                        c.name
                          .toLowerCase()
                          .includes(destinationSearch.toLowerCase())
                      )
                      .map((c) => (
                        <div
                          key={c.code}
                          className="dropdown-item"
                          onClick={() => {
                            setFormData({ ...formData, destination: c.name });
                            setShowDestination(false);
                            setDestinationSearch("");
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

          {/* ROW 4 */}
          <div className="row">
            <div className="field">
              <label>Commodity</label>
              <textarea
                rows="4"
                name="commodity"
                value={formData.commodity}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Description</label>
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
