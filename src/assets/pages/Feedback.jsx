import React, { useState } from 'react';


const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="feedback-form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="feedback-form">
          <h2>Feedback Form</h2>

          {/* Name */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          {/* Rating */}
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>

          {/* Comments */}
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Your comments"
            rows="4"
            required
          />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="feedback-thanks">
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your time and effort to help us improve.</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
