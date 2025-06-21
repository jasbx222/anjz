import { StaticImageData } from "next/image";
import { number } from "zod/v4";

export const url =process.env.NEXT_PUBLIC_BASE_URL;
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
  placeholder:string;

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
  id:number | string,
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


   interface EmpolyesFor {
  id:   string;
  email: string;
  is_active: boolean;
  roles: string[];
}
export interface EmpolyesData {
  data: EmpolyesFor[];
  refetch:()=>void
}
export interface AddParamType {
  value: string ;
  label:string;
  type:string;


  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface PlanFetureShowType {
id: string,
title:string
}


export type AppSettings = {
  id:  string;
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
    id:string;
    title:string
   }
  interface PlanData{
id: string;
title:string;
description:string;
size:string;
price:string;
duration_days:string;
dependents_count:string;
features:Features[]
  }
export interface Plan {
  id: string
  plan:PlanData
  
}

interface ClientPlan{
 id:string;
       name:string;
        email:string;
        job:null |string;
        is_active: boolean
}
export interface PlanDetailes{
  id:string;
title:string;
description:string;
size:string;
price:string;
status:string;
old_plan:{
  id:number;
  title:string
}
duration_days:string;
dependents_count:string;
features:Features[]
client:ClientPlan
}

 export interface CardsProps {
  title?: string;
  description?: string;
  icon?: StaticImageData;
  href?: string;
}
export type Feature = {
  id: number;
  title: string;
};

export type PlanResponse = {
  plan_info: {
    id: number;
    title: string;
    description: string;
    size: string;
    price: string;
    duration_days: string;
    dependents_count: string;
    features: Feature[];
  };
  clients_count: number;
  revenues_sum: number;
};


export interface ProfileTypes{
  email:string;
  roles:string[];
  is_active:boolean
}

type ClientPayment = {
  id: number;
  name: string;
  email: string;
  job: string | null;
  is_active: boolean;
  created: string;
};

type PlanPayment = {
  title: string;
};

type SubscriptionPayment = {
  status: string;
  type: string;
  plan: PlanPayment;
  amount_paid: string;
  plan_price: string;
  storage_limit: string;
  max_users: string;
  start_date: string;
  end_date: string;
};

type CouponPayment = {
  code: string;
  value: string;
};

type MetaDataDetails = {
  rrn: string;
  authId: string;
  maskedPan: string;
  paymentSystem: string;
};

type MetaData = {
  currency: string;
  amount: number;
  paymentType: string;
  creationDate: string;
  details: MetaDataDetails;
};

export type PaymentData = {
  id: number;
  client: ClientPayment;
  subscription: SubscriptionPayment;
  coupon: CouponPayment;
  amount_paid: string;
  payment_id: string;
  request_id: string;
  status: string;
  meta_data: MetaData;
};

 export interface PaymentGetAll{
    id:number;
    client:{
        name:string;
      
    };
    subscription:{
        type:string;
         plan:{
        title:string
    }
    };
   
    
  }


 export interface Coupon{
        id:number;
        code:string;
        value:string;
        total_used:string;
     
  }

  
export type CouponShow= {
  id: number;
  code: string;
  value: string;
  max_usage_count: string;
  started_at: string;
  expired_at: string;
  created: string;
  total_used: number;
};
