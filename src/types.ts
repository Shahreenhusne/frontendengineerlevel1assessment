type MediaArray = {
  name: string,
  resource_type: string,
  resource_value: string,
  thumbnail_url: string
}

type CheckeListArray = {

     color: string,
     icon: string,
     id: string,
     list_page_visibility: string,
     text: string

}

type Values = {
   description: string;
    has_instructor_page: boolean,
    image: string,
    name: string,
    short_description: string,
    slug: string

}

type SectionArray = {
  type: string,
  name: string ,
  description: string,
  bg_color: string,
  order_idx: string,
  values: Values[]
}

type FeatureValues = {
  icon:string,
  id:string,
  subtitle: string,
  title : string
}

type PointerValues = {
   color: string,
    icon: string,
    id:string,
    text: string
}
type AboutValues = {
  description : string
   icon: string
   id: string
   title: string
}

type FeatureExplanationsValue = {
  checklist: string [],
  file_type: string,
  file_url: string,
  id: string,
  title: string,
  video_thumbnail: string,
}

type FeatureExplanationsValueArray = {
  type:  string,
  name:  string,
  description: string,
  bg_color:string,
  order_idx: number
  values: FeatureExplanationsValue []
}
type AboutArray = {
  type: string,
  name: string,
  description: string,
  bg_color: string,
  order_idx: number,
  values: AboutValues []
}

type PointerArray = {
  type: string,
  name: string,
  description: string,
  bg_color:string,
  order_idx: number,
  values : PointerValues []
}
type FeatureArray ={
   type: string,
  name: string ,
  description: string,
  bg_color: string,
  order_idx: string,
  values: FeatureValues[]
}

export type FeatureExplanations = FeatureExplanationsValueArray [] ; //Course Exclusive Feature
export type About = AboutArray [] ; //Course details
export type Pointer = PointerArray [] ; //What you will learn by doing the course
export type Feature = FeatureArray[];    //How the course is laid out

export type Section = SectionArray []; 

export type Media = MediaArray[];

export type Cta_Text = {
    name: string,
    value: string
}


export type CheckList = CheckeListArray[];
