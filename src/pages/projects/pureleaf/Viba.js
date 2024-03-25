import backgroundVibaLarge from 'assets/pureleaf-background-large.jpg';
import backgroundVibaPlaceholder from 'assets/pureleaf-background-large.jpg';
import backgroundViba from 'assets/viba-background.jpg';
import imageVibaCoverLarge from 'assets/pureleaf-1.jpg';
import imageVibaCover from 'assets/pureleaf-1.jpg';
import imageVibaCoverPlaceholder from 'assets/pureleaf-1.jpg';
import imageVibaJar from 'assets/pureleaf-Jar-Large.jpg';
import imageVibaJarLarge from 'assets/pureleaf-Jar-Large.jpg';
import imageVibaJarPlaceholder from 'assets/pureleaf-Jar-Large.jpg';
import imageVibaGoldDelivery from 'assets/pureleaf-Jar.jpg';
import imageVibaGoldDeliveryLarge from 'assets/pureleaf-Jar.jpg';
import imageVibaGoldDeliveryPlaceholder from 'assets/pureleaf-Jar.jpg';
import imageVibaPostorder from 'assets/pureleaf-postorder.png';
import imageVibaPostOrderLarge from 'assets/pureleaf-postorder-large.png';
import sliceSlidesLarge from 'assets/pureleaf-2.jpg';
import sliceSlidesPlaceholder from 'assets/pureleaf-2.jpg';
import sliceSlides from 'assets/pureleaf-2.jpg';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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
//import dynamic from 'next/dynamic';
import { Fragment, } from 'react';
import { media } from 'utils/style';
import styles from './Viba.module.css';

const title = 'Garden to Cup Bliss: Pureleaf Teas Pure Essence';
const description =
  'As a part of my internship at Jar, I embarked on a journey to design an e-commerce platform for pure gold jewellery from the ground up. My role extended to seamlessly integrating Viba with Jar.';
  const roles = ['Wireframing','User Research', 'UX Design', 'Interface Design'];

export const Viba = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };
  return (
    <>
      <Fragment>
        <ProjectContainer className="spr">
          <Meta title={title} prefix="Projects" description={description} />
          <ProjectBackground
            opacity={isDark ? 0.5 : 0.5}
            src={backgroundViba}
            srcSet={`${backgroundViba.src} 1080w, ${backgroundVibaLarge.src} 2160w`}
            placeholder={backgroundVibaPlaceholder}
          />
          <ProjectHeader title={title} description={description} roles={roles} />
          <ProjectSection padding="top">
            <ProjectSectionContent>
              <ProjectImage
                raised
                key={themeId}
                srcSet={
                  isDark
                    ? [imageVibaCover, imageVibaCoverLarge]
                    : [imageVibaCover, imageVibaCoverLarge]
                }
                placeholder={
                  isDark ? imageVibaCoverPlaceholder : imageVibaCoverPlaceholder
                }
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                alt="This is cover image for Viba."
              />
            </ProjectSectionContent>
          </ProjectSection>
          <ProjectSection>
            <ProjectSectionColumns>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={
                    isDark
                      ? [imageVibaPostorder, imageVibaPostOrderLarge]
                      : [imageVibaPostorder, imageVibaPostOrderLarge]
                  }
                  placeholder={isDark ? imageVibaPostorder : imageVibaPostorder}
                  alt="Configuration options for text."
                  sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                />
              </div>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Elevate Your Experience: Introducing Hover Cups</ProjectSectionHeading>
                  <ProjectSectionText size="m">
                  Discover the cutting-edge technology behind our Hover Cups, a groundbreaking prototype redefining tea enjoyment. 
                  As you explore our website, be captivated by the innovative animation showcasing these cups, designed to evoke a range of sensations with each hover. 
                  Welcome to a new era of tea drinking with Pureleaf Tea.
                  </ProjectSectionText>
                  <Button
                    secondary
                    className={styles.button}
                    href="https://www.behance.net/gallery/192603267/Organic-Tea-PureLeaf"
                  >
                    Case Study
                  </Button>
                  <Button
                    secondary
                    className={styles.button}
                    href="https://www.figma.com/proto/QrehkOE4AP0pIyEQiN32j4/Pureleaf---Organic-tea-brand.?page-id=0%3A1&type=design&node-id=29-271&viewport=467%2C617%2C0.06&t=L7FzyhnjvuugAqfA-1&scaling=scale-down&starting-point-node-id=0%3A76&mode=design"
                  >
                    
                  </Button>
                  <Button
                    secondary
                    className={styles.button}
                    href="https://www.figma.com/proto/QrehkOE4AP0pIyEQiN32j4/Pureleaf---Organic-tea-brand.?page-id=0%3A1&type=design&node-id=29-271&viewport=467%2C617%2C0.06&t=L7FzyhnjvuugAqfA-1&scaling=scale-down&starting-point-node-id=0%3A76&mode=design"
                  >
                    Interaction of Project
                  </Button>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSection>
          <ProjectSection>
            <ProjectSectionColumns>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>At Pureleaf Tea: Where Natures Essence Meets Sipping Bliss</ProjectSectionHeading>
                  <ProjectSectionText size="m">
                  Indulge in the pure essence of nature with Pureleaf Tea meticulously harvested from our lush tea gardens, each leaf brimming with vibrant flavor and invigorating aroma. 
                  Elevate your tea-drinking experience to new heights as you immerse yourself in the blissful journey from garden to cup, sip by sip. 
                  Welcome to Pureleaf Tea, where every moment is infused with natures perfection..
                  </ProjectSectionText>
                  <ProjectSectionText size="l">
                  Immerse yourself in the exquisite flavors of nature with Pureleaf Teas meticulously harvested leaves. 
                  From our lush gardens to your cup, experience the blissful journey of unparalleled taste and aroma.
                  </ProjectSectionText>
                </ProjectTextRow>
               
              </ProjectSectionContent>
              <div className={styles.sidebarImages}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={
                    isDark
                      ? [imageVibaGoldDelivery, imageVibaGoldDeliveryLarge]
                      : [imageVibaGoldDelivery, imageVibaGoldDeliveryLarge]
                  }
                  placeholder={
                    isDark
                      ? imageVibaGoldDeliveryPlaceholder
                      : imageVibaGoldDeliveryPlaceholder
                  }
                  alt="Configuration options for text."
                  sizes={`(max-width: ${media.mobile}px) 40vw, 20vw`}
                />
                <Image
                  className={styles.sidebarImage}
                  srcSet={
                    isDark
                      ? [imageVibaJar, imageVibaJarLarge]
                      : [imageVibaJar, imageVibaJarLarge]
                  }
                  placeholder={isDark ? imageVibaJarPlaceholder : imageVibaJarPlaceholder}
                  alt="Configuration options for a component."
                  sizes={`(max-width: ${media.mobile}px) 40vw, 20vw`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSection>
          <ProjectSection dark>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Pureleaf Teas Innovative Hovering Prototype Delivers Unique Experiences</ProjectSectionHeading>
              <ProjectSectionText>
              Embark on a tea journey like never before with Pureleaf Teas innovative hovering prototype. 
              As you explore our offerings, anticipate an array of sensations and flavors, each sip delivering a distinct and unparalleled experience.
              Elevate your tea ritual with us, where tradition meets innovation for a truly memorable indulgence.
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
        <ProjectSection dark>
            
           
          </ProjectSection>
        </ProjectContainer>
        <Footer />
      </Fragment>
    </>
  );
};
