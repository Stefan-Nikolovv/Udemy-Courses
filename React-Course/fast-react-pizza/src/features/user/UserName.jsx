import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.username);

  if (!userName) return;

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
