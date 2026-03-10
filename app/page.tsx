"use client"

export default function ContactUs() {

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center">

      <style>{`
        .orange-text {
          color:#E79121;
        }

        .field {
          border-bottom:1.5px solid #0f766e;
          padding-bottom:6px;
          width:100%;
        }

        input, textarea{
          outline:none;
          background:transparent;
          width:100%;
          color:#0f766e;
        }

        input::placeholder,
        textarea::placeholder{
          color:#5eada8;
        }
      `}</style>


      <nav className="w-full bg-[#b2e4e4] px-8 py-4 flex items-center justify-between">

        <img src="" className="h-16"/>

        <div className="flex gap-10 text-teal-800">

          <a href="/">Home</a>
          <a href="/team">Our Team</a>
          <a href="/research">Research ▾</a>
          <a href="/get-involved">Get Involved ▾</a>
          <a href="/contact" className="font-semibold">Contact Us</a>

        </div>

      </nav>

      <section className="max-w-3xl w-full px-8 py-16">

        <h1 className="text-4xl text-teal-600 text-center font-semibold mb-12">
          Contact Us
        </h1>

        <div className="flex flex-col gap-8">

          <div className="flex gap-8">

            <div className="field">
              <input type="text" placeholder="First Name"/>
            </div>

            <div className="field">
              <input type="text" placeholder="Last Name"/>
            </div>

          </div>

          <div className="field">
            <input type="email" placeholder="Email*"/>
          </div>

          <div className="bg-[#c9eef0] rounded-3xl p-5">

            <textarea
              rows={7}
              placeholder="Message"
              className="resize-none"
            />

          </div>

          <div className="flex justify-end">

            <button className="bg-[#E79121] text-white px-10 py-3 rounded-full">
              Send
            </button>

          </div>

        </div>

      </section>

      <footer className="w-full bg-gradient-to-b from-[#efe5c8] to-[#f0c67a] py-16 flex justify-center">

        <div className="max-w-6xl w-full px-8 grid grid-cols-3 gap-12">

          <div>

            <h3 className="text-lg text-teal-800 font-semibold mb-4">
              About Us
            </h3>

            <p className="text-teal-800 text-sm">
              The Mind and Morality Lab is part of{" "}
              <a className="underline">Brown Developmental Labs</a>, a group of research labs
              in the{" "}
              <a className="underline">Cognitive and Psychological Sciences Department</a>{" "}
              at <a className="underline">Brown University</a> that study children and adolescents.
            </p>

          </div>

          <div className="flex justify-center items-center gap-6 pt-6">

            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>

            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            <a href="mailto:mindmoralitylab@brown.edu" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>

          </div>

          <div>

            <h3 className="text-lg text-teal-800 font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-teal-800 text-sm">
              190 Thayer Street, Providence, RI 02912<br/>
              mindmoralitylab@brown.edu<br/>
              +1 (401) 863 3921<br/><br/>
              © Mind and Morality Lab 2026
            </p>

          </div>

        </div>

      </footer>

    </div>
  )
}