import { ReactElement } from "react";
import { SpinnerLoad } from "../components/SpinnerLoad";

type Props = {
  loading?: boolean;
  children?: ReactElement;
};

const LoadingLayout = ({ loading, children }: Props) => {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-[100%]">
          <SpinnerLoad />
        </div>
      )}
      {!loading && children}
    </>
  );
};

export default LoadingLayout;
