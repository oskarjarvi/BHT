import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Page from "./Page";
import Hero from "./Hero";
import CourseList from "./Courselist";
import Course from "./Course";
import Form from "./Form";
import FormInput from "./FormInput";
import NavigationLink from "./NavigationLink";
import TextColourSection from "./TextColourSection";
import TextWithBackground from "./TextWithBackground";
import TextSection from './TextSection'

// resolve Storyblok components to Next.js components
const Components = {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page,
    hero: Hero,
    courselist: CourseList,
    course: Course,
    formSection: Form,
    formInput: FormInput,
    navigationLink: NavigationLink,
    textColourSection: TextColourSection,
    textSection: TextSection,
    textWithBackground: TextWithBackground
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