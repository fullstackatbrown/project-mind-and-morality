"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center">
      {" "}
      <style jsx>{`
        .orange-text {
          color: #e79121;
        }
        .field {
          border-bottom: 1.5px solid #0f766e;
          padding-bottom: 6px;
          width: 100%;
        }
        input,
        textarea {
          outline: none;
          background: transparent;
          width: 100%;
          color: #0f766e;
        }
        input::placeholder,
        textarea::placeholder {
          color: #5eada8;
        }
      `}</style>{" "}
      <section className="max-w-3xl w-full px-8 py-16">
        {" "}
        <h1 className="text-4xl text-teal-600 text-center font-semibold mb-12">
          {" "}
          Contact Us{" "}
        </h1>{" "}
        <div className="flex flex-col gap-8">
          {" "}
          <div className="flex gap-8">
            {" "}
            <div className="field">
              {" "}
              <input type="text" placeholder="First Name" />{" "}
            </div>{" "}
            <div className="field">
              {" "}
              <input type="text" placeholder="Last Name" />{" "}
            </div>{" "}
          </div>{" "}
          <div className="field">
            {" "}
            <input type="email" placeholder="Email*" />{" "}
          </div>{" "}
          <div className="bg-[#c9eef0] rounded-3xl p-5">
            {" "}
            <textarea
              rows={7}
              placeholder="Message"
              className="resize-none"
            />{" "}
          </div>{" "}
          <div className="flex justify-end">
            {" "}
            <button className="bg-[#E79121] text-white px-10 py-3 rounded-full">
              {" "}
              Send{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
}
