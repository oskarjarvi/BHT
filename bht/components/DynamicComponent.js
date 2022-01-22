import TwoColumnSection from "./Columns/TwoColumnSection";
import Page from "./Page";
import Hero from "./Hero";
import NavigationButton from "./NavigationButton";
import CourseList from "./Course/Courselist";
import Course from "./Course/Course";
import CourseListItem from "./Course/CourseListItem";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import TextBlock from "./Text/TextBlock";
import TextSection from "./Text/TextSection";
import TextColourSection from "./Text/TextColourSection";
import TextWithBackground from "./Text/TextWithBackground";
import TextColumn from "./Columns/TextColumn";
import ImageColumn from "./Columns/ImageColumn";
import EducationBlock from "./Education/EducationBlock";
import Grid from "./Grid";
import ColourSection from "./ColourSection";
import TextGridColumn from "./Text/TextGridColumn";
import VideoBlock from "./VideoBlock";
import Section from "./Section";
import ImageGallery from "./ImageGallery";

// resolve Storyblok components to Next.js components
const Components = {
  twoColumnSection: TwoColumnSection,
  page: Page,
  hero: Hero,
  courselist: CourseList,
  course: Course,
  formSection: Form,
  formInput: FormInput,
  navigationLink: NavigationButton,
  textColourSection: TextColourSection,
  textSection: TextSection,
  textWithBackground: TextWithBackground,
  textColumn: TextColumn,
  imageColumn: ImageColumn,
  educationBlock: EducationBlock,
  grid: Grid,
  textGridColumn: TextGridColumn,
  colourSection: ColourSection,
  textBlock: TextBlock,
  videoBlock: VideoBlock,

  courseListItem: CourseListItem,
  section: Section,
  imageGrid: ImageGallery,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
