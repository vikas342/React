import { useForm } from 'react-hook-form';

export default function ReactHookForm() {

    const { register, handleSubmit, formState: { errors },  reset: formReset } =  useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        formReset();
    }
  return (
 
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <p>{errors.name?.message as string}</p>}

      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email?.message as string}</p>}
      <button type="submit">Submit</button>
    </form>

  )
} 

