// schemas/schema.js
// Remove these v2 imports:

// Import your schema types directly

import abouts from "./abouts";
import contact from "./contact";
import Experiences from "./Experiences";
import Skills from "./Skills";
import testimonials from "./testimonials"
import WorkExperience from "./WorkExperience";
import Works from "./Works"

// Export schema types as an array
export const schemaTypes = [
    testimonials,
     abouts,
     Works, 
  Experiences,
  WorkExperience,
  Skills,
  contact
];