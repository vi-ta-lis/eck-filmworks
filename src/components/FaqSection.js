import React from "react";
import styled from "styled-components";
import { StyleLayout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What services do you offer?">
          <div className="answer">
            <p>
              What services do you offer? I specialize in both photography and
              videography for a range of occasions including weddings, corporate
              events, portraits, product shoots, and brand storytelling. Whether
              you need stunning photos, cinematic videos, or a combination of
              both, I provide tailored packages to meet your specific needs
            </p>
          </div>
        </Toggle>
        <Toggle title="How far in advance should I book?">
          <div className="answer">
            <p>
              I recommend booking at least 2-3 months in advance for most
              projects, and 6-12 months ahead for weddings or major events.
              However, I do accept last-minute bookings when my schedule allows,
              so feel free to reach out even if your date is coming up soon.
            </p>
          </div>
        </Toggle>
        <Toggle title="What's your turnaround time for delivering final photos and videos?">
          <div className="answer">
            <p>
              For photography, you can expect to receive your edited photos
              within 1-2 weeks. Videos typically take 2-3 weeks depending on the
              complexity and length of the project. I always provide a sneak
              peek of highlights within 48-72 hours for weddings and special
              events.
            </p>
          </div>
        </Toggle>
        <Toggle title="Do you travel for shoots?">
          <div className="answer">
            <p>
              Absolutely! I'm available for local shoots and happy to travel for
              destination weddings, events, and special projects. Travel fees
              may apply depending on the location, and we can discuss all the
              details during our consultation
            </p>
          </div>
        </Toggle>
        <Toggle title="Can we customize our package?">
          <div className="answer">
            <p>
              Yes! Every client has unique needs, so I offer flexible packages
              that can be tailored to your vision and budget. Whether you need
              additional hours of coverage, a second shooter, drone footage, or
              specific editing styles, we can create a custom package that works
              perfectly for you
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(StyleLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.15rem;
    margin: 1rem 0;
    width: 100%;
  }
  .question {
    padding: 1rem 0;
    cursor: pointer;
    h4 {
      font-size: 1.4rem;
    }
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

export default FaqSection;
