

export interface Data {
  name: string | null;
  created: Date | null | undefined | string;
  email: String | null;
  jop: string | null;
}

export interface DataEmpolye {
  email: string | null;
  password: Date | null | undefined | string;
}

export interface DtatUpdateEmpolye {
  email: string | null;
}

export interface FilteredEmployees {
  email: string | null;
  is_active: string | boolean | null;
}

export interface SerachPlan {
  value: string | number;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ItemsTablePropsForPlan {
  id:string;
  title: string;
  dependents_count: string;
  size: string;
  price: string;
}

export interface InputAppPlanProps {
  type: string;
  name: string;
  label: string;
  value: string | number | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Fetures{
  id:number|string,
  title:string
}
export interface PlanShowType{
  id:number,
   title: string,
    description: string,
    size:string,
    price: string,
    duration_days: string,
    dependents_count: string,
    features:Fetures[]
       
}


export interface DataCards{
    clients_count: number,
    dependents_count: number,
    media_count: number,
    revenues_sum: number

}


export   interface Empolyes {
  id:  any;
  email: string;
  is_active: boolean;
  roles: string[];
}

export interface AddParamType {
  value: string | number;
  label:string;
  type:string;


  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface PlanFetureShowType {
id:any,
title:string
}


export type AppSettings = {
  id: number;
  whatsApp: string;
  facebook: string;
  instagram: string;
  main_app_version: string;
  main_app_version_ios: string;
  app_android_link: string;
  app_android_direct_link: string;
  app_ios_link: string;
  policy_and_privacy: string;
  communication_with_support: string;
  ios_test: string;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
};

 interface Features{
    id:any;
    title:string
   }
  interface PlanData{
id:any;
title:string;
description:string;
size:string;
price:string;
duration_days:string;
dependents_count:string;
features:Features[]
  }
export interface Plan {
  id:any
  plan:PlanData
  
}

interface ClientPlan{
 id:any;
       name:string;
        email:string;
        job:null |string;
        is_active: boolean
}
export interface PlanDetailes{
  id:any;
title:string;
description:string;
size:string;
price:string;
duration_days:string;
dependents_count:string;
features:Features[]
client:ClientPlan
}