import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/mirrar-app - large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/mirrar-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/mirrar-background.jpg';
import sliceBackgroundLarge from 'assets/mirrar-background.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/virtual-1.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/virtual-1.jpg';
import sliceSidebarAnnotations from 'assets/virtual-1.jpg';
import sliceSidebarLayersLarge from 'assets/virtual-1.jpg';
import sliceSidebarLayersPlaceholder from 'assets/virtual-1.jpg';
import sliceSidebarLayers from 'assets/virtual.jpg';
import sliceSlidesLarge from 'assets/virtual-2.jpg';
import sliceSlidesPlaceholder from 'assets/virtual-2.jpg';
import sliceSlides from 'assets/virtual-2.jpg';
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
import styles from './Slice.module.css';

const title = 'MIRRAR Realistic Virtual Try-On App';
const description ='MIRRAR Realistic Virtual Try-On App transforms shopping by offering immersive virtual trials for cosmetics like lipsticks, delivering an unparalleled shopping experience';
const roles = ['Wireframing','User Research', 'UX Design', 'Interface Design'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.figma.com/proto/N7dqLg3Tl6tXiDcZATZ3HE/Virtual-Makeup-Try-On-for-MirrAR?page-id=0%3A1&type=design&node-id=207-3131&viewport=193%2C-311%2C0.03&t=mx6uwXdixtiwOwnj-1&scaling=scale-down&starting-point-node-id=207%3A3120&show-proto-sidebar=1&mode=design"
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
              <ProjectSectionHeading>Discover Your Perfect Look: Mirrar's Virtual Try-On!</ProjectSectionHeading>
             
              <ProjectSectionText>
              Experience the future of beauty with Mirrar's Virtual Try-On! Effortlessly explore a wide range of cosmetic products from home, confidently finding your perfect match in just a few clicks. 
              Our advanced AR technology ensures a seamless and lifelike experience, allowing you to see how each product enhances your unique style and skin tone. 
              Say hello to convenience and confidence with Mirrar's Virtual Try-On today!
              
              </ProjectSectionText>
              <Button
                    secondary
                    className={styles.button}
                    href="https://www.behance.net/gallery/190907385/MirrAR-Cosmetic-Virtual-Try-On-App"
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
              At Mirrar, we're dedicated to refining your Virtual Try-On experience for effortless beauty exploration. 
              With an ever-expanding selection of products, enhanced realism through precise color representation and facial mapping, and an intuitive interface, finding your perfect look has never been easier. 
              Enjoy personalized recommendations and interactive tutorials within the platform, seamlessly transitioning from try-on to purchase with just a click. Discover the future of beauty with Mirrar Virtual Try-On today.
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
