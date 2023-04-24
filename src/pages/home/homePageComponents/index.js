import TestimonialSection from "./TestimonialSection";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import CtaSection from "./CtaSection";
export { TestimonialSection, FeatureSection, HeroSection, CtaSection };

/// this code is for the TeampsPage
// import { API } from "aws-amplify";
// import { createRecipe } from "../../graphql/mutations";
// import { onCreateRecipe } from "../../graphql/subscriptions";
// useEffect(() => {
//   const subscription = API.graphql({ query: onCreateRecipe }).subscribe({
//     next: (recipeData) => {
//       console.log("recipeData", recipeData);
//     },
//   });
//   return () => subscription.unsubscribe();
// }, []);

// const createNewRecipe = async () => {
//   const title = prompt("Enter a name for the recipe");
//   const newRecipe = await API.graphql({
//     query: createRecipe,
//     variables: { input: { title } },
//   });
// };
