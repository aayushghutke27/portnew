import iiitnagpur from '../../assets/fango.gif';
import pinterestCover from '../../assets/movie.gif';
import tealfeedCover from '../../assets/graphic.jpg';
import tealfeedCoverrr from '../../assets/UI.jpg';
import flentCover from '../../assets/music.gif';
import vibaPdp from '../../assets/viba-pdp.jpg';
import vibaPdpLarge from '../../assets/viba-pdp-large.jpg';
import vibaPdpPlaceholder from '../../assets/viba-pdp.jpg';
import imageVibaGoldDelivery from 'assets/Viba-Gold-Delivery.jpg';
import imageVibaGoldDeliveryLarge from 'assets/Viba-Gold-Delivery-Large.jpg';
import imageVibaGoldDeliveryPlaceholder from 'assets/Viba-Gold-Delivery.jpg';
import CTextureLarge from 'assets/CINCRAVE.jpg';
import CTexturePlaceholder from 'assets/CINCRAVE.jpg';
import CTexture2 from 'assets/CINCRAVE2.jpg';
import CTexture2Large from 'assets/CINCRAVE2.jpg';
import CTexture2Placeholder from 'assets/CINCRAVE2.jpg';
import CTexture from 'assets/CINCRAVE.jpg';
import Texture2Large from 'assets/cozio.jpg';
import Texture2Placeholder from 'assets/cozio.jpg';
import Texture2 from 'assets/cozio.jpg';
import TextureLarge from 'assets/cozio2.jpg';
import TexturePlaceholder from 'assets/cozio2.jpg';
import Texture from 'assets/cozio2.jpg';
import TTextureLarge from 'assets/pureleaf.jpg';
import TPlaceholder from 'assets/pureleaf.jpg';
import TTexture from 'assets/pureleaf.jpg';
import { Footer } from 'components/Footer';
import { Card } from 'layouts/Home/Card';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Interaction', 'User Experience', 'Product'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [intro, details, projectOne, projectTwo, projectThree, projectFour,projectFive ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Ayush - Product designer with a passion for UX/UI design. Focused on creating innovative solutions for web and mobile apps, with expertise in design thinking and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
    
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="MIRRAR Realistic Virtual Try-On App"
        description="Design Mirrar realistic virtual try on makeup App"
        buttonText="View Project"
        buttonLink="/projects/mirrar"
        //buttonLink="/projects/viba"
        
        
        buttonText1="Interaction of Project"
        buttonLink1="https://www.figma.com/proto/N7dqLg3Tl6tXiDcZATZ3HE/VIRTUAL-TRY-ON-version-2-(Community)?page-id=0%3A1&type=design&node-id=207-3131&viewport=580%2C63%2C0.02&t=PkSXhh5MhHWChFT8-1&scaling=scale-down&starting-point-node-id=207%3A3120&mode=design"

        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [imageVibaGoldDelivery, imageVibaGoldDeliveryLarge],
              placeholder: imageVibaGoldDeliveryPlaceholder,
            },
            {
              srcSet: [vibaPdp, vibaPdpLarge],
              placeholder: vibaPdpPlaceholder,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={2}
        title="Delightful Bites, Delivered Right with FangoFood's "
        description="Your Ultimate Destination for Premium Non-Veg Delights and Fresh Dairy Goodness, Delivered to Your Doorstepe"
        buttonText="View project"
        buttonLink="/projects/fango"

        buttonText1="Interaction of Project"
        buttonLink1="https://www.figma.com/proto/EGwTrz50cmxT3fj1zAPs11/Redesign-Fangofood?page-id=0%3A1&type=design&node-id=1-2&viewport=1564%2C528%2C0.07&t=tj5mwmS8rTTwdJck-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design"

        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [iiitnagpur, iiitnagpur],
              placeholder: iiitnagpur,
            },
          ],
        }}

       /* model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [imageVibaGoldDelivery1, imageVibaGoldDeliveryLarge1],
              placeholder: imageVibaGoldDeliveryPlaceholder1,
            },
            {
              srcSet: [vibaPdp1, vibaPdpLarge1],
              placeholder: vibaPdpPlaceholder1,
            },
          ],
        }}*/
      />

<ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Elevate Your Stay: Cozio Hotel Booking App"
        description="Elevate your stay, book with ease where comfort meets convenience in every reservation."
        buttonText="View project"
        buttonLink="/projects/cozio"

        buttonText1="Interaction of Project"
        buttonLink1="https://www.figma.com/proto/m5qpsNgHKDASd2JeBiCzHG/Cozio?page-id=0%3A1&type=design&node-id=4-1220&viewport=418%2C-888%2C0.11&t=025ruaHlTndwUGV9-1&scaling=scale-down&starting-point-node-id=4%3A1220&show-proto-sidebar=1&mode=design"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [Texture, TextureLarge],
              placeholder: TexturePlaceholder,
            },
            {
              srcSet: [Texture2, Texture2Large],
              placeholder: Texture2Placeholder,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-3"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Discover Nature's Pure Essence: Pureleaf Tea - Your Path to Blissful Sipping!"
        description="Sip pure bliss from our gardens to your cup with Pureleaf Tea's meticulously harvested leaves."
        buttonText="View project"
        buttonLink="/projects/pureleaf"
        
        buttonText1="Interaction of Project"
        buttonLink1="https://www.figma.com/proto/QrehkOE4AP0pIyEQiN32j4/Pureleaf---Organic-tea-brand.?page-id=0%3A1&type=design&node-id=29-271&viewport=467%2C617%2C0.06&t=L7FzyhnjvuugAqfA-1&scaling=scale-down&starting-point-node-id=0%3A76&mode=design"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [TTexture, TTextureLarge],
              placeholder: TPlaceholder,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Elevate Your Stay: Cozio Hotel Booking App"
        description="Elevate your stay, book with ease where comfort meets convenience in every reservation."
        buttonText="View Project"
        buttonLink="/projects/cincrave"

        buttonText1="Interaction of Project"
        buttonLink1="https://www.figma.com/proto/vUG1zvjScLnliXwNwXZmB9/Cincrave?page-id=0%3A1&type=design&node-id=312-363&viewport=-753%2C345%2C0.02&t=EBgjwM9b4B49xa1h-1&scaling=scale-down&starting-point-node-id=327%3A414&show-proto-sidebar=1&mode=design"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [CTexture, CTextureLarge],
              placeholder: CTexturePlaceholder,
            },
            {
              srcSet: [CTexture2, CTexture2Large],
              placeholder: CTexture2Placeholder,
            },
          ],
        }}
      />

      
      <div className={styles.content}>
        <Card
          imageUrl={pinterestCover}
          heading="Elevate Your Movie Experience"
          description="An UI Screen of Movie Booking. This is a conceptual project focused on redesigning the user interface and user experience of Movie Booking."
          externalUrl="https://www.behance.net/gallery/188065929/Elevate-Your-Movie-Experience"
        />
        <Card
          imageUrl={flentCover}
          heading="Sleek Music App UI"
          description="Experience seamless music discovery and listening with our sleek and intuitive music app UI."
          externalUrl="https://www.behance.net/gallery/188052183/Sleek-Music-App-UI"
        />
        <Card
          imageUrl={tealfeedCover}
          heading="Unleashing My Creativity"
          description="Explore My Graphic Design Portfolio for a Visual Odyssey of Innovation and Imagination"
          externalUrl="https://www.behance.net/aayushghutke27"
        />
        <Card
          imageUrl={tealfeedCoverrr}
          heading="Everyday Inspiration, Endless Creativity"
          description="Dive into the Daily UI Challenge - Witness the Evolution of Design Excellence in My Daily UI Portfolio!"
          externalUrl="https://dribbble.com/aayushghutke27"
        />
      </div>
      <Footer />
    </div>
  );
};
