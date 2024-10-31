import { useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import Field from "../common/Field";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const submitForm = async (formData) => {
    // Append the access key to the form data
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
      } else {
        console.error("Error submitting form", result);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Contact us for a
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star" />
                  </span>
                </span>
                personal experience
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="aximo-contact-thumb ">
              <LazyLoadImage
                src={ContactThumb}
                width={397}
                height={635}
                alt="Contact Thumb"
                effect="blur"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
                      name="name"
                      id="name"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter email address" error={errors.email}>
                    <input
                      {...register("email", { required: "Email is required." })}
                      type="email"
                      name="email"
                      id="email"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter Phone Number" error={errors.phone}>
                    <input
                      {...register("phone", { required: "Phone is required." })}
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <textarea {...register("message")} name="message"></textarea>
                </div>
                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
