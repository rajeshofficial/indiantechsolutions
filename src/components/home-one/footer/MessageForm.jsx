import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Field from "../../common/Field";

function MessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [buttonText, setButtonText] = useState("Send message");
  const [buttonColor, setButtonColor] = useState("black");

  const submitForm = async (formData) => {
    // Add the access key to formData
    formData.access_key = "711ecffd-a0a8-4ab3-a993-f231a3ddfa5b";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        console.log("Form submitted successfully", result);
        reset(); // Reset form after successful submission
        setButtonText("Message Delivered");
        setButtonColor("red");

        // Reset button text and color after 10 seconds
        setTimeout(() => {
          setButtonText("Send message");
          setButtonColor("black");
        }, 3000);
      } else {
        console.error("Error submitting form", result);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="aximo-form-field">
        <Field error={errors.name}>
          <input
            {...register("name", { required: "Name is required." })}
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </Field>
      </div>
      <div className="aximo-form-field">
        <Field error={errors.email}>
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
        </Field>
      </div>
      <div className="aximo-form-field">
        <input 
          {...register("phone", { required: "Phone number is required." })} 
          type="text" 
          name="phone" 
          placeholder="+088-234-6849" 
        />
      </div>
      <div className="aximo-form-field">
        <textarea 
          {...register("message", { required: "Message is required." })} 
          name="message" 
          placeholder="Write your message here..."
        ></textarea>
      </div>
      <button
        id="aximo-submit-btn"
        type="submit"
        style={{ color: buttonColor }}
      >
        {buttonText}{" "}
        <span>
          <img src={ArrowRight3Img} alt="ArrowRight3Img" />
        </span>
      </button>
    </form>
  );
}

export default MessageForm;
