import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/cozio-app - large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/cozio-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/mirrar-background.jpg';
import sliceBackgroundLarge from 'assets/cozio-background.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/cozio.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/cozio.jpg';
import sliceSidebarAnnotations from 'assets/cozio-1.jpg';
import sliceSidebarLayersLarge from 'assets/cozio-1.jpg';
import sliceSidebarLayersPlaceholder from 'assets/cozio-1.jpg';
import sliceSidebarLayers from 'assets/cozio.jpg';
import sliceSlidesLarge from 'assets/cozio-2.jpg';
import sliceSlidesPlaceholder from 'assets/cozio-2.jpg';
import sliceSlides from 'assets/cozio-2.jpg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './cozio.module.css';

const title = 'Cozio Online Booking App with AI Chatbot';
const description ='Introducing Cozio: The revolutionary hotel booking app revolutionizing the industry. With its user-friendly interface and cutting-edge AI Chat Bot, Cozio offers personalized recommendations, streamlining the hotel selection process for travelers and hoteliers. Say goodbye to traditional booking hassles and hello to seamless, efficient accommodations management with Cozio.';
const roles = ['Wireframing','User Research', 'UX Design', 'Interface Design'];

export const cozio = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.2}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.figma.com/proto/m5qpsNgHKDASd2JeBiCzHG/Cozio?page-id=0%3A1&type=design&node-id=4-1220&viewport=418%2C-888%2C0.11&t=267nw2tVwcZjwLZm-1&scaling=scale-down&starting-point-node-id=4%3A1220&show-proto-sidebar=1&mode=design"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Cozio: Redefining Hotel Booking with AI Chat Bot Magic</ProjectSectionHeading>
             
              <ProjectSectionText>
              Step into the future of hotel booking with Cozio, where innovation meets elegance. 
              Say goodbye to the mundane and embrace seamless accommodation experiences infused with the magic of AI Chat Bot technology. 
              Discover a world where personalized recommendations and effortless booking await at your fingertips. 
              Cozio isn't just a booking app; it's your gateway to a new era of travel sophistication. 
              Let Cozio elevate your journey, one intelligent suggestion at a time.
              
              </ProjectSectionText>
              <Button
                    secondary
                    className={styles.button}
                    href="https://www.behance.net/gallery/188826651/HOTEL-BOOKING-APP-COZIO"
                  >
                    Case Study
                  </Button>
              
            </div>
           
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
              Enhancing Your Experience: Elevating Every Aspect with Cozio. 
              From seamless booking to personalized recommendations powered by our AI Chat Bot, Cozio is dedicated to redefining your hotel booking journey. 
              Discover a new standard of convenience and efficiency, ensuring every stay is exceptional. 
              With Cozio, your experience is our priority
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
