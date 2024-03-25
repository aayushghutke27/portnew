
import sliceAppLarge from 'assets/cin-app - large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/cin-app.jpg';

import sliceBackgroundLarge from 'assets/cin-background.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';

import sliceSidebarAnnotationsLarge from 'assets/cin-1.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/cin-1.jpg';
import sliceSidebarAnnotations from 'assets/cin-1.jpg';
import sliceSidebarLayersLarge from 'assets/cin-1.jpg';
import sliceSidebarLayersPlaceholder from 'assets/cin-1.jpg';
import sliceSidebarLayers from 'assets/cin.jpg';
import sliceSlidesLarge from 'assets/cin-2.jpg';
import sliceSlidesPlaceholder from 'assets/cin-2.jpg';
import sliceSlides from 'assets/cin-2.jpg';
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
import styles from './mirrar.module.css';

const title = 'CineCrave: Where Snacks Meet Style in Cinematic Delight!';
const description ='Enter the realm of cinematic indulgence with Cincrave, where every movie night transforms into a gourmet journey. Explore our exquisite menu, effortlessly order via our chic app, and enjoy secure, contactless payments. With snacks swiftly delivered to your seat, convenience and luxury redefine your cinema experience.';
const roles = ['Wireframing','User Research', 'UX Design', 'Interface Design'];

export const mirrar = () => {
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
          url="https://www.figma.com/proto/vUG1zvjScLnliXwNwXZmB9/Cincrave?page-id=0%3A1&type=design&node-id=312-363&viewport=-753%2C345%2C0.02&t=EBgjwM9b4B49xa1h-1&scaling=scale-down&starting-point-node-id=327%3A414&show-proto-sidebar=1&mode=design"
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
              <ProjectSectionHeading>Elevate Your Movie Night: Discover Cinematic Indulgence with Cincrave!</ProjectSectionHeading>
             
              <ProjectSectionText>
              In the current landscape of traditional snack ordering systems in movie theaters, customers frequently endure long queues, leading to missed movie moments and a lack of control over their snack preferences. 
              The prevalent inconveniences associated with this dated approach have created a need for a modernized solution. 
              
              </ProjectSectionText>
              <Button
                    secondary
                    className={styles.button}
                    href="https://www.behance.net/gallery/187625393/CINCRAVE-Snack-ordering-app-for-a-movie-theater"
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
        <ProjectSection >
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
              Elevate Your Experience: Dive into a world of unparalleled enjoyment with Cincrave. From our enticing menu to seamless ordering via our sleek app, we redefine convenience. 
              With secure, contactless payments and swift snack delivery to your seat, luxury meets efficiency. 
              Discover the art of movie snacking where aesthetics fuse with flavor, enhancing every cinematic moment. 
              Elevate your movie experience today with Cincrave
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
