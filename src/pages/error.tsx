import { Link} from "react-router-dom";
//import { error } from "console";
import {ArrowLeft} from 'lucide-react'

function Error() {
//const error : unknown = useRouteError()

  return (
    <div className="py-10  bg:base-100">
    <div className="text-center">
        <p className="text-base font-semibold text-blue-500">404</p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-green-300 sm:text-5xl">
            Page not found
        </h3>
        <p className="mt-4 text-base leading-7 text-gray-600">
            Sorry, we couldn't find a page you are looking for.
        </p>
        <p>
           error
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
            <Link to="/" className="inline-flex items-center btn btn-sm btn-info text-sm font-semibold"><ArrowLeft size={16} className="mr-2" />Go back
            </Link>
            <Link to="/" className="rounded-md btn btn-primary btn-sm  text-sm font-semibold"> Contact us
            </Link>
        </div>
    </div>
</div>
  )
}

export default Error