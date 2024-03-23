import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/fango-app - large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/fango-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/mirrar-background.jpg';
import sliceBackgroundLarge from 'assets/fango-background.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/fango-1.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/fango-1.jpg';
import sliceSidebarAnnotations from 'assets/fango-1.jpg';
import sliceSidebarLayersLarge from 'assets/fango-1.jpg';
import sliceSidebarLayersPlaceholder from 'assets/fango-1.jpg';
import sliceSidebarLayers from 'assets/fango1.jpg';
import sliceSlidesLarge from 'assets/fango-2.jpg';
import sliceSlidesPlaceholder from 'assets/fango-2.jpg';
import sliceSlides from 'assets/fango-2.jpg';
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
import styles from './fango.module.css';

const title = 'Fangofood Website Redesign';
const description ='Unleash your culinary creativity with Fangofood.com! Explore our delectable selection of premium meats, farm-fresh eggs, and luscious dairy products, all conveniently available at your fingertips. With our user-friendly interface, browsing and purchasing your favorites has never been easier. Elevate your dining experience and savor the finest ingredients from the comfort of your home. Dive in today and let your taste buds rejoice';
const roles = ['Wireframing','User Research', 'UX Design', 'Interface Design'];

export const fango = () => {
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
          url="https://www.figma.com/proto/EGwTrz50cmxT3fj1zAPs11/Redesign-Fangofood?page-id=0%3A1&type=design&node-id=1-2&viewport=1564%2C528%2C0.07&t=tj5mwmS8rTTwdJck-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design"
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
              <ProjectSectionHeading>Indulge in Premium Quality: Explore Fangofood's Delectable Selection of Meat, Eggs, and Dairy!</ProjectSectionHeading>
             
              <ProjectSectionText>
              Welcome to Fangofood.com, where quality meets convenience in every bite. 
              Discover an array of premium meats, farm-fresh eggs, and luscious dairy products carefully curated to tantalize your taste buds. 
              Our user-friendly interface ensures a seamless and visually captivating shopping experience, allowing you to browse, select, and purchase your favorites with ease.
              Whether you're a culinary connoisseur or a home chef, Fangofood is your go-to destination for the finest ingredients. 
              Dive into our virtual marketplace today and elevate your dining experience to new heights!
              
              </ProjectSectionText>
              <Button
                    secondary
                    className={styles.button}
                    href="https://www.behance.net/gallery/189664631/Fangofood-Website-Redesign"
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
              Embark on a culinary adventure with Fangofood.com! Delight in our premium assortment of meats, farm-fresh eggs, and creamy dairy products designed to elevate every dish. 
              Our user-friendly interface ensures a seamless shopping experience, allowing you to effortlessly browse and purchase your favorites. 
              From succulent cuts of meat to wholesome eggs and indulgent dairy delights, discover the epitome of quality and convenience. Start your journey today and elevate your culinary creations with Fangofood!
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
