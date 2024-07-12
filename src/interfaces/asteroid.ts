import { OrbitalData } from "./orbital-data";

// definition of the asteroid object returned from the API

interface MissDistance {
    astronomical: string;
    kilometers: string;
    lunar: string;
    miles: string;
  }
  
  interface RelativeVelocity {
    kilometers_per_hour: string;
    kilometers_per_second: string;
    miles_per_hour: string;
  }
  
  interface CloseApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    miss_distance: MissDistance;
    orbiting_body: string;
    relative_velocity: RelativeVelocity;
  }
  
  interface MinMax {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  }
  
  interface EstimatedDiameter {
    feet: MinMax;
    kilometers: MinMax;
    meters: MinMax;
    miles: MinMax;
  }
  
  export interface Asteroid {
    absolute_magnitude_h: number;
    close_approach_data: CloseApproachData[];
    estimated_diameter: EstimatedDiameter;
    id: string;
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object: boolean;
    links: { self: string };
    name: string;
    nasa_jpl_url: string;
    neo_reference_id: string;
    designation?: string;
    orbital_data?: OrbitalData;
  }
