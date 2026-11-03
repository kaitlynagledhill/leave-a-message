"use client";

import { useEffect } from "react";

const pageHTML = `
<header>
  <div class="wrap">
    <a class="logo" href="#top">Leave a Message</a>
    <nav>
      <a href="#how">How it works</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a class="btn" href="#book">Book now</a>
    </nav>
  </div>
</header>

<main id="top">
  <section class="hero">
    <div class="wrap">
      <div class="eyebrow">Audio guestbook · Raleigh-Durham & surrounding areas</div>

      <div class="hero-stage">
        <svg class="dial" id="dial" viewBox="0 0 200 200" role="img" aria-label="Rotary phone dial">
          <circle cx="100" cy="100" r="90" fill="var(--acc)" />
          <circle cx="100" cy="100" r="76" fill="var(--bg)" />
          <g class="plate" id="plate"></g>
          <circle cx="100" cy="100" r="22" fill="var(--acc)" />
          <circle cx="100" cy="100" r="6" fill="var(--bg)" />
        </svg>
        <h1>Leave a Message</h1>
      </div>

      <div class="hero-bottom">
        <p class="lead">
          A vintage rotary phone, a little nostalgia, and all the words your
          favorite people want to leave you. A guestbook you can listen to
          long after the celebration ends.
        </p>
        <div class="cta">
          <a class="btn" href="#book">Book now</a>
          <a class="btn ghost" href="#pricing">See pricing</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section how" id="how">
    <div class="wrap">
      <div class="how-head">
        <div>
          <h2 class="section-title">How it works</h2>
        </div>
      </div>

      <div class="steps">
        <article class="step">
          <div class="step-top">
            <span class="step-label">Before your event</span>
          </div>
          <h3>Reserve your phone</h3>
          <p>
            Choose your date and we’ll arrange local pickup or delivery.
            Your vintage rotary phone arrives ready for your celebration.
          </p>
        </article>

        <article class="step">
          <div class="step-top">
            <span class="step-label">At your event</span>
          </div>
          <h3>Guests leave a message</h3>
          <p>
            Guests pick up the phone, hear your personal greeting, and leave
            a message after the beep. Sweet wishes, funny stories, and
            everything in between.
          </p>
        </article>

        <article class="step">
          <div class="step-top">
            <span class="step-label">After your event</span>
          </div>
          <h3>Listen back to it all</h3>
          <p>
            Return the phone or arrange a pickup. Your recordings will be
            sent by email, with a USB drive available if you’d like
            a physical keepsake.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing-section">
    <div class="wrap">
      <h2 class="rv">Pricing</h2>

      <div class="price rv">
        <div class="card">
          <div class="big">$150<small>rental</small></div>
          <ul class="tick">
            <li>Rotary-style phone guest book</li>
            <li>Unlimited recordings from your guests</li>
            <li>Drop-off and pick-up in the Raleigh-Durham area</li>
            <li>Self pick-up also available</li>
            <li>Messages by email, free</li>
          </ul>
          <p class="note">
            Plus a $150 refundable deposit, returned once the phone comes
            back in the same condition it was rented.
          </p>
        </div>

        <div class="card">
          <h3 style="font-size:1.5rem">Build your rental</h3>
          <p class="note" style="margin:6px 0 14px">
            Add what you’d like and see your total.
          </p>

          <label class="opt">
            <span><b>USB memory stick</b><small>Mailed to you after your event</small></span>
            <span>+$20 <input type="checkbox" id="usb" data-p="20" /></span>
          </label>

          <label class="opt">
            <span><b>Neon sign rental</b><small>A glowing “Leave a Message” sign for your table</small></span>
            <span>+$20 <input type="checkbox" id="neon" data-p="20" /></span>
          </label>

          <div class="tot">
            <span>Rental total</span>
            <span class="serif" id="total">$150</span>
          </div>
          <p class="note">The rental total is due two weeks before your event.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="wrap">
      <h2 class="about-title">Hi, I’m <em>Kaitlyn.</em></h2>

      <p class="about-lead">
        The idea for Leave a Message started when I was planning my own wedding.
      </p>

      <div class="about-grid">
        <dl class="about-facts">
          <div>
            <dt>Based in</dt>
            <dd>Raleigh-Durham, NC</dd>
          </div>
          <div>
            <dt>Made for</dt>
            <dd>Weddings &amp; celebrations</dd>
          </div>
          <div>
            <dt>The phone</dt>
            <dd>Vintage rotary style</dd>
          </div>
        </dl>

        <div class="about-body">
          <p>
            I wanted a unique way to capture the voices, stories, and well-wishes
            of our guests. I loved the idea of having something more personal
            than a traditional guestbook.
          </p>
          <p>
            Friends and family loved it, too, and I decided to share the idea
            with other couples and event hosts. Now, I bring vintage-style
            audio guestbooks to celebrations around the Raleigh-Durham area.
          </p>
          <p>
            I’m glad you’re here, and I’d love to help you keep a little piece
            of your day.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="book" style="background:var(--card);border-block:1px solid var(--line)">
    <div class="wrap">
      <h2 class="rv">Book now</h2>

      <div class="book rv">
        <div class="card">
          <div class="eyebrow">Step 1</div>
          <h3>Download the contract</h3>
          <p>Read it over and sign when you’re ready.</p>
          <a class="btn ghost" href="/leave-a-message-contract.pdf" download>
            Download contract
          </a>
        </div>

        <div class="card">
          <div class="eyebrow">Step 2</div>
          <h3>Submit your signed copy</h3>
          <p>Send it back through our short form to hold your date.</p>
          <a
            class="btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCuACpjBncyXoZa7-eEdgkEcLnRmNtBE3EHgvW5uSXXgcrdA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit signed contract
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="wrap">
      <h2 class="rv">Questions or <em>comments?</em></h2>

      <div class="contact rv">
        <div class="contact-copy">
          <p>Have a question or want to check availability? Send me a note and I’ll get back to you.</p>
          <p>
            <a href="mailto:leaveamessageevents@gmail.com">
              leaveamessageevents@gmail.com
            </a>
          </p>
        </div>

        <div class="card">
          <h3>Send an inquiry</h3>
          <form id="f" autoComplete="on">
            <div class="two">
              <label>Name<input type="text" id="n" required /></label>
              <label>Email<input type="email" id="e" required /></label>
            </div>

            <div class="two">
              <label>Event date<input type="date" id="d" /></label>
              <label>
                Event type
                <select id="t">
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Vow renewal</option>
                  <option>Graduation</option>
                  <option>Other celebration</option>
                </select>
              </label>
            </div>

            <label>Message<textarea id="m" rows="4"></textarea></label>
            <button class="btn" type="submit">Send inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <span>© Leave a Message · Raleigh-Durham, NC</span>
    <a href="mailto:leaveamessageevents@gmail.com">leaveamessageevents@gmail.com</a>
  </div>
</footer>
`;

export default function Home() {
  useEffect(() => {
    const plate = document.getElementById("plate");
    const dial = document.getElementById("dial");

    if (plate && dial) {
      let holes = "";

      for (let i = 0; i < 10; i++) {
        const angle = (i * 36 * Math.PI) / 180;
        const x = (100 + 53 * Math.sin(angle)).toFixed(1);
        const y = (100 - 53 * Math.cos(angle)).toFixed(1);

        holes += `
          <circle cx="${x}" cy="${y}" r="9.5" fill="var(--acc)" fill-opacity=".92" />
          <circle cx="${x}" cy="${y}" r="6" fill="var(--bg)" />
        `;
      }

      plate.innerHTML = holes;
      dial.addEventListener("click", () => dial.classList.toggle("spun"));
    }

    const checkboxes =
      document.querySelectorAll<HTMLInputElement>(".opt input");
    const total = document.getElementById("total");

    const calculateTotal = () => {
      let amount = 150;

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          amount += Number(checkbox.dataset.p);
        }
      });

      if (total) total.textContent = `$${amount}`;
    };

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", calculateTotal);
    });

    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      document.querySelectorAll(".rv").forEach((element) => {
        observer?.observe(element);
      });
    } else {
      document.querySelectorAll(".rv").forEach((element) => {
        element.classList.add("in");
      });
    }

    const form = document.getElementById("f") as HTMLFormElement | null;

    const handleSubmit = (event: Event) => {
      event.preventDefault();

      const getValue = (id: string) =>
        (
          document.getElementById(id) as
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        )?.value ?? "";

      const body =
        `Name: ${getValue("n")}\n` +
        `Email: ${getValue("e")}\n` +
        `Event type: ${getValue("t")}\n` +
        `Event date: ${getValue("d") || "not set yet"}\n\n` +
        getValue("m");

      window.location.href =
        "mailto:leaveamessageevents@gmail.com?subject=" +
        encodeURIComponent("Inquiry: " + getValue("t")) +
        "&body=" +
        encodeURIComponent(body);
    };

    form?.addEventListener("submit", handleSubmit);

    return () => {
      observer?.disconnect();
      form?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return <div id="site" dangerouslySetInnerHTML={{ __html: pageHTML }} />;
}
