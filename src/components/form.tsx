import { useForm } from "react-hook-form"
import { useCreateUserMutation } from '../dashbord/userAPI'
import { Toaster, toast } from 'sonner'

type FormValues = {
    fullname: string;
    phone: string;
    email: string;
    address: string;
}

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [createUser, { isLoading, data, error }] = useCreateUserMutation()

    const onSubmit = async (data: FormValues) => {
        await createUser(data)
        if (data) {
            toast.success(`user with id ${data?.msg[0].id} created successfully`)
        }
    }



    return (
        <>
            <Toaster toastOptions={{
                classNames: {
                    error: 'bg-red-400',
                    success: 'text-green-400',
                    warning: 'text-yellow-400',
                    info: 'bg-blue-400',
                },
            }}
            />
            <form onSubmit={handleSubmit(onSubmit)} className="card max-w-fit grid grid-cols-1 gap-2 ">
                <div className="chat chat-end place-items-center">
                    <div className="chat-bubble text-4xl ">Register</div>

                </div>
                <div className='grid grid-cols-2 gap-2 place-items-center rounded-box max-w-fit'>
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-xs ">
                        <input {...register("fullname", { required: true })} type="text" className="grow" placeholder="Full Name" />
                    </label>
                    {errors.fullname && <span className="text-red-600">fullname is required</span>}
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input {...register("phone", { required: true })} type="text" className="grow" placeholder="Phone" />
                    </label>
                    {errors.phone && <span className="text-red-600">phone is required</span>}
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-xs ">
                        <input {...register("address", { required: true })} type="text" className="grow" placeholder="Address" />
                    </label>
                    {errors.address && <span className="text-red-600">address is required</span>}
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-xs ">
                        <input {...register("email", { required: true })} type="email" className="grow" placeholder="Email" />
                    </label>
                    {errors.email && <span className="text-red-600">email is required</span>}
                </div>
                <button type='submit' className='btn btn-outline btn-info w-fit'>{isLoading ? "Loading" : "Register"}</button>
            </form>
        </>

    )
}

export default Form