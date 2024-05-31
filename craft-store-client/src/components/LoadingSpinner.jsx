import { Hourglass } from "react-loader-spinner";


const LoadingSpinner = () => {
    return (
        <div className="justify-center">
              <Hourglass
  visible={true}
  height="100"
  width="100"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed', 'red']}
  />

        </div>
    );
};

export default LoadingSpinner;