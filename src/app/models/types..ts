

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