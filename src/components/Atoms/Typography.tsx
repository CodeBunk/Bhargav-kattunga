const Typography = (props: {
  variant?: string;
  children: any;
  className?: string;
  loading?: boolean;
  title?: any;
}) => {
  switch (props.variant) {
    case "regular":
      return (
        <div
          className={` font-normal lg:text-7xl text-3xl text-inherit font-times   ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </div>
      );
      break;
    case "Heading":
      return (
        <span
          className={`  font-normal md:text-2xl text-base font-poppins ${
            props?.className ? props?.className : " "
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "details":
      return (
        <div
          className={` font-normal text-lg font-inter ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </div>
      );
      break;
    case "card-title":
      return (
        <span
          className={`font-inter font-semibold text-xl ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "form-upload":
      return (
        <span
          className={`font-inter font-medium text-xl ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "card-regular":
      return (
        <span
          className={`font-medium text-xxs leading-5 ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "sideHeadings":
      return (
        <span
          className={`font-medium text-3xl leading-5 ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "card-large":
      return (
        <span
          className={`font-medium text-4xl leading-[50px] ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "Bold":
      return (
        <span
          className={` font-bold text-xl font-inter ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "Button":
      return (
        <span
          className={`font-medium text-xl font-inter ${
            props?.className ? props?.className : ""
          }`}
        >
          {props.children}
        </span>
      );
      break;
    case "lead":
      return (
        <div className={`flex ${props?.className ? props?.className : ""}`}>
          {props.title ? "" : <div className="pr-2"> : </div>}
          <div className="font-bold leading-5	 text-sm font-inter tracking-wide uppercase">
            {props.children}
          </div>
        </div>
      );
      break;
    case "checkbox":
      return (
        <div className="font- text-sm font-inter tracking-wide ">
          {props.children}
        </div>
      );
      break;
    default:
      return (
        <div className={`text-sm ${props.className}`}>
          {props.loading ? (
            <div className="flex-1 animate-pulse">
              <div className="bg-gray h-52 rounded-xl " />
            </div>
          ) : (
            props.children
          )}
        </div>
      );
      break;
  }
};

export default Typography;
