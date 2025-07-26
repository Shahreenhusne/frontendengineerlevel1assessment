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

type FeatureArray ={
   type: string,
  name: string ,
  description: string,
  bg_color: string,
  order_idx: string,
  values: FeatureValues[]
}

export type Feature = FeatureArray[];

export type Section = SectionArray []; 

export type Media = MediaArray[];

export type Cta_Text = {
    name: string,
    value: string
}


export type CheckList = CheckeListArray[];
