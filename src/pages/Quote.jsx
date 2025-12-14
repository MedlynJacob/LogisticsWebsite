// Quote.jsx
import { useState } from "react";
import "../styles/Quote.css";


export default function Quote() {
const [formData, setFormData] = useState({
name: "",
phone: "",
email: "",
cargoType: "",
origin: "",
destination: "",
commodity: "",
description: "",
});


const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};


const handleSubmit = (e) => {
e.preventDefault();
console.log("Quote Data:", formData);
};


return (
<div className="quote-page">
<div className="quote-banner">
<h1>Get a Quote</h1>
</div>


<div className="quote-container">
<form onSubmit={handleSubmit}>
{/* ROW 1 */}
<div className="row">
<div className="field">
<label>Name</label>
<input type="text" name="name" required value={formData.name} onChange={handleChange} />
</div>
<div className="field">
<label>Contact Number</label>
<input type="text" name="phone" required value={formData.phone} onChange={handleChange} />
</div>
</div>


{/* ROW 2 */}
<div className="row">
<div className="field">
<label>Email Address</label>
<input type="email" name="email" required value={formData.email} onChange={handleChange} />
</div>
<div className="field">
<label>Cargo Type</label>
<input type="text" name="cargoType" value={formData.cargoType} onChange={handleChange} />
</div>
</div>


{/* ROW 3 */}
<div className="row">
<div className="field">
<label>Country of Origin</label>
<input type="text" name="origin" value={formData.origin} onChange={handleChange} />
</div>
<div className="field">
<label>Destination</label>
<input type="text" name="destination" value={formData.destination} onChange={handleChange} />
</div>
</div>


{/* ROW 4 */}
<div className="row">
<div className="field">
<label>Commodity</label>
<textarea rows="3" name="commodity" value={formData.commodity} onChange={handleChange}></textarea>
</div>
<div className="field">
<label>Description</label>
<textarea rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
</div>
</div>


<button className="submit-btn">Submit</button>
</form>
</div>
</div>
);
}