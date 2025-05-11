'use server'


export const AddUser =  async( formData: FormData) => {
  const title = formData.get("title");
  const price = formData.get("price");
  const size = formData.get("size");
 const data =[
  {title:title},
  {price:price},
  {size:size}
]
console.log(data)
};


