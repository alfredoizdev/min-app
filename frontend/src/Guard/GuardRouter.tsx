import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../services/auth.services";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../app/features/user/userSlice";
import Loading from "../components/Loading/Loading";

interface Props {
	children?: React.ReactElement;
	redirectTo?: string;
}

const GuardRouter = ({
	redirectTo = "/login",
	children = undefined,
}: Props) => {
	const dispatch = useDispatch();
	const { isLoading, data } = useQuery({
		queryKey: ["user"],
		queryFn: getUser,
		onSuccess: (data) => {
			if (data) {
				dispatch(setCurrentUser({ email: data }));
			}
		},
	});

	if (isLoading) return <Loading />;

	if (!isLoading && !data) {
		return <Navigate to={redirectTo} />;
	}

	return children ? children : <Outlet />;
};

export default GuardRouter;
